export const liveChatStatic = `
    <div id="live-chat__container">
        <section id="live-chat">
            <div id="live-chat__header">
                <h3 id="live-chat__heading">YourPharma <span id="live-chat__online">Online</span></h3>
                <span></span>
                <button type="button" id="live-chat__close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <div id="live-chat__messages">
            </div>

            <form id="live-chat__input-box">
                <textarea type="text" class="message-input" name="message-input" required></textarea>
                <button id="live-chat__send" type="submit">Send</button>
            </form>

            <div id="live-chat__popup" class="live-chat__popup-hidden">
                <div id="live-chat__popup__background"></div>
                <div id="live-chat__popup__inner">
                    <h3>Enter your email to start chatting</h3>
                    <form id="live-chat__email-form">
                        <input type="email" class="message-input" id="live-chat-email", name="email" required placeholder="Enter your email">
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>

        <button type="button" id="live-chat__toggle">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            </div>
        </button>

    </div>
`

export const loadMore = () => (`
    <input 
    type="button" 
    hx-get="http://localhost:8181/messages/${localStorage.getItem("email")}?offset=0"
    id="live-chat__load-more" hx-swap="outerHTML"
    value="Load More" />
`)
