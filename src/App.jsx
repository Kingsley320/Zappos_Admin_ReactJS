import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import Users from './pages/Users';
import NewUser from './pages/NewUser';

function App() {

  return (
    <>
      <div>
        <BrowserRouter className="flex justify-between">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<NewProduct />} />
            <Route path="/users" element={<Users />} />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App