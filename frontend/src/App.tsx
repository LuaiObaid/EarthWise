import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Navbar />
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
