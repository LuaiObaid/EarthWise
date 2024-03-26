import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";



function App() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
