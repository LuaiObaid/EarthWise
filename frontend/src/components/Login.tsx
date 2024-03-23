import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

function LogInForm() {
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

  return (
    <div className="bg-blue-200 p-16 max-w-[40rem] rounded-xl">
        <h1 className="text-3xl mb-5">Earthwise</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        <button type="submit" className="px-40 py-4 rounded-2xl bg-amber-200">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LogInForm;
