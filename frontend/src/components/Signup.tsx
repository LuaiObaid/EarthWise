import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", formData);
      console.log("Response:", response.data);
      console.log("working");
    } catch (error) {
      console.error("Error:", error);
      console.log("not working");
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-14 font-alegreya text-[#203824]">
        Earthwise
      </h1>
      <div className="bg-[#203824] px-16 py-8 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-5">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-52 p-2 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-52 p-2 rounded-md"
            />
          </div>
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
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="text-3xl font-alegreya text-[#203824] px-40 py-4 mt-10 rounded-xl bg-[#D9D9D9]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
