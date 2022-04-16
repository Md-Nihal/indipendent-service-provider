import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
