import  { Route, Routes }from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Booking from './pages/Booking';
import MarrigeLawn from './components/MarrigeLawn';
import Contact from './components/Contact';
import Admin from './pages/Admin';
// import Footer from './pages/footer';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Booking/" element={<Booking />} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element= {<Signup/>}/>
      <Route path='/MarrigeLawn' element= {<MarrigeLawn/>}/>
      <Route path='/Admin' element= {<Admin/>}/>
      <Route path='/Contact' element= {<Contact/>}/>
    </Routes>
      {/* <Footer/> */}
  </>
  )
}

export default App
