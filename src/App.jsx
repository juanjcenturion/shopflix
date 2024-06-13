import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar'
import Home from './routes/Home'
import DetailsProduct from './routes/DetailsProduct'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details_product" element={<DetailsProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


