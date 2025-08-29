import MessageComp from "./MessageComp"
import "./ChatView.scss"

function GeneralChat() {
    return (
        <div className="chat">
            <div className="chat-view">
                <MessageComp
                    type="join"
                    data={{
                        username: "Shulin"
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Shulin",
                        avatar: "flins",
                        message: "hello world"
                    }}
                />
            </div>
        </div>
    )
}


// states needed - login, inside room

function RoomChat() {
    return (
        <div className="chat">
            <div className="chat-view">
                <MessageComp
                    type="join"
                    data={{
                        username: "Shulin"
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: <span style={{ color: "#FF8688" }}>Server</span>,
                        avatar: "server",
                        message: `Hello, Shulin! Enter /info in chat to list details about this room`
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Shulin",
                        avatar: "flins",
                        message: "aight"
                    }}
                />
                <MessageComp
                    type="join"
                    data={{
                        username: "Ciel"
                    }}
                />
                <MessageComp
                    type="join"
                    data={{
                        username: "Raiden"
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Shulin",
                        avatar: "flins",
                        message: "yoiyoi"
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Ciel",
                        avatar: "skirk",
                        message: `yoooo
                  what this?`
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Shulin",
                        avatar: "flins",
                        message: "it's a websocket based chat application i'm working on"
                    }}
                />
                <MessageComp
                    type="text"
                    data={{
                        username: "Raiden",
                        avatar: "raiden",
                        message: `cool`
                    }}
                />
            </div>
        </div>
    )
}



function ChatView(props) {
    return (
        <>
            {props.type === "ROOM" ? <RoomChat /> : <GeneralChat />}
        </>
    )
}

export default ChatView