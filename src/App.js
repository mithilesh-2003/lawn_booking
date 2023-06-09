import  { Route, Routes }from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import Login from './components/user/Login';
import Contact from './components/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';
import LoginPages from './components/admin/LoginPages';
import AdminDashboard from './components/admin/AdminDashboard';
import Booking from './components/user/Booking';
import Signup from './components/user/Signup';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Signup' element= {<Signup/>}/>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Contact' element= {<Contact/>}/>

      <Route path="/Booking/" element={<Booking />} />
      <Route path="/admin" element={<LoginPages />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
      <Footer/>
  </>
  )
}

export default App
