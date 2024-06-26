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
import { routes } from "./utils/router";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <FavProvider>
            <NavBar/>
              <Routes>
                {routes.map((data, i) =>(
                  <Route 
                    key={i}
                    exact
                    path={`/${data.url}`}
                    element={<data.element/>}
                  />
                ))}
              </Routes>
            <Footer/>
          </FavProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}


