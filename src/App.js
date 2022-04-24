import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './pages/About/About';
import Addservice from './pages/Addservice/Addservice';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login';
import Manage from './pages/manageServices/Manage';
import Notfound from './pages/Notfound/Notfound';
import Orders from './pages/Orders/Orders';
import Register from './pages/Register/Register';
import Fotter from './pages/shared/Fotter/Fotter';
import Header from './pages/shared/Header/Header';
import RequireAuth from './pages/shared/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <Addservice></Addservice>
          </RequireAuth>
        }></Route>
        <Route path='/mannageservice' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
