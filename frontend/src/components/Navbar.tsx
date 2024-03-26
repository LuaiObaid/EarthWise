import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#d9d9d9] text-[#203824] w-full flex justify-start items-center font-alegreya py-5 mb-5 px-5 md:px-10 gap-5">
      <Link to="/">
      <h1 className="text-2xl font-bold">Earthwise</h1>
      </Link>
      <h2 className="text-xl ml-auto">
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
