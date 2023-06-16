import { useState } from 'react';
import axios from 'axios';



function SignUp() {
    const [details, setDetails] = useState({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        'https://long-shorts-worm.cyclic.app/users/signup',
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
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-sky-400 to-cyan-300'>
      <div className='-mt-28 bg-gray-800/50 py-3 w-96 bg-gray-800/50 py-2 px-16 w-96 bg-gradient-to-t from-sky-400 to-cyan-300 '>
        <form>
          <p className='text-center text-xl'>User Signup</p>
        <div className="flex justify-center mt-7 gap-3 ">
            <input
              placeholder="Please Enter Your Name"
              required
              type="text"
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="rounded-3xl border-2  text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="rounded-3xl border-2   text-center font-serif text-auto border-black w-60 h-10  ml-5 mr-5"
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
              className="font-serif rounded-3xl border-2 border-black  bg-black w-28 font-extrabold hover:bg-yellow-700 text-white text-2xl text-center"
            >
              submit
            </button>
          </div>
        </form>
      </div>
      </div>
  )
}

export default SignUp
