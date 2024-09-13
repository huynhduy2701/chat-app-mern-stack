// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../hook/useSendMessage';
import { useAuthContext } from '../../context/AuthContext';
const MessageInput = () => {
  const {authUser} = useAuthContext();
  console.log("MessageContainer : ",authUser);
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (!message) {
      return
    }
    await sendMessage(message);
    setMessage(""); // clear input field after sending message
    // send message to backend api
  }
  return (
    <div>
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input type="text" 
                className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                placeholder={authUser.fullName + " ơi! Bạn hãy gởi tin nhắn ở đây"}
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button className='absolute inset-y-0 end-0 flex items-center pe-3 hover:text-white ' type='submit' disabled={loading}>
                  {loading ? <div className='loading loading-spinner'></div> : <IoMdSend />}
                </button>
            </div>
        </form> 
    </div>
  )
}

export default MessageInput


// const MessageInput = () => {
//     return (
//       <div>
//           <form className='px-4 my-3'>
//               <div className='w-full relative'>
//                   <input type="text" 
//                   className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//                   placeholder='Send a message'
//                   />
//                   <button className='absolute inset-y-0 end-0 flex items-center pe-3' type='submit'><IoMdSend /></button>
//               </div>
//           </form> 
//       </div>
//     )
//   }
  
//   export default MessageInput