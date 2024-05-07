import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, generateRandomString } from "../Utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
    //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(18),
        })
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [text,setText]=useState('');
//   console.log(text);
  const sendMessage=()=>{
    console.log("button clicked");
    dispatch(
        addMessage({
          name: "Prasad's",
          message: text,
        })
      );
      setText("")
  }
  return (
    <>
      <div className="ml-2 border border-black w-[24rem] l h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat,index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index}/>
        ))}
      </div>
      <form className="border border-black bg-gray-400 rounded-lg m-2 p-2 items-center flex"
      onClick={(e)=>(e.preventDefault())}
      >
        <input
          type="text"
          className="border border-black   w-72 rounded-lg px-2"
          value={text}
          onChange={(e)=>(setText(e.target.value))}
        />
        <button className="border border-black  bg-black text-white rounded-lg hover:bg-gray-400 font-bold ml-4 px-2"
        onClick={sendMessage}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
