let prevScrollHeight= 0

document.body.addEventListener("htmx:beforeSwap", (e)=>{
    if(e.detail.elt.id ==="live-chat__load-more"){
        prevScrollHeight = document.querySelector("#live-chat__messages").scrollHeight
    }
})

document.body.addEventListener("htmx:afterSwap", (e)=>{
    if(e.detail.elt.id ==="live-chat__load-more"){
        const liveChatMsg = document.querySelector("#live-chat__messages")
         liveChatMsg.scrollTo({top:liveChatMsg.scrollHeight - prevScrollHeight, behavior:"smooth"})
    }
})

