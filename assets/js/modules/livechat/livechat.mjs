import { liveChatStatic, loadMore } from "./livechat-html.mjs"
import { styles } from "./livechat-styles.mjs"

export const SocketUrl = "livechat-admin.worldwideclothing.in"
//export const SocketUrl = "localhost:8181"
initializeLiveChat()

const liveChatEmailForm = document.querySelector("#live-chat__popup")

if(liveChatEmailForm){
    if(localStorage.getItem("email")){
        initializeSocket(localStorage.getItem("email"))
    }else{
        //console.log("no email found")
        liveChatEmailForm.classList.remove("live-chat__popup-hidden")

        liveChatEmailForm.addEventListener("submit", (e)=>{
            e.preventDefault()
            const email = (new FormData(e.target)).get("email")
            if(!localStorage.getItem("email")){
                localStorage.setItem("email", email)
            }
            initializeSocket(email)
        })
    }
}

function initializeSocket(email){
    if(!window["WebSocket"]){
        alert("Your browser does not support web sockets")
        return
    }
    let conn,
        msgForm = document.querySelector("#live-chat__input-box"),
        msgOutput = document.querySelector("#live-chat__messages")

    if (msgForm){
        msgOutput.insertAdjacentHTML("afterbegin", loadMore(location.protocol + "//" +  SocketUrl))
        msgForm.addEventListener("submit", (e)=>{
            e.preventDefault()
            const message =  (new FormData(e.target)).get("message-input")

            if(message){
                appendLog(message, true)
                conn.send(message)
            }
        })
    }

    connectToWebSocket()

    function connectToWebSocket(){
        let ws = ""
        if(location.protocol==="https:"){
            ws = "wss://"
        }else{
            ws = "ws://"
        }

        ws += SocketUrl + "/ws?email=" + email

        conn = new WebSocket(ws)
        //console.log("Connected")
        liveChatEmailForm.classList.add("live-chat__popup-hidden")

        conn.onerror = ()=>{
            alert("Could not connect to chat please try a different email or refresh the page")
            localStorage.removeItem("email")
            liveChatEmailForm.classList.remove("live-chat__popup-hidden")
            console.log(e)
        }

        conn.onclose = ()=>{
            appendLog("Connection Closed", false)
        }

        conn.onmessage = (evt)=>{
            try{
                const onlineIndicator = document.querySelector("#live-chat__online")
                const jsonData = JSON.parse(evt.data)
                if(jsonData?.event==="online" || jsonData?.event==="admin-online"){
                    onlineIndicator.classList.add("live-chat__online-active")
                }
                if(jsonData?.event==="offline" || jsonData?.event==="admin-offline"){
                    onlineIndicator.classList.remove("live-chat__online-active")
                }

            }catch(_){
                var messages = evt.data
                appendLog(messages, false);
            }finally{
                const toggleOnlineIndicator = document.querySelector("#live-chat__toggle-online")

                if(toggleOnlineIndicator){
                    toggleOnlineIndicator.classList.add("live-chat__toggle-online-active")
                }

            }
        }

    }

    function appendLog(msg, self){
        const msgDiv = document.createElement("div")

        if(self){
            msgDiv.classList.add("user-message")
        }else{
            msgDiv.classList.add("admin-message")
        }

        msgDiv.textContent = msg
        msgOutput.appendChild(msgDiv)
    }
}


async function initializeLiveChat(){
    document.head.insertAdjacentHTML("beforeend", styles)
    document.body.insertAdjacentHTML("beforeend", liveChatStatic)

    const liveChatToggle = document.querySelector("#live-chat__toggle")
    const liveChatClose = document.querySelector("#live-chat__close")
    const liveChatToggleIndicator = document.querySelector("#live-chat__toggle-online")

    if (liveChatToggle) {
        liveChatToggle.addEventListener("click", toggleChat)
    }

    if (liveChatClose) {
        liveChatClose.addEventListener("click", toggleChat)
    }

    function toggleChat() {
        const liveChat = document.querySelector("#live-chat")
        if (liveChat) {
            liveChat.classList.toggle("live-chat__active")
            liveChatToggleIndicator.classList.remove("live-chat__toggle-online-active")
        }
    }
    let response = ""
    const onlineIndicator = document.querySelector("#live-chat__online")

    try{
         response = await (await fetch(location.protocol + "//" + SocketUrl + "/online")).text()
    }catch(e){
        console.log(e)
    }

    if(response =="online" && onlineIndicator){
        onlineIndicator.classList.add("live-chat__online-active")
    }
}
