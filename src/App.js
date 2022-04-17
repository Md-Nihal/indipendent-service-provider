import { Route, Routes } from 'react-router-dom';

import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Checkout from './pages/CheckOut/Checkout/Checkout';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
