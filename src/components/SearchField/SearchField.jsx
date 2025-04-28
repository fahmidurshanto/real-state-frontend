import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const PropertySearch = () => {
    const [activeTab, setActiveTab] = useState('rent');

  return (
    <div className="flex flex-col md:flex-row bg-white items-center gap-4">
      {/* Toggle Buttons */}
      <div className="flex p-1 gap-2">
      <button 
        className={`flex-1 py-2 px-4  transition-colors ${activeTab === 'rent' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('rent')}
      >
        Rent
      </button>
      <button 
        className={`flex-1 py-2 px-4  transition-colors ${activeTab === 'buy' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
        onClick={() => setActiveTab('buy')}
      >
        Buy
      </button>
    </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-full">
        {/* Location Field */}
        <div className="relative">
          <label className="block text-sm font-bold text-gray-500 mb-1">
            Locations
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Choose your city"
              className="w-full py-3 px-4 border-0 border-b border-transparent focus:outline-none focus:border-b-2 focus:border-blue-500 pr-10 bg-transparent"
            />
            <FaLocationCrosshairs className="absolute  right-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
        </div>

        {/* Property Type Field */}
        <div className="relative">
          <label className="block text-sm text-gray-500 font-bold mb-1">
            Property type
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Residential"
              className="w-full py-3 px-4 border-0 border-b text-gray-500 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-500 pr-10 bg-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 font-bold">
              <RiArrowDropDownLine className="text-blue-400 text-4xl mr-5" />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="px-6 bg-blue-600 mb-3 hover:bg-blue-700 text-white py-4 ml-5  rounded-md flex items-center justify-center transition-colors">
            <FaSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
