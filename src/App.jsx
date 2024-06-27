import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";
import { CartProvider } from "./context/cartContext";
import { FavProvider } from "./context/favContext";
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


