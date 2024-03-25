const SearchBar = () => {

  return (
    <div className="flex justify-center items-center bg-[#89a48a]">
      <input
        type="text"
        placeholder="how can I improve the quality of the Air in my home"
        className="bg-[#203824] outline-none px-4 w-[15rem] sm:w-[35rem] md:w-[45rem] h-[3rem] rounded-l-xl text-white"
      />
      <button
        type="submit"
        className=" bg-[#D9D9D9] p-3 rounded-r-xl"
      >
        submit
      </button>
    </div>
  );
};

export default SearchBar;
