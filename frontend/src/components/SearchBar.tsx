import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
 /* const [answer, setAnswer] = useState('');
const [inputData, setInputData] = useState({ question: '' });

const handleInput = (event) => {
  setInputData({ ...inputData, question: event.target.value }); // Spread existing properties of inputData and update the question property
};

const aiQuestion = async () => {
  try {
    const response = await axios.post("/api/find-com", { question: inputData.question }); // Pass only the question property to the backend
    console.log("Response:", response.data);
    setAnswer(response.data);
    // Handle successful response
  } catch (error) {
    console.log("Error:", error.message);
    // Handle error
  }
};
*/
const [answer, setAnswer] = useState('');

const handleButtonClick = async () => {
  try {
    const response = await axios.post('/api/find-com', { question: 'how to clean my laptop?' });
    console.log('Response:', response.data);
    setAnswer(response.data.data); // Assuming the response structure has a data property containing the answer
  } catch (error) {
    console.error('Error:', error.message);
  }
};
  

  return (
    <div className="flex justify-center items-center bg-[#89a48a]">
      <input
        type="text"
        placeholder="how can I improve the quality of the Air in my home"
        className="bg-[#203824] outline-none px-4 w-[15rem] sm:w-[35rem] md:w-[45rem] h-[3rem] rounded-l-xl text-white"
        id="question"
      
      />
      <button
        type="submit"
        className=" bg-[#D9D9D9] p-3 rounded-r-xl"
        onClick={ handleButtonClick}
      >
        submit
      </button>
      <div>
        {answer}
      </div>
    </div>
  );
};

export default SearchBar;
