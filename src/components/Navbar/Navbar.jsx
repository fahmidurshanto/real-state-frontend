import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import "animate.css";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import './colors.css'
import logo from "../../assets/logo.png";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for scroll detection
  const [scrolled, setScrolled] = useState(false);

  // Get current route location
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setScrolled(window.scrollY > 10);
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Data for Off Plan dropdown menu items
  const offPlanMenuList = [
    { id: 1, name: "About", link: "about" },
    { id: 2, name: "Off Plan Properties", link: "off-plan-properties" },
    { id: 3, name: "Developers", link: "developers" },
  ];

  // Data for Commercial dropdown menu items
  const commercialMenuList = [
    { id: 1, name: "Commercial Properties For Sell", link: "for-sell" },
    { id: 2, name: "Commercial Properties For Rent", link: "for-rent" },
  ];

  return (
    // Main navigation container with dynamic classes based on scroll state and route
    <nav
      className={`fixed w-full py-5 z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-pink-red shadow-md py-2"
            : "bg-transparent py-4"
          : "bg-pink-red shadow-md py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navbar - hidden on mobile */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo section */}
          <Link to="/" className="animate__animated animate__fadeIn">
          <div class="flex justify-center items-center">
              <img className="w-24" src={logo} alt="LOGO" />
              <div>
                <h3 class="text-2xl font-bold tracking-tight text-white">
                  MATELUXY
                </h3>
                <p class="text-lg uppercase tracking-widest text-white">
                  REAL ESTATE
                </p>
              </div>
            </div>
          </Link>

          {/* Navigation links section */}
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-6 items-center">
              {/* Buy link */}
              <Link
                to="/buy"
                className={`${
                  isHomePage && !scrolled ? "text-white" : "text-gray-200"
                } hover:border-[#00BFFF] hover:border-b hover:pb-1.5 text-sm `}
              >
                Buy
              </Link>

              {/* Rent link */}
              <Link
                to="/rent"
                className={`${
                  isHomePage && !scrolled ? "text-white" : "text-gray-200"
                } hover:border-[#00BFFF] hover:border-b hover:pb-1.5 text-sm `}
              >
                Rent
              </Link>

              {/* Off Plan dropdown section */}
              <div className="relative group uppercase">
  <button
    className={`flex items-center cursor-pointer ${
      isHomePage && !scrolled ? "text-white" : "text-gray-200"
    } hover:border-[#00BFFF] hover:border-b hover:pb-1.5 text-sm`}   
  >
    Off Plan{" "}
    <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
  </button>

  {/* Off Plan dropdown content - shown on hover */}
  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cursor-pointer">
    {offPlanMenuList.map((item) => (
      <div
        className="animate__animated animate__fadeInDown px-4 hover:bg-gray-50 transition-colors"
        key={item.id}
        style={{ animationDuration: "0.3s" }}
      >
        <Link
          to={`/${item.link}`}
          className="block text-[#083819] hover:text-[#083819] text-sm uppercase py-3 border-b border-gray-100"
        >
          {item.name}
        </Link>
      </div>
    ))}
  </div>
</div>

              {/* Commercial dropdown section */}
<div className="relative group uppercase cursor-pointer">
  <button
    className={`flex items-center cursor-pointer ${
      isHomePage && !scrolled ? "text-white" : "text-gray-200"
    } hover:border-[#00BFFF] hover:border-b hover:pb-1.5 text-sm`}
  >
    Commercial{" "}
    <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180 " />
  </button>

  {/* Commercial dropdown content - shown on hover */}
  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 cursor-pointer">
    {commercialMenuList.map((item) => (
      <div
        className="animate__animated animate__fadeInDown px-4 hover:bg-gray-50 transition-colors"
        key={item.id}
        style={{ animationDuration: "0.3s" }}
      >
        <Link
          to={`/${item.link}`}
          className="block text-[#083819] hover:text-[#083819] text-sm uppercase py-3 border-b border-gray-100"
        >
          {item.name}
        </Link>
      </div>
    ))}
  </div>
</div>
             

              {/* Contact link */}
              <Link
                to="/contact"
                className={`${
                  isHomePage && !scrolled ? "text-white" : "text-gray-200"
                } hover:border-[#00BFFF] hover:border-b hover:pb-1.5 text-sm`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* WhatsApp contact section */}
          <div
            className={`flex items-center space-x-4 animate__animated animate__fadeIn animate__delay-0.8s rounded-full  border-2 ${
              isHomePage && !scrolled ? "border-blue-400" : "border-white"
            } hover:bg-white`}
          >
            <Link
              to="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-center items-center gap-1.5 ${
                isHomePage && !scrolled
                  ? "text-white hover:text-[#083819]"
                  : "text-white hover:text-black"
              } px-5 py-3`}
            >
              <FaWhatsapp className="text-xl text-green-400" />{" "}
              <span className="">Whatsapp</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar - shown only on mobile devices */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile logo */}
          <Link to="/" className="animate__animated animate__fadeIn">
          <div class="flex justify-center items-center">
              <img className="w-20" src={logo} alt="LOGO" />
              <div>
                <h3 class="text-xl font-bold tracking-tight text-white">
                  MATELUXY
                </h3>
                <p class="text-sm uppercase tracking-widest text-white">
                  REAL ESTATE
                </p>
              </div>
            </div>
          </Link>

          {/* Mobile menu icons */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp icon */}
            <Link
              to="https://wa.me/+8801640301028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <FaWhatsapp className="text-xl" />
            </Link>

            {/* Mobile menu toggle button */}
            <button
              onClick={toggleMenu}
              className={`${
                isHomePage && !scrolled ? "text-white cursor-pointer" : "text-gray-200 cursor-pointer"
              } focus:outline-none animate__animated animate__fadeIn animate__delay-1s`}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu content - shown when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 animate__animated animate__fadeInRight animate__faster">
            <div className="flex flex-col px-4">
              {/* Buy link */}
              <Link
                to="/buy"
                className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
              >
                Buy
              </Link>

              {/* Rent link */}
              <Link
                to="/rent"
                className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
              >
                Rent
              </Link>

              {/* Off Plan dropdown for mobile */}
              <details className="cursor-pointer border-x-0 border-y border-gray-100 py-5">
                <summary className="flex items-center justify-between font-light text-[#083819] uppercase">
                  Off Plan <IoIosArrowDown />
                </summary>
                {offPlanMenuList.map((item) => (
                  <div
                    className="animate__animated animate__fadeInDown pl-4 py-3 mt-2 hover:bg-gray-50 transition-colors"
                    key={item.id}
                    style={{ animationDuration: "0.5s" }}
                  >
                    <Link
                      to={`/${item.link}`}
                      className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </details>

              {/* Commercial dropdown for mobile */}
              <details className="cursor-pointer border-x-0 border-y border-gray-100 py-5">
                <summary className="flex items-center justify-between font-light text-[#083819] uppercase">
                  Commercial <IoIosArrowDown />
                </summary>
                {commercialMenuList.map((item) => (
                  <div
                    className="animate__animated animate__fadeInDown pl-4 py-3 mt-2 transition-colors"
                    key={item.id}
                    style={{ animationDuration: "0.5s" }}
                  >
                    <Link
                      to={`/${item.link}`}
                      className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </details>

              {/* Blog link */}
              <Link
                to="/blog"
                className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
              >
                Blog
              </Link>

              {/* Contact link */}
              <Link
                to="/contact"
                className="text-[#083819] hover:text-[#083819] font-light text-sm uppercase border-x-0 border-y border-gray-100 py-5"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
