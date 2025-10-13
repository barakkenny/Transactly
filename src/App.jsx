import { Routes, Route, Router } from 'react-router-dom'; 
import Home from './pages/Home';
import Auth from './pages/Auth';
import Orders from './pages/Orders';
import Header from './components/shared/Header';

function App() {

  return (
    <>
        <Routes>
          <Header />
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/orders" element={<Orders />}/>
        </Routes>
     
    </>
  )
}

export default App
