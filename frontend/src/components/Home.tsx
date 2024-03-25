import SearchBar from "./SearchBar";
 import Ai from './ai'
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="max-w-[60rem] text-center mb-20 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          et ultrices neque ornare, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Pharetra et
          ultrices neque ornare aenean euismod elementum nisi.
        </p>
        <div className="flex flex-wrap justify-center items-center max-w-[40rem] mb-5 gap-5">
          <div className=" w-[18rem] bg-[#d9d9d9] rounded-xl p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut?
            </p>
          </div>
          <div className=" w-[18rem] bg-[#d9d9d9] rounded-xl p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut?
            </p>
          </div>
          <div className=" w-[18rem] bg-[#d9d9d9] rounded-xl p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut?
            </p>
          </div>
          <div className=" w-[18rem] bg-[#d9d9d9] rounded-xl p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut?
            </p>
          </div>
        </div>
      </div>
      <SearchBar />
      <Ai/>
    </>
  );
};

export default Home;
