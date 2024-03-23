import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
 
    email: '',
    password: '',
   
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
      const response = await axios.post('/api/auth/signin', formData);
      console.log('Response:', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
