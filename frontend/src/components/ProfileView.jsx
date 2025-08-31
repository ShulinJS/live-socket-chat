import { useState } from "react"
import "./ProfileView.scss"




function ProfileView() {
    const [nicknameEditable, setNicknameEditable] = useState(false)
    const [passwordEditable, setPasswordEditable] = useState(false)
    const [avatar, setAvatar] = useState("flins")

    const chars = [
        "lumine", "skirk", "raiden", "arle", "furina",
        "flins", "kinich", "kazuha", "xiao", "tartaglia"
    ]
    
    function avatarOnclick(e){
        const elem = e.target
        const avatar = elem.alt
        setAvatar(avatar)
        document.querySelectorAll(".avatar").forEach((e) => {e.classList.remove("active")})
        elem.classList.add("active")
    }
    // const [nickname, setNickname] = useState({active: false, color: "#FFFFFF"})
    // const [password, setPassword] = useState({active: false, color: "#FFFFFF"})

    return (
        <div className="profile-view">


            <div className="avatar-container">
                <div className="avatar-current">
                    <img src={`icons/${avatar}.png`} alt="" />
                </div>
                <div className="avatar-selector">
                    {
                        chars.map((char, i) => {
                            return (
                                <img className={char === avatar ? "avatar active" : "avatar"} src={`icons/${char}.png`} alt={char} onClick={avatarOnclick} key={i} />
                            )
                        })
                    }
                    {/* <img className="avatar" src={`icons/lumine.png`} alt="lumine" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/skirk.png`} alt="skirk" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/raiden.png`} alt="raiden" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/arle.png`} alt="arle" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/furina.png`} alt="furina" onClick={avatarOnclick} />
                    <img className="avatar active" src={`icons/flins.png`} alt="flins" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/kinich.png`} alt="kinich" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/kazuha.png`} alt="kazuha" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/xiao.png`} alt="xiao" onClick={avatarOnclick} />
                    <img className="avatar" src={`icons/tartaglia.png`} alt="tartaglia" onClick={avatarOnclick} /> */}
                </div>
            </div>

            <div className="cred-container">
                <div>
                    <span>Nickname:</span>
                    <input type="text" id="nickname" defaultValue={"Shulin"} readOnly={!nicknameEditable} />
                    <img
                        src="edit.png"
                        alt="edit nickname"
                        draggable="false"
                        onClick={() => {setNicknameEditable(!nicknameEditable)}}
                    />
                </div>
                <div>
                    <span>Password:</span>
                    <input type="password" id="password" defaultValue={"idksomething"} readOnly={!passwordEditable}/>
                    <img
                        src="edit.png"
                        alt="edit password"
                        draggable="false"
                        onClick={() => {setPasswordEditable(!passwordEditable)}}
                    />
                </div>
            </div>

            <div className="btns-container">
                <button id="save-btn">Save Changes</button>
                <button id="cancel-btn">Cancel</button>
                <button id="signout-btn">Sign Out</button>
            </div>



        </div>
    )
}

export default ProfileView