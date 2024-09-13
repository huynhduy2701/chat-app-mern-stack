// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hook/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
      const [search , setSearch] = useState("");
      const {setSelectedConversation} = useConversation();
      const {conversations} = useGetConversations();
      const handleSubmit =(e)=>{
        console.log("conversations : ",conversations); // Kiểm tra xem conversations có phải là mảng không
        e.preventDefault();
        if (!search) {
          return
        }
        if (search.length < 3) {
          toast.error(" Tìm kiếm gì đó dài hơn 3 kí tự")
        }

        // const conversation = conversations.find((f)=> f.fullName.toLowerCase().includes(search.toLowerCase()));
        const conversation = conversations.filteredUsers.find((f) => f.fullName.toLowerCase().includes(search.toLowerCase()));

       if (conversation) {
        setSelectedConversation(conversation);
        setSearch("");
       }else{
        toast.error("Không tìm thấy");
       }
      }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search ...'
         className='input input-bordered rounded-full'
         value={search}
         onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white outline-none border-none'><CiSearch /></button>
    </form>
  )
}

export default SearchInput


// START CODE 
// const SearchInput = () => {
//     return (
//       <form className='flex items-center gap-2'>
//           <input type="text" placeholder='Search ...'
//            className='input input-bordered rounded-full'
//           />
//           <button type='submit' className='btn btn-circle bg-sky-500 text-white'><CiSearch /></button>
//       </form>
//     )
//   }
  
//   export default SearchInput