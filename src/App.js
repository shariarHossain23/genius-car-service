import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login';
import Notfound from './pages/Notfound/Notfound';
import Fotter from './pages/shared/Fotter/Fotter';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
