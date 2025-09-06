import MessageComp from "./MessageComp"
import RoomView from "./RoomView"
import "./Chat.scss"
import { useState } from "react"


function handleMessage(e, messages, setMessages) {
    const target = e.target
    const key = e.keyCode
    const text = target.value


    const newMessage = {
        type: "text",
        data: {
            username: "Shulin",
            avatar: "flins",
            message: text
        }
    }


    if (key === 13) {
        // enter key pressed
        setMessages([...messages, newMessage])
        target.value = ""
    }
}


function GeneralChat() {
    const [messages, setMessages] = useState([
        {
            type: "join",
            data: {
                username: "Shulin"
            }
        },
        {
            type: "text",
            data: {
                username: "Shulin",
                avatar: "flins",
                message: "hello world"
            }
        },
    ])


    return (
        <>
            <div className="chat">
                <div className="chat-view">
                    {
                        messages.map((message, i) => {
                            return (
                                <MessageComp
                                    type={message.type}
                                    data={message.data}
                                    key={i}
                                />
                            )
                        })
                        // messages.filter((message, i) => {
                        //     if (message.type === "join") {
                        //         return (
                        //             <MessageComp
                        //                 type="join"
                        //                 data={{
                        //                     username: "Shulin"
                        //                 }}
                        //             />
                        //         )
                        //     } else {
                        //         return (
                        //             <MessageComp
                        //                 type="text"
                        //                 data={{
                        //                     username: "Shulin",
                        //                     avatar: "flins",
                        //                     message: "hello world"
                        //                 }}
                        //             />
                        //         )
                        //     }
                        // })
                    }
                    {/* <MessageComp
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
                    /> */}
                </div>
            </div>
            <input
                type="text"
                placeholder="Message #GENERAL"
                className="chat-input"
                onKeyDown={e => handleMessage(e, messages, setMessages)}
            />
            {/* <textarea className="chat-input" style={{resize: "none"}} placeholder="Message #GENERAL" ></textarea> */}
        </>
    )
}






function MainView(props) {
    return (
        <>
            {props.type === "ROOM" ? <RoomView /> : <GeneralChat />}
        </>
    )
}

export default MainView