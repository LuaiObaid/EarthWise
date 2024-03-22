const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-blue-500 max-w-[35rem] gap-5 rounded-xl shadow-3xl">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-white text-3xl">Sign Up</h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="First Name"
            className=" w-52 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-52 p-2 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Confirem Password"
          className="w-full p-2 rounded-md"
          required
        />
        <div className="flex items-center justify-center gap-2">
          <input type="checkbox" name="terms" id="1" className="" required/>
          <label>I accept the terms of USE and Praivce Plocy</label>
        </div>
        <button 
        type="submit" 
        className="px-40 py-4 rounded-2xl bg-amber-500"
        >
          Sign Up
        </button>
      </div>
      <h1>
        Already have an account?
        <a href="https://www.google.com" className="underline">
          Login here
        </a>
      </h1>
      <small>Copywrite © EarthWise.com</small>
    </div>
  );
};

export default Signup;
