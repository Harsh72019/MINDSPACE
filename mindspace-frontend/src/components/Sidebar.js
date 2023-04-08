import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { addNotifications, resetNotifications } from "../features/userSlice";
import "./Sidebar.css";
// import { Row, Col, ListGroup } from "react-bootstrap";

function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    socket,
    setMembers,
    members,
    setCurrentRoom,
    setRooms,
    privateMemberMsg,
    rooms,
    setPrivateMemberMsg,
    currentRoom,
  } = useContext(AppContext);

  function joinRoom(room, isPublic = true) {
    if (!user) {
      return alert("Please login");
    }
    socket.emit("join-room", room, currentRoom);
    setCurrentRoom(room);

    if (isPublic) {
      setPrivateMemberMsg(null);
    }
    // dispatch for notifications
    dispatch(resetNotifications(room));
  }

  socket.off("notifications").on("notifications", (room) => {
    if (currentRoom != room) dispatch(addNotifications(room));
  });

  useEffect(() => {
    if (user) {
      setCurrentRoom("spirituality");
      getRooms();
      socket.emit("join-room", "spirituality");
      socket.emit("new-user");
    }
  }, []);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  function getRooms() {
    fetch("http://localhost:5001/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }

  function orderIds(id1, id2) {
    if (id1 > id2) {
      return id1 + "-" + id2;
    } else {
      return id2 + "-" + id1;
    }
  }

  function handlePrivateMemberMsg(member) {
    setPrivateMemberMsg(member);
    const roomId = orderIds(user._id, member._id);
    joinRoom(roomId, false);
  }

  if (!user) {
    return <></>;
  }
  return (
    <div className="ol h-[90vh]">
      <h2 className="text-2xl text-white font-bold m-2">Available rooms</h2>
      <ul class="divide-y divide-gray-200">
        {rooms.map((room, idx) => (
          <li
            key={idx}
            onClick={() => joinRoom(room)}
            className={`flex items-center justify-between cursor-pointer py-2 px-3 ${
              currentRoom === room
                ? "bg-blue-300 font-medium"
                : "bg-white font-normal hover:bg-gray-100"
            }`}
          >
            <span>{room}</span>
            {currentRoom !== room && (
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium text-white bg-blue-500 ">
                {user.newMessages[room]}
              </span>
            )}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl text-white font-bold m-2">Members</h2>
      {members.map((member) => (
        <div
          key={member.id}
          className={`cursor-pointer  flex items-center py-3 px-4 ${
            privateMemberMsg?._id === member?._id ? "bg-blue-300 text-black ]" : "hover:bg-gray-100 text-black bg-white "
          }`}
          onClick={() => handlePrivateMemberMsg(member)}
          disabled={member._id === user._id}
        >
          <div className="w-2/12 flex flex-col items-center">
            <img
              src={member.picture}
              className="w-12 h-12 rounded-full member-status-img"
              alt={member.name}
            />
            {member.status === "online" ? (
              <i className="fas fa-circle sidebar-online-status"></i>
            ) : (
              <i className="fas fa-circle sidebar-offline-status"></i>
            )}
          </div>
          <div className="w-9/12">
            <span className="text-base font-medium">{member.name}</span>
            {member._id === user?._id && (
              <span className="text-base font-medium">(You)</span>
            )}
            {member.status === "offline" && (
              <span className="text-base font-medium">(Offline)</span>
            )}
          </div>
          <div className="w-2/12">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500 text-white">
              {user.newMessages[orderIds(member._id, user._id)]}
            </span>
          </div>
        </div>
      ))}
     
    </div>
  );
}

export default Sidebar;
