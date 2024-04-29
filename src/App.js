// import logo from './logo.svg';
import './App.css';
import AdminRouters from './customers/Routers/AdminRouters';
import CustomerRouters from './customers/Routers/CustomerRouters';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
        <Route path='/admin/*' element={<AdminRouters/>}/>
      </Routes>
    </div>
  );
}

export default App;
