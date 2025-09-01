import "../styles/home.scss"
// import flins from "../assets/icons/flins.png"
import { useState } from "react"
// import MessageComp from "../components/MessageComp"
import ChatView from "../components/ChatView"
import ProfileView from "../components/ProfileView"
import RoomView from "../components/RoomView"

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
          {/* <ProfileView /> */}
          <ChatView type={slider}/>
        </div>

      </div>
    </div>
  )
}

export default Home