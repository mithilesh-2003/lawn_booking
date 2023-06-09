import axios from 'axios';
import React, { useEffect, useState }  from 'react'

function Home() {
  const [corouselPhotos,setCorouselPhotos] = useState([]);
  const handelSearch = async()=>{

    try {
      const {data} =await axios.get(
        'https://api.pexels.com/v1/search?query=wedding' ,
        {
          headers:{
            Authorization:'JQ1UYhazr7VpDbCEo0kfzm6I7TwULg97HtJe1LCmBNvbBocJWfuVIFPS'
          },
        },
      );
      setCorouselPhotos(data.photos[0]);
      let i=0
      setInterval(()=>{
        if(i>data.photos.length){
          i=1;
        }
        
        setCorouselPhotos(data.photos[i]);
        i++
        console.log(i)
      },3000)
    } catch (error) {
      console.log(error)

    }
  }; 
  useEffect(()=>{
    handelSearch()
  },[])
  return (
    <>
    <div className='bg-gradient-to-t from-sky-400 to-cyan-300'>
      <div className="flex justify-center items-center mt-24 bg-white shadow-lg bg-gradient-to-t from-sky-400 to-cyan-300">
            <img
              src={corouselPhotos?.src?.landscape}
              alt={corouselPhotos?.alt}
              className="shadow-2xl shadow-black rounded-xl object-cover"
            />
        </div>
        <div className=" flex gap-7 justify-between ml-20 mr-20 mt-40 pb-10  grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gradient-to-t from-sky-400 to-cyan-300">
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75 ">
              <img src="https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dhg" />
            </div>
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75">
              <img src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dhg" />
            </div>
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75">
              <img src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dhg" />
            </div>
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75">
              <img src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dhg" />
            </div>
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75">
              <img src="https://images.pexels.com/photos/1023233/pexels-photo-1023233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dhg" />
            </div>
            <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-75">
              <img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dhg" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
