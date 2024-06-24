import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Home from './routes/Home'
import DetailsProduct from "./routes/DetailsProduct";
import Footer from "./components/footer/Footer";
import Cart from "./routes/Cart";
import Products from "./routes/Products";
import { CartProvider } from "./context/cartContext";
import { FavProvider } from "./context/favContext";
import Favorites from "./routes/Favorites";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <FavProvider>
            <NavBar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details_product" element={<DetailsProduct/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/details_product/:id" element={<DetailsProduct />} />
              </Routes>
            <Footer/>
          </FavProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}


