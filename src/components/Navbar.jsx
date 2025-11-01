import {
  FaSpotify,
  FaSearch,
  FaBars,
  FaDownload,
  FaFirefoxBrowser,
} from "react-icons/fa";

export default function Navbar() {
  return (
    // main nav bar component
    <nav className="bg-[#000000] h-8 md:h-8 lg:h-12 xl:h-14 2xl:h-16 w-full flex justify-between items-center py-2 gap-4 md:px-4 lg:px-8 xl:px-12 2xl:px-16 ">
      {/* left side */}
      <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-14">
        {/* logo icon  */}
        <div className="flex items-center cursor-pointer ">
          <FaSpotify className="text-white text-md md:text-xl lg:text-2xl xl:text-3xl" />
        </div>
        {/* title */}
        <div className="flex items-center gap-4">
          <h1 className="text-white text-md font-bold md:text-xl lg:text-2xl xl:text-3xl">
            Spotify
          </h1>
          {/* search icon */}
          <div className="flex items-center w-full">
            <div className=" rounded-full bg-gray-500 ">
              <FaSearch className="text-white text-xl md:text-3xl p-1  text-md md:hidden" />
            </div>
            <div className="hidden md:block  rounded-full  bg-[#1f1f1f] ">
              <div className="flex items-center justify-between">
                <div className="flex w-full ">
                  <FaSearch className="text-white p-2 bg-transparent  text-lg md:text-xl lg:text-2xl xl:text-4xl" />
                  <input
                    type="text"
                    className="text-white pr-20"
                    placeholder="What do you want to play?"
                  />
                </div>
                <div className="text-white px-4 border-l-2 ">
                  <FaFirefoxBrowser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex justify-between items-center gap-4 ">
        <div className="hidden md:flex text-white gap-2 border-r-2 px-2">
          <h1>Premium</h1>
          <h1>Support </h1>
          <h1>Download</h1>
        </div>
        <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-14">
          {/* install app button */}
          <div className="flex items-center">
            <a className=" text-white text-sm rounded-md flex items-center ">
              <FaDownload className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl  " />
              <h6 className="text-white text-sm md:text-md lg:text-lg xl:text-xl">
                Install App
              </h6>
            </a>
          </div>
          {/* login button */}
          <div className="flex items-center">
            <button className="text-white px-4  rounded-md md:text-md lg:text-lg xl:text-xl">
              Login
            </button>
          </div>
          {/* signup button */}
          <div className="flex items-center">
            <button className="bg-white text-black px-2 py-2 rounded-full md:text-md lg:text-lg xl:text-xl">
              Signup
            </button>
          </div>
          {/* menu icon */}
          <div className="flex items-center md:hidden">
            <FaBars className="text-white text-md md:text-xl lg:text-2xl xl:text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}
