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
    <div>
      <h1 className="text-4xl font-bold text-center my-14 font-alegreya text-[#203824]">
        Earthwise
      </h1>
      <div className="bg-[#203824] px-16 py-8 rounded-xl">
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
          <button type="submit" 
            className="text-3xl font-alegreya text-[#203824] px-40 py-4 mt-10 rounded-xl bg-[#D9D9D9]"
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
