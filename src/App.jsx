import { Outlet } from 'react-router-dom'; 
import Header from './components/shared/Header';

function App() {

  return (
    <div className=''>
      <Header />
      <Outlet />   
    </div>
  )
}

export default App
