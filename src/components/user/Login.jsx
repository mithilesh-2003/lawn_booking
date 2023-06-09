import React, { useState } from 'react';
import axios from 'axios';
import { setCookie } from '../../utils/manageCookies';
import ClientApi from '../../api/ClientApi';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [details, setDetails] = useState({});

  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('apple');
      const res = await axios.post(
        'https://long-shorts-worm.cyclic.app/users/login',
        details,
      );
      console.log(res);
      setCookie('token', res.data.token);
      ClientApi.setAuthHeader();
      console.log("navigating.....")
      navigate('/booking')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gradient-to-t from-sky-400 to-cyan-300 flex justify-center items-center min-h-screen">
  
      <div className='flex justify-center items-center '>
        <div className='-mt-20 bg-gray-800/50 py-10 pb-7 px-20 w-96 h-96 bg-gradient-to-t from-sky-400 to-cyan-300  '>
        <form>
        <p className='text-center text-xl'>User Login</p>
        <input
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              placeholder="Enter Your Email"
              required
              type="email"
              className="font-serif rounded-3xl border-2 border-black text-center w-60 h-10 mt-4"
            ></input>
            <input
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              placeholder="Enter Your Password"
              required
              type="password"
              className="font-serif rounded-3xl border-2 border-black text-center w-60 h-10 mt-2"
            ></input>
            <button
              onClick={onSubmit}
              type="submit"
              className="w-36 h-10 rounded-3xl font-serif font-bold text-white hover:bg-yellow-700 bg-blue-900 mt-2 ml-10"
            >
              Submit
            </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
