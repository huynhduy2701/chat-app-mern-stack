// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hook/useLogin';

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {loading,login} = useLogin();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // call backend API to login user
       await login(username,password);
       console.log(username);
       console.log(password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0
        '>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 p-1'>ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username ' className='w-full input input-bordered h-10'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password"
                        className='w-full input input-bordered h-10'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block cursor-pointer'>
                    {"Don't"} have a account ?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 hover:bg-blue-600 outline-none border-none ' disabled={loading} type='submit'>
                        {loading ? <span className='loading loading-spinner' ></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login



// START CODE 
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//           bg-opacity-0
//           '>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Login
//                   <span className='text-blue-500 p-1'>ChatApp</span>
//               </h1>
//               <form action="">
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter username ' className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="text"
//                           className='w-full input input-bordered h-10'
//                           placeholder='Enter password'
//                       />
//                   </div>
//                   <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block cursor-pointer'>
//                       {"Don't"} have a account ?
//                   </a>
  
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2 hover:bg-blue-600 outline-none border-none '>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login