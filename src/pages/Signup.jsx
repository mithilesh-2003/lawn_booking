import { useState } from 'react';
import axios from 'axios';



function Signup() {
    const [details, setDetails] = useState({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/users/signup',
        details,
        {
          headers: {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="relative">
      <div>
      </div>
      <div className='absolute inset-0 flex justify-center items-center min-h-screen bg-gradient-to-r from-red-400 via-red-600 to-gray-800 '>
      <div className='-mt-28 bg-gray-800/50 py-3 w-96 bg-gray-800/50 py-2 px-16 w-96 bg-gradient-to-t from-sky-400 to-cyan-300 bg-gradient-to-r from-red-600 via-red-600 to-red-600'>
        <form>
          <p className='text-center text-xl'>User Signup</p>
        <div className="flex justify-center mt-7 gap-3 ">
            <input
              placeholder="Please Enter Your Name"
              required
              type="text"
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-4 gap-3 ">
            <input
              placeholder="Please Enter your email"
              required
              type="email"
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-4 gap-3 ">
            <input
              placeholder="Please Enter your number"
              required
              type="number"
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-4 gap-3 ">
            <input
              placeholder="Please Enter your alternet number"
              required
              type="number"
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  alt_phone: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-4 gap-3 ">
            <input
              placeholder="Please Enter your address"
              required
              type="address"
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  address: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-4 gap-3 ">
            <input
              placeholder="Please Enter your password"
              required
              type="password"
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10 rounded-lg ml-5 mr-5"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            ></input>
        </div>
        <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={onSubmit}
              className="font-serif rounded-3xl border-2 border-black  bg-black w-28 font-extrabold hover:bg-yellow-700 text-white text-2xl
             rounded-lg text-center"
            >
              submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Signup



















































// import React, {useState,setState} from 'react';
// function Signup() {
    
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setLastName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const [confirmPassword,setConfirmPassword] = useState(null);

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit  = () => {
//         console.log(firstName,lastName,email,password,confirmPassword);
//     }

//     return(
//         <div className="form">
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
//             </div>
//         </div>
       
//     )       
// }

// export default Signup