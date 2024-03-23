import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
