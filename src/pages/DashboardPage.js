import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const DashboardPage = () => {

  const [chatrooms, setChatrooms] = React.useState([])
  const getChatrooms = () => {
    axios.get("http://localhost:8000/chatroom", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("CC_Token"),
      },
    }).then(response => {
      setChatrooms(response.data.chatroom);
    }).catch(err => {
      setTimeout(getChatrooms, 8000)
    });

  };

  React.useEffect(() => {
    getChatrooms();
  }, [])

  console.log(chatrooms)
  return (
    <div className="card">
      <div className="cardHeader">Chatroom</div>
      <div className="cardBody">

        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="Name of your chatroom"
          />
        </div>

        <button>Create Chatroom</button>

        <div className="chatrooms">

          {chatrooms.length > 0 && chatrooms?.map((chatroom) => {
            return <div key={chatroom._id} className="chatroom">
              <div>{chatroom.name}</div>
              <Link to={"/chatroom/" + chatroom._id}>
                <div className="join">Join</div>
              </Link>
            </div>
          }
          )}

        </div>

      </div>
    </div>
  );
}

export default DashboardPage;