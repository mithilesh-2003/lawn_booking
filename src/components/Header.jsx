import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../utils/manageCookies';
import { CgMathDivide, CgProfile } from 'react-icons/cg';
function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = getCookie('token');
    if (token?.length > 0) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="h-20 flex justify-between items-center px-10 bg-gradient-to-r from-violet-400 to-pink-400 shadow-2xl shadow-black">
          <div
            to="/"
            className="text-Black text-2xl animate-bounce font-semibold font-serif"
          >
            Marriage Lawn
          </div>
          <div>
            <div className="text-black items-center hidden md:flex md:items-center gap-10  ">
              <Link
                to="/"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Home
              </Link>

              <Link
                to="/booking"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Booking
              </Link>
              <Link
                to="/admin"
                className="hover:text-blue-600 font-semibold font-serif"
              >
                Admin
              </Link>
              {!isLogin ? (
                <>
                  <Link
                    to="/login"
                    className="hover:text-blue-600 font-semibold font-serif"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="hover:text-blue-600 font-semibold font-serif"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <CgProfile size={30} />
              )}
              <Link
                to="/Contact"
                className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        {!isOpen && (
          <div className="md:hidden" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        )}
      </div>
      {isOpen && (
        <div>
          <div
            id="container"
            className="md:hidden fixed inset-0 z-30  h-screen bg-gray-500 bg-opacity-60 w-full"
            onClick={(element) => {
              if (element.target.id === 'container') setIsOpen(false);
            }}
          >
            <div className="flex justify-end w-52 h-full bg-gradient-to-r from-violet-200 to-pink-200 bg-opacity-50 ">
              <div className="w-full">
                <div className="h-20 pr-10 flex justify-end items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="flex justify-center pt-4 font-extralight">
                  <div className="flex flex-col gap-5 text-center">
                    <Link
                      to="/"
                      className="hover:text-blue-600 font-semibold font-serif"
                    >
                      Home
                    </Link>
                    {!isLogin ? (
                      <>
                        <Link
                          to="/login"
                          className="hover:text-blue-600 font-semibold font-serif"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="hover:text-blue-600 font-semibold font-serif"
                        >
                          Signup
                        </Link>
                      </>
                    ) : (
                      <Link
                        to="/my_account"
                        className="hover:text-blue-600 font-semibold font-serif"
                      >
                        My Account
                      </Link>
                    )}
                    <Link
                      to="/booking"
                      className="hover:text-blue-600 font-semibold font-serif"
                    >
                      Booking
                    </Link>
                    <Link
                      to="/admin"
                      className="hover:text-blue-600 font-semibold font-serif"
                    >
                      Admin
                    </Link>
                    <Link
                      to="Contact"
                      className="flex justify-center bg-pink-600 px-3 py-1.5 rounded-xl transition-all duration-700  hover:bg-red-800"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;










































// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';

// function Header({ gen }) {
//   const location = useLocation()

//   return (
//     <div>
//     <div className="bg-green-600 h-20 sticky top-0 z-20 rounded-lg">
//       <nav className="max-w-7xl container mx-auto px-3 flex justify-between items-center h-full">
//         <div className="flex gap-8">
//           <Link to="/" className={location.pathname === "/" ? "text-yellow-500" : "text-white"}>
//             Home
//           </Link>
//           <Link to="/Booking" className={location.pathname === "/Booking" ? "text-yellow-500" : "text-white"}>
//             Booking
//           </Link>
//           <Link to="/Login" className={location.pathname === "/Login" ? "text-yellow-500" : "text-white"}>Login
//           </Link>
//           <Link to="/Signup" className={location.pathname === "/Signup" ? "text-yellow-500" : "text-white"}>Signup
//           </Link>
//         </div>
//         <div className="flex gap-8">
//           <Link to="/MarrigeLawn" className={location.pathname === "/MarrigeLawn" ? "text-yellow-500" : "text-white"}>MarrigeLawn
//           </Link>
//           <Link to="/Contact" className={location.pathname === "/Contact" ? "text-yellow-500" : "text-white"}>Contact
//           </Link>
//           <Link to="/Admin" className={location.pathname === "/Admin" ? "text-yellow-500" : "text-white"}>Admin
//           </Link>
//         </div>
//       </nav>
//     </div>
//   </div>
//   );
// }

// export default Header;
