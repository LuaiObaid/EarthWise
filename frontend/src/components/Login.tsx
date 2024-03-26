import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signin", formData);
      console.log("Response:", response.data);
      // Handle successful response
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleSignout = async () => {
    try {
      const response = await axios.get("/api/auth/signout");
      console.log("Response:", response.data);
      // Handle successful response
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-xl md:text-2xl max-w-[40rem] text-center mb-10 font-alegreya text-[#203824]">
        Welcome to EarthWise! We're here to help you learn and do your part for
        the planet. Join us in making sustainable choices for a greener future.{" "}
      </h1>
      <div className="bg-[#203824] px-5 sm:px-16 py-4 sm:py-8 rounded-xl min-w-[20rem] max-w-[36rem]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="text-xl md:text-3xl font-alegreya text-[#203824] px-20 sm:px-30 md:px-40 py-4 mt-10 rounded-xl bg-[#D9D9D9]"
          >
            Log In
          </button>
        </form>
        {/* <button onClick={handleSignout}>Signout</button> */}
      </div>
    </div>
  );
}

export default Login;
