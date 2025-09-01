import { useState } from "react"
import "./RoomView.scss"

import MessageComp from "./MessageComp"

function CreateView(props) {
    return (
        <>
            <span className="ctx-head">Create a Room</span>

            <div className="ctx-input">
                <span className="ctx-span">Password <span className="ctx-span-greyed">(optional)</span></span>
                <input type="password" />
            </div>

            <div className="ctx-input start">
                <span className="ctx-span">RoomID: <span className="ctx-span-greyed">unassigned</span></span>
            </div>

            <button onClick={() => {props.setIsChatActive(true)}}>CREATE</button>
        </>
    )
}

function JoinView() {
    return (
        <>
            <span className="ctx-head">Join a Room</span>

            <div className="ctx-input">
                <span className="ctx-span">RoomID</span>
                <input type="text" />
            </div>

            <div className="ctx-input">
                <span className="ctx-span">Password <span className="ctx-span-greyed">(if applicable)</span></span>
                <input type="password" />
            </div>

            <button>JOIN</button>
        </>
    )
}


// states needed - login, inside room

function RoomChat() {
    return (
        <>
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
            <input type="text" placeholder="Message #ROOM" className="chat-input" />
        </>
    )
}


function RoomView() {
    const [slider, setSlider] = useState("CREATE")
    const [isChatActive, setIsChatActive] = useState(false)

    return (
        <div className="room-view">
            <div className="connect-container">
                <div className="connect-wrapper">
                    <span className={`slider ${slider}`}></span>
                    <span onClick={() => { setSlider("CREATE") }}>CREATE</span>
                    <span onClick={() => { setSlider("JOIN") }}>JOIN</span>
                </div>
            </div>

            <div className="context-container">
                {
                    slider === "JOIN" ? <JoinView /> : <CreateView setIsChatActive={setIsChatActive}/>
                }
                {/* {
                    isChatActive ? <RoomChat /> : ""
                } */}
            </div>
        </div>
    )
}

export default RoomView