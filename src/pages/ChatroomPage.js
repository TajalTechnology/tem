import React from "react";
import io from "socket.io-client";

const ChatroomPage =({ match})=>{

    const chatroomId = match.params.id 
    // const socket2 = io.connect('http://localhost:8000')
    
    const socket = io("http://localhost:8000", {
        query:{
            token:localStorage.getItem("CC_Token"),
        },
    });

    return (
        <div>
            ChatroomPage Page
        </div>
    );
}

export default ChatroomPage;