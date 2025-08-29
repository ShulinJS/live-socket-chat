import { useState } from "react"
import "../styles/auth.scss"
import "../styles/topography.scss"

// import ServerLogo from "../assets/icons/server.png"

function Auth() {
  return (
    <div className="auth">
      <div className="container">
        <img src={"icons/server.png"} alt="logo" className="logo"/>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>LOGIN</button>
        <span>no account? <span>create</span></span>
      </div>
    </div>
  )
}

export default Auth