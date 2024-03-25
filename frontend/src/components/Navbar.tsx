import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#d9d9d9] text-[#203824] w-full flex justify-end py-5 mb-5 px-10 gap-5 text-2xl">
      <Link to="/">
      <h1 className="mr-auto">Earthwise</h1>
      </Link>
      <h2 className="text-xl">
        <Link to="signup">
        <h2>Sign Up</h2>
        </Link>
      </h2>
      <h2 className="text-xl">
        <Link to="login">
      <h2>Login</h2>
      </Link>
      </h2>
    </div>
  );
};

export default Navbar;
