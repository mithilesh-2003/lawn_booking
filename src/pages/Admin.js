import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [details, setDetails] = useState({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('apple');
      const res = await axios.post(
        'https://long-shorts-worm.cyclic.app/emploies/login',
        details,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
        <div className="relative display-flex justify-center ">
        <div className='absolute inset-0 flex justify-center items-center min-h-screen bg-gradient-to-t from-sky-400 to-cyan-300'>
          <div className='-mt-28 bg-gray-800/50 py-10 px-16 w-96 h-96 bg-gradient-to-t from-sky-400   to-cyan-300 bg-gradient-to-r from-red-600 via-red-700 to-red-900'>
            <p className=' text-center color-red-400'>Admin login</p>
            <form>
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
                Admin login
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Admin
