import React , {useEffect} from "react";
import { useSelector } from "react-redux";
// import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
// import ScrollLock from 'react-scroll-lock-component';

function Chat() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
    // if(!user)
    //   window.location.replace("/login");
 
    return (
       
        <div class="h-[100vh] blue-glassmorphism specific-content">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full md:w-4/12">
              <Sidebar />
            </div>
            <div class="w-full md:w-8/12">
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
     
    );
}

export default Chat;
