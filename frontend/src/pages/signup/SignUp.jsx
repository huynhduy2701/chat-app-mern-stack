// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hook/useSignup'

const SignUp = () => {
    const [inputs,setInputs]= useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:'',
        email:'',
    })
    const handdleCheckboxChange = (gender) =>{
        setInputs({...inputs,gender})
    }
    const {loading,signup} = useSignup()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs);
        await signup(inputs);

    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0
        '>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>FullName</span>
                    </label>
                    <input type="text" placeholder='Enter FullName ' className='w-full input input-bordered' 
                    value={inputs.fullName}
                    onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username ' className='w-full input input-bordered'
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Email</span>
                    </label>
                    <input type="text" placeholder='Enter Email ' className='w-full input input-bordered' 
                    value={inputs.email}
                    onChange={(e)=>setInputs({...inputs,email:e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter FullName ' className='w-full input input-bordered'
                    value={inputs.password}
                    onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>ConfirmPassword</span>
                    </label>
                    <input type="password" placeholder='Enter ConfirmPassword ' className='w-full input input-bordered' 
                    value={inputs.confirmPassword}
                    onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                    />
                </div>

                {/* gender check box here */}
                <GenderCheckbox  onCheckboxChange ={handdleCheckboxChange} selectedGender={inputs.gender}/>
                <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block cursor-pointer text-white'>
                    Already have a account ?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 hover:bg-blue-600 outline-none border-none ' type='submit' disabled={loading}>
                      {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp

// START CODE 
// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
//           backdrop-blur-lg bg-opacity-0
//           '>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Sign Up <span className='text-blue-500'>ChatApp</span>
//               </h1>
//               <form >
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>FullName</span>
//                       </label>
//                       <input type="text" placeholder='Enter FullName ' className='w-full input input-bordered' />
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter Username ' className='w-full input input-bordered' />
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Email</span>
//                       </label>
//                       <input type="text" placeholder='Enter Email ' className='w-full input input-bordered' />
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="password" placeholder='Enter FullName ' className='w-full input input-bordered' />
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text'>ConfirmPassword</span>
//                       </label>
//                       <input type="password" placeholder='Enter ConfirmPassword ' className='w-full input input-bordered' />
//                   </div>
  
//                   {/* gender check box here */}
//                   <GenderCheckbox/>
//                   <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block cursor-pointer'>
//                       Already have a account ?
//                   </a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2 hover:bg-blue-600 outline-none border-none '>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default SignUp