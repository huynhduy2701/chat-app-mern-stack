// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';
import PropTypes from 'prop-types'; // Thêm import PropTypes
const Message = ({message}) => {
    console.log('Rendering message:', message); 
    const {authUser} = useAuthContext() ;
    const {selectedConversation} = useAuthContext();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const shakeClass = message.shouldShake ? "shake" : "" ;
    // const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    // const profilePic = fromMe ? authUser.profilePic : (selectedConversation?.profilePic || 'default-avatar.png');
    const profilePic = fromMe 
  ? authUser.profilePic 
  : (selectedConversation?.profilePic || 'https://avatar.iran.liara.run/public'); // Sử dụng ảnh mặc định nếu không có profilePic
    const bubbleBgColor = fromMe ? "bg-blue-500":"";
    console.log('Message object:', message);
console.log('Message text:', message.message);
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-r-full'>
                <img src={profilePic} alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500 ${shakeClass} ${bubbleBgColor} pb-2` }>
            {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            {formattedTime} 
        </div>
        
    </div>
  )
}
// Định nghĩa kiểu dữ liệu cho props
Message.propTypes = {
    message: PropTypes.shape({
        senderId: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        createdAt: PropTypes.string, // Nếu bạn sử dụng extractTime, đảm bảo định nghĩa đúng kiểu dữ liệu
        shouldShake: PropTypes.bool, 
    }).isRequired
};

export default Message