// import logo from './logo.svg';
import './App.css';
import CustomerRouters from './customers/Routers/CustomerRouters';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes>
    </div>
  );
}

export default App;
