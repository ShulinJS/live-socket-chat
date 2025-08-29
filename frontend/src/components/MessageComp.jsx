import "./MessageComp.scss"


function TextMessage({data}){
    return (
        <div className="text-message">

            <div className="left">
                <img src={`icons/${data.avatar}.png`} alt="" />
            </div>
            <div className="right">
                <div className="username">{data.username}</div>
                <div className="message">{data.message}</div>
            </div>

        </div>
    )
}


function JoinMessage({data}){
    return (
        <div className="join-message">
            <div className="join-message-divider"></div>
            <span className="join-message-message">{data.username} has joined</span>
        </div>
    )
}


function MessageComp(props) {
  return (
    <div className="message-component">
        {props.type === "text" ? <TextMessage data={props.data}/> : <JoinMessage data={props.data}/>}
    </div>
  )
}

export default MessageComp