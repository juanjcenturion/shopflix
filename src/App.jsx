import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Home from './routes/Home'
import DetailsProduct from './routes/DetailsProduct'
import Footer from "./components/footer/Footer";
import Cart from "./routes/Cart";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details_product" element={<DetailsProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


