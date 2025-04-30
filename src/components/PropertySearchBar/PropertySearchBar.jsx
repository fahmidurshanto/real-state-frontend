import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "animate.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const PropertySearchBar = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "" 
  });



  const location  = useLocation();

  
  // Dynamic data
  const propertyTypes = ["Apartment", "Penthouse", "Villa", "Land", "Townhouse","Duplex"];
  const buyPriceRanges = [
    { 
      label: "Min Price", 
      values: [
        "AED 300000" ,
        "AED 400000" ,
        "AED 500000" ,
        "AED 600000" ,
        "AED 700000" ,
        "AED 800000" ,
        "AED 900000" ,
        "AED 1000000",
        "AED 1100000",
        "AED 1200000",
        "AED 1300000",
        "AED 1400000",
        "AED 1500000",
        "AED 1600000",
        "AED 1700000",
        "AED 1800000",
        "AED 1900000",
        "AED 2000000",
        "AED 2100000",
        "AED 2200000",
        "AED 2300000",
        "AED 2400000",
        "AED 2500000",
        "AED 2600000",
        "AED 2700000",
        "AED 2800000",
        "AED 2900000",
        "AED 3000000",
        "AED 3250000",
        "AED 3750000",
        "AED 4000000",
        "AED 4250000",
        "AED 5000000",
        "AED 6000000",
        "AED 7000000",
        "AED 8000000",
        "AED 9000000",
        "AED 10000000",
        "AED 12500000",
        "AED 15000000",
        "AED 17500000",
        "AED 20000000",
        "AED 22500000",
        "AED 25000000",
        "AED 27500000",
        "AED 30000000",
        "AED 35000000",
        "AED 40000000",
        "AED 45000000",
        "AED 50000000",
      ] 
    },
    { 
      label: "Max Price" ,
      values: [
        "AED 300000" ,
        "AED 400000" ,
        "AED 500000" ,
        "AED 600000" ,
        "AED 700000" ,
        "AED 800000" ,
        "AED 900000" ,
        "AED 1000000",
        "AED 1100000",
        "AED 1200000",
        "AED 1300000",
        "AED 1400000",
        "AED 1500000",
        "AED 1600000",
        "AED 1700000",
        "AED 1800000",
        "AED 1900000",
        "AED 2000000",
        "AED 2100000",
        "AED 2200000",
        "AED 2300000",
        "AED 2400000",
        "AED 2500000",
        "AED 2600000",
        "AED 2700000",
        "AED 2800000",
        "AED 2900000",
        "AED 3000000",
        "AED 3250000",
        "AED 3750000",
        "AED 4000000",
        "AED 4250000",
        "AED 5000000",
        "AED 6000000",
        "AED 7000000",
        "AED 8000000",
        "AED 9000000",
        "AED 10000000",
        "AED 12500000",
        "AED 15000000",
        "AED 17500000",
        "AED 20000000",
        "AED 22500000",
        "AED 25000000",
        "AED 27500000",
        "AED 30000000",
        "AED 35000000",
        "AED 40000000",
        "AED 45000000",
        "AED 50000000",
      ] 
    }
  ];
  
  const rentPriceRanges = [
    { 
      label: "Min Price", 
      values: [
        "AED 300000" ,
        "AED 400000" ,
        "AED 500000" ,
        "AED 600000" ,
        "AED 700000" ,
        "AED 800000" ,
        "AED 900000" ,
        "AED 1000000",
        "AED 1100000",
        "AED 1200000",
        "AED 1300000",
        "AED 1400000",
        "AED 1500000",
        "AED 1600000",
        "AED 1700000",
        "AED 1800000",
        "AED 1900000",
        "AED 2000000",
        "AED 2100000",
        "AED 2200000",
        "AED 2300000",
        "AED 2400000",
        "AED 2500000",
        "AED 2600000",
        "AED 2700000",
        "AED 2800000",
        "AED 2900000",
        "AED 3000000",
        "AED 3250000",
        "AED 3750000",
        "AED 4000000",
        "AED 4250000",
        "AED 5000000",
        "AED 6000000",
        "AED 7000000",
        "AED 8000000",
        "AED 9000000",
        "AED 10000000",
        "AED 12500000",
        "AED 15000000",
        "AED 17500000",
        "AED 20000000",
        "AED 22500000",
        "AED 25000000",
        "AED 27500000",
        "AED 30000000",
        "AED 35000000",
        "AED 40000000",
        "AED 45000000",
        "AED 50000000",
      ] 
    },
    { 
      label: "Max Price" ,
      values: [
        "AED 300000" ,
        "AED 400000" ,
        "AED 500000" ,
        "AED 600000" ,
        "AED 700000" ,
        "AED 800000" ,
        "AED 900000" ,
        "AED 1000000",
        "AED 1100000",
        "AED 1200000",
        "AED 1300000",
        "AED 1400000",
        "AED 1500000",
        "AED 1600000",
        "AED 1700000",
        "AED 1800000",
        "AED 1900000",
        "AED 2000000",
        "AED 2100000",
        "AED 2200000",
        "AED 2300000",
        "AED 2400000",
        "AED 2500000",
        "AED 2600000",
        "AED 2700000",
        "AED 2800000",
        "AED 2900000",
        "AED 3000000",
        "AED 3250000",
        "AED 3750000",
        "AED 4000000",
        "AED 4250000",
        "AED 5000000",
        "AED 6000000",
        "AED 7000000",
        "AED 8000000",
        "AED 9000000",
        "AED 10000000",
        "AED 12500000",
        "AED 15000000",
        "AED 17500000",
        "AED 20000000",
        "AED 22500000",
        "AED 25000000",
        "AED 27500000",
        "AED 30000000",
        "AED 35000000",
        "AED 40000000",
        "AED 45000000",
        "AED 50000000",
      ] 
    }
  ];
  const bedOptions = ["All","Studio", "1", "2", "3", "4", "5", "7+"];
  const bathOptions = ["All", "1", "2", "3", "4", "5", "7+"]; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log("Searching with parameters:", searchParams);
    // API call or filtering logic would go here
  };

  return (
    <div className="w-full mx-auto -z-50 p-4 mt-20 md:p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
  <Tabs 
    selectedIndex={activeTab} 
    onSelect={(index) => {
      setActiveTab(index);
      setSearchParams({
        location: "",
        propertyType: "",
        minPrice: "",
        maxPrice: "",
        beds: "",
        baths: ""
      });
    }}
    className="w-full"
  >
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center w-full">
      {/* Tabs Section */}
      <TabList className={`flex items-center gap-2  p-1 md:p-2 rounded-lg min-h-[50px] w-full md:w-auto ${location.pathname === "/off-plan-properties" && "hidden"}`}>
        <Tab
          className={`flex-grow md:flex-grow-0 px-3 md:px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 flex items-center justify-center ${
            activeTab === 0
              ? "bg-red-600 text-white shadow-md"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Link to="/buy" className="w-full text-center">Buy</Link>
        </Tab>
        
        <Tab
          className={`flex-grow md:flex-grow-0 px-3 md:px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 flex items-center justify-center ${
            activeTab === 1
              ? "bg-red-600 text-white shadow-md"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Link to='/rent' className="w-full text-center">Rent</Link>
        </Tab>
      </TabList>

      {/* Search Filters Section */}
      <div className="w-full overflow-x-auto pb-2">
        {/* Buy Tab Panel */}
        <TabPanel>
          <div className="animate__animated animate__fadeIn">
            <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4 w-full">
              {/* Location Input */}
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 text-sm font-medium w-full md:min-w-[180px]"
              />

              {/* Property Type Dropdown */}
              <div className="relative flex-1 w-full md:min-w-[180px]">
                <select
                  name="propertyType"
                  value={searchParams.propertyType}
                  onChange={handleInputChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center md:text-left appearance-none"
                >
                  <option value="">Property Type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Price Range Container */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-2 w-full">
                {/* Min Price */}
                <div className="relative flex-2 w-full">
                  <select
                    name="minPrice"
                    value={searchParams.minPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 p2-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Min Price</option>
                    {buyPriceRanges[0].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2  transform -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Max Price */}
                <div className="relative flex-2 w-full">
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Max Price</option>
                    {buyPriceRanges[1].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Bed/Bath Container */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-2 w-full">
                {/* Beds */}
                <div className="relative flex-2 w-full">
                  <select
                    name="beds"
                    value={searchParams.beds}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Beds</option>
                    {bedOptions.map((bed, index) => (
                      <option key={index} value={bed}>{bed}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Baths */}
                <div className="relative flex-2 w-full">
                  <select
                    name="baths"
                    value={searchParams.baths}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Baths</option>
                    {bathOptions.map((bath, index) => (
                      <option key={index} value={bath}>{bath}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Rent Tab Panel */}
        <TabPanel>
          <div className="animate__animated animate__fadeIn w-full">
            <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4 w-full">
              {/* Location Input */}
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none transition flex-1 text-sm font-medium w-full md:min-w-[180px]"
              />

              {/* Property Type Dropdown */}
              <div className="relative flex-1 w-full md:min-w-[180px]">
                <select
                  name="propertyType"
                  value={searchParams.propertyType}
                  onChange={handleInputChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center md:text-left appearance-none"
                >
                  <option value="">Property Type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Price Range Container */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-1 w-full">
                {/* Min Price */}
                <div className="relative flex-1 w-full">
                  <select
                    name="minPrice"
                    value={searchParams.minPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Min Price</option>
                    {rentPriceRanges[0].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Max Price */}
                <div className="relative flex-1 w-full">
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Max Price</option>
                    {rentPriceRanges[1].values.map((price, index) => (
                      <option key={index} value={price}>{price}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Bed/Bath Container */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 flex-1 w-full">
                {/* Beds */}
                <div className="relative flex-1 w-full">
                  <select
                    name="beds"
                    value={searchParams.beds}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Beds</option>
                    {bedOptions.map((bed, index) => (
                      <option key={index} value={bed}>{bed}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Baths */}
                <div className="relative flex-1 w-full">
                  <select
                    name="baths"
                    value={searchParams.baths}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition text-sm font-medium text-center appearance-none"
                  >
                    <option value="">Baths</option>
                    {bathOptions.map((bath, index) => (
                      <option key={index} value={bath}>{bath}</option>
                    ))}
                  </select>
                  <MdOutlineKeyboardArrowDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>

      {/* Search Button */}
      <button 
        onClick={handleSearch}
        className="bg-red-600 text-white p-2 md:p-3 w-full md:w-auto rounded-lg md:rounded-full hover:bg-red-700 transition min-w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 cursor-pointer self-center md:self-auto"
      >
        <span className="text-white pr-3 md:hidden">Search</span>
        <CiSearch className="text-xl md:text-2xl" />
      </button>
    </div>
  </Tabs>
</div>
  );
};

export default PropertySearchBar;