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
            <div id="live-chat__toggle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            </div>
            <div id="live-chat__toggle-online">
                <span></span>
            </div>
        </button>

    </div>
`

export const loadMore = (url) => (`
    <input 
    type="button" 
    hx-get="${url}/messages/${localStorage.getItem("email")}?offset=0"
    id="live-chat__load-more" hx-swap="outerHTML"
    value="Load More" />
`)

export const styles = `
    <style>
        #live-chat{
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            width: 300px;
            height: 400px;
            background: hsl(var(--muted));
            box-shadow: 0 0 2px 0 hsl(var(--background));
            border-radius: 1em;
            padding: 1em;
            z-index: 50;
            display: none;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
        }

        #live-chat *{
            box-sizing:border-box; 
        }

        #live-chat.live-chat__active{
            display: grid;
        }

        #live-chat__header{
            padding-bottom: .5em;
            border-bottom: 1px solid hsl(var(--muted-foreground));
        }

        #live-chat__heading{
            width: fit-content;
            display: inline-block;
        }

        #live-chat__input-box{
            border-top:1px solid hsl(var(--muted-foreground));
            padding-top: 0.5em;
        }

        .message-input{
            padding: .2em;
            font-size: .85rem;
            background: inherit;
            color: inherit;
            border-radius: 5px;
            border: 1px solid hsl(var(--muted-foreground));
        }

        #live-chat__send{
            font-size: .85rem;
            padding: .2em;
            border: 1px solid hsl(var(--muted-foreground));
            border-radius: 5px;
        }

        #live-chat__send:hover{
            background: hsl(var(--muted-foreground));
            color: hsl(var(--background));
        }

        #live-chat__toggle, #live-chat__close{
            height: 3.5em;
            width: 3.5em;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        #live-chat__close{
            height: 3em;
            width: 3em;
            position: relative;
            height: 1.4em;
            width: 1.4em;
            color: #ef4444;
            float: right;
            z-index: 51;
        }

        #live-chat__toggle{
            position: fixed;
            bottom:1rem;
            right:1rem;
            z-index:49;
            border-radius: 100%;
            background: hsl(var(--muted));
            box-shadow: 0 0 2px 0 hsl(var(--background));
            color: #84cc16;
            overflow: visible;
        }

        #live-chat__toggle-online{
            height: .8em;
            width: .8em;
            border-radius: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background-color: #22c55e;
            display:none;
        }

        #live-chat__toggle-online span{
            height: 100%;
            width: 100%;
            border-radius: 100%;
            display:block;
            background: hsl(142 71% 45% / .4);
        }

        #live-chat__toggle-online.live-chat__toggle-online-active {
            display: block;
        }

        .live-chat__toggle-online-active span{
            animation: .6s linear .4s infinite ping;
        }

        @keyframes ping{
            from{
                transfrom: scale(1, 1);
            }

            to{
                transform: scale(1.5, 1.5);
            }
        }

        #live-chat__popup{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #live-chat__popup.live-chat__popup-hidden{
            display:none;
        }

        #live-chat__popup__background{
            position: absolute;
            background: hsl(var(--muted-foreground) / .4);
            height:100%;
            width:100%;
            left:0;
            top:0;
            z-index:1;
        }

        #live-chat__popup__inner{
            position:relative;
            padding: 1em;
            width: 80%;
            background: hsl(var(--muted));
            border-radius: .5em;
            z-index: 2;
        }

        #live-chat__popup__inner form{
            margin-top:1rem;
            display:flex;
            flex-direction:column;
            gap:5px;
        }
        
        #live-chat__popup__inner button{
            font-size:.85rem;
        }

        #live-chat__popup__inner button:hover{
            color: #06b6d4;
        }

        #live-chat__messages{
            display:flex;
            flex-direction: column;
            padding-block: .5em;
            gap: 8px;
            overflow-y: auto;
        }

        .admin-message, .user-message{
            border: 1px solid hsl(var(--muted-foreground));
            padding: .1em .2em;
            font-size: .85rem;
            max-width: 15em;
            overflow-wrap: break-word;
        }

        .admin-message{
            border-radius: 5px 5px 5px 0;
            align-self: start;
        }

        .user-message{
            border-radius: 5px 5px 0 5px;
            align-self: end;
        }

        #live-chat__online{
            height: 1em;
            width: 1em;
            border-radius: 100%;
            color: #22c55e;
            display: none;
        }

        #live-chat__online.live-chat__online-active{
            display: inline;
        }

        #live-chat__load-more{
            padding:.1em .5em;
            border: 1px solid hsl(var(--muted-foreground));
            cursor: pointer;
            border-radius: 1em;
            width: fit-content;
            align-self: center;
            color: #cffafe;
            font-size: .85rem;
            margin-bottom: .5em;
            font-weight: bolder;
        }

        #live-chat__load-more:hover{
            background: hsl(var(--muted-foreground));
        }


    </style>
`
