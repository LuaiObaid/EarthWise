import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    //termsAccepted: false
  });

  const handleChange = (event:any) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/api/auth/signup', formData);
      console.log('Response:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="flex items-center justify-center gap-2">
       {/*<input
          type="checkbox"
          name="termsAccepted"
          id="1"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className=""
          required
        /> */} 
        <label>I accept the terms of use and privacy policy</label>
      </div>
      <button 
        type="submit" 
        className="px-40 py-4 rounded-2xl bg-amber-500"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
