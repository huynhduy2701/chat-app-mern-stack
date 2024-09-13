// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hook/useGetMessage'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hook/useListenMessages';

// const Messages = () => {
//   const {messages,loading} = useGetMessage();
//   console.log("messages : ",messages);
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading && messages.length > 0 && messages.map((message)=>{
//         <Message key={message._id} message={message}/>
//       })}

//        {loading && [...Array(3)].map((_,idx) => {<MessageSkeleton key={idx}/>})}

//        {!loading && messages.length === 0 && (
//         <p className='text-center text-white'>Gởi một tin nhắn để bắt đầu cuộc trò chuyện</p>
//        )}
//     </div>
//   )
// }
// code tren loi 
const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log("messages : ", messages);
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior :"smooth"})
    },100)
  },[messages])
  return (
      <div className='px-4 flex-1 overflow-auto'>
          {loading && [...Array(3)].map((_, idx) => (
              <MessageSkeleton key={idx} />
          ))}

          {!loading && messages.length > 0 && messages.map((message) => (
              <div key={message._id} ref={lastMessageRef}>
                  <Message key={message._id} message={message} />
              </div>
          ))}

          {!loading && messages.length === 0 && (
              <p className='text-center text-white'>
                  Gửi một tin nhắn để bắt đầu cuộc trò chuyện
              </p>
          )}
      </div>
  );
};

export default Messages




// const Messages = () => {
//     return (
//       <div className='px-4 flex-1 overflow-auto'>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//           <Message/>
//       </div>
//     )
//   }
  
//   export default Messages