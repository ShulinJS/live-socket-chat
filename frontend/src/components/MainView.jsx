import MessageComp from "./MessageComp"
import RoomView from "./RoomView"

import "./Chat.scss"

function GeneralChat() {
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
                            username: "Shulin",
                            avatar: "flins",
                            message: "hello world"
                        }}
                    />
                </div>
            </div>
            <input type="text" placeholder="Message #GENERAL" className="chat-input" />
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