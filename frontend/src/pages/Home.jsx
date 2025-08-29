import "../styles/home.scss"
// import flins from "../assets/icons/flins.png"
import { useState } from "react"
// import MessageComp from "../components/MessageComp"
import ChatView from "../components/ChatView"

function Home() {
  const [slider, setSlider] = useState("GENERAL")

  return (
    <div className='home'>
      <div className="wrapper">

        <div className="context">
          <img src={"icons/flins.png"} className="profile" />
          <div className="nav">
            <div className="nav-container">
              <span className={`slider ${slider}`}></span>
              <span onClick={() => {setSlider("GENERAL")}}>GENERAL</span>
              <span onClick={() => {setSlider("ROOM")}}>ROOM</span>
            </div>
          </div>
        </div>

        <div className="container">
          <ChatView type={slider}/>
          {/* <div className="chat">
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
                  username: <span style={{color: "#FF8688"}}>Server</span>,
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
          </div> */}
          <input type="text" placeholder="Message #GENERAL" className="chat-input" />
        </div>

      </div>
    </div>
  )
}

export default Home