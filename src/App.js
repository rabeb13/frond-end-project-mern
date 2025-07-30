import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Error from './Pages/Error';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';
import AddProduct from './Pages/AddProduct/AddProduct';
import Products from './Pages/Products/Products';
import Edit from './Pages/Edit/Edit';



function App() {
const dispatch = useDispatch();
useEffect(() => {
  if (localStorage.getItem("token")) {
    dispatch(current());
  }
}, [dispatch]) ;


  return (
    <div className="App">
      <NavBar />
      <h1>Mern App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/products' element={<Products />} />
				<Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
