import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home/Home';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login';
import Notfound from './pages/Notfound/Notfound';
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
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
