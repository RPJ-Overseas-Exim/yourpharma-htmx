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
            height: 3em;
            width: 3em;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #live-chat__close{
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
