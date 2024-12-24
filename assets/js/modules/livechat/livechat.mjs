import { liveChatStatic, loadMore } from "./livechat-html.mjs"
import { styles } from "./livechat-styles.mjs"

initializeLiveChat()

const liveChatEmailForm = document.querySelector("#live-chat__popup")
export const SocketUrl = "localhost:8181"
//export const SocketUrl = "192.168.1.3:8181"

if(liveChatEmailForm){
    if(localStorage.getItem("email")){
        initializeSocket(localStorage.getItem("email"))
    }else{
        console.log("no email found")
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
        msgOutput.insertAdjacentHTML("afterbegin", loadMore())
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

        try{
            conn = new WebSocket(ws)
            console.log("Connected")
        }catch(e){
            alert("Could not connect to chat please try a different email or refresh the page")
            console.log(e)
        }
        liveChatEmailForm.classList.add("live-chat__popup-hidden")

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


function initializeLiveChat(){
    document.head.insertAdjacentHTML("beforeend", styles)
    document.body.insertAdjacentHTML("beforeend", liveChatStatic)

    const liveChatToggle = document.querySelector("#live-chat__toggle")
    const liveChatClose = document.querySelector("#live-chat__close")

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
        }
    }
}
