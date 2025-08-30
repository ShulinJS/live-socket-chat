import { useState } from "react"
import "./ProfileView.scss"

function ProfileView() {
    const [nicknameEditable, setNicknameEditable] = useState(false)
    const [passwordEditable, setPasswordEditable] = useState(false)

    return (
        <div className="profile-view">


            <div className="avatar-container">
                <div className="avatar-current">
                    <img src={`icons/flins.png`} alt="" />
                </div>
                <div className="avatar-selector">
                    <img src={`icons/lumine.png`} alt="" />
                    <img src={`icons/skirk.png`} alt="" />
                    <img src={`icons/raiden.png`} alt="" />
                    <img src={`icons/arle.png`} alt="" />
                    <img src={`icons/furina.png`} alt="" />
                    <img className="active-avatar" src={`icons/flins.png`} alt="" />
                    <img src={`icons/kinich.png`} alt="" />
                    <img src={`icons/kazuha.png`} alt="" />
                    <img src={`icons/xiao.png`} alt="" />
                    <img src={`icons/tartaglia.png`} alt="" />
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


        </div>
    )
}

export default ProfileView