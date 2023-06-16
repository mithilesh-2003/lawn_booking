import  { Route, Routes }from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import Contact from './components/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import Booking from './components/user/Booking';
import SignUp from './components/user/SignUp';
import Login from './components/user/Login';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/SignUp' element= {<SignUp/>}/>
      <Route path='/Login' element={<Login/>} />
      <Route path='/Contact' element= {<Contact/>}/>

      <Route path="/booking" element={<Booking />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
      <Footer/>
  </>
  )
}

export default App
