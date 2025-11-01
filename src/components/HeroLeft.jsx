import { FaGlobe, FaPlus } from "react-icons/fa";

export default function HeroLeft() {
  return (
    <div className=" h-[90vh] max-w-2/5  md:min-w-1/3 px-4 py-4 md:py-10 bg-[#121212] flex flex-col gap-2 mx-2 rounded-md md:gap-10 ">
      <div className="flex items-center justify-between text-white  ">
        <h1 className="text-sm md:text-lg">Your Library</h1>
        <div>
          <FaPlus className="text-xl md:text-2xl" />
        </div>
      </div>
      <div className="bg-[#1f1f1f] px-4 rounded-2xl flex  flex-col gap-2 py-4">
        <h1 className="text-white text-sm md:text-lg">
          create your first playlist
        </h1>
        <h3 className="text-white text-[12px] md:text-lg">
          It's easy we will help you
        </h3>
        <div className="">
          <button className="text-black bg-white rounded-2xl px-2 text-sm md:text-lg">
            crate playlist
          </button>
        </div>
      </div>
      <div className="bg-[#1f1f1f] px-4 rounded-2xl flex  flex-col gap-2 py-4">
        <h1 className="text-white text-sm md:text-lg">
          let's find some products to follow
        </h1>
        <h3 className="text-white text-sm md:text-lg">
          we will keep your updataed on new episodes
        </h3>
        <div className=" hover:">
          <button className="text-black bg-white rounded-2xl px-2 text-sm md:text-lg ">
            browse podcasts
          </button>
        </div>
      </div>

      <div className="bg-[#121212] text-gray-400 px-4 md:py-4  flex flex-col  w-full ">
        {/* Links */}
        <div className="flex flex-col justify-center md:gap-6  md:justify-start  text-[10px] md:text-sm flex-wrap">
          <div className="flex gap-4 md:text-md">
            <a href="#" className="hover:underline">
              Legal
            </a>
            <a href="#" className="hover:underline">
              Safety <span className="hidden md:block">& Privacy Center</span>
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            
          </div>
          <div className="flex  md:text-md md:gap-4 ">
            <a href="#" className="hover:underline">
              About Ads
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
          <div className="text-sm md:text-md md:py-4">
          <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>

        {/* Language selector */}
        <div>
        <button className="flex items-center gap-2 py-2 text-white border border-gray-600 px-4 rounded-full text-sm hover:scale-105 hover:border-white transition-transform duration-200">
          <FaGlobe className="text-lg" />
          <span>English</span>
        </button>
        </div>
      </div>
    </div>
  );
}
