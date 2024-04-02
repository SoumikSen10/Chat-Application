import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full mb-[1px]`,
  name: `absolute mt-[-2rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full w-[10rem] m-[1rem] p-[1rem]`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full w-[10rem] mb-[1rem] p-[1rem]`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div>
      <div className={`{style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
