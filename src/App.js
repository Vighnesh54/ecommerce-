
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import CartDetails from './Components/CartDetails/CartDetails';
import LoginSignup from './Pages/LoginSignup';
import AddProduct from "./Pages/AddProduct";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<CartDetails/>}/>
         <Route path="/add-product" element={<AddProduct />} /> 
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
