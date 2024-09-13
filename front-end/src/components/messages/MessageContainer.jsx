// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
    // const noChatSelected =true ;
    const {selectedConversation,setSelectedConversation} = useConversation();
    console.log("selectedConversation mess :",selectedConversation);
    useEffect(()=>{
        //cleanup function
        return ()=>{
            setSelectedConversation(null);
        }
    },[setSelectedConversation])
  return (
    <div className='md:min-w[450px] flex flex-col'>
       {!selectedConversation  ? <NoChatSelected/> : (
        <>
            {/* Header  */}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span> {""}
                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>

            <Messages/>
            <MessageInput/>
        </>
       )}

    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    console.log("MessageContainer : ",authUser);
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
            </div>
        </div>
    )
}