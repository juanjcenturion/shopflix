import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/navbar/NavBar'
import Home from './routes/Home'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


