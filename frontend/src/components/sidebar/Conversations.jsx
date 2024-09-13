// eslint-disable-next-line no-unused-vars
import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hook/useGetConversations';
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = () => {
 const {loading,conversations} = useGetConversations();
 console.log("CONVERSATIONS : ", conversations);
   
  // Kiểm tra và lấy danh sách người dùng từ conversations.filteredUsers
  const conversationsList = Array.isArray(conversations?.filteredUsers) ? conversations.filteredUsers : [];
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversationsList.map((conversation,idx)=>(
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations


// START CODE 
// const Conversations = () => {
//     return (
//       <div className='py-2 flex flex-col overflow-auto'>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//           <Conversation/>
//       </div>
//     )
//   }
  
//   export default Conversations