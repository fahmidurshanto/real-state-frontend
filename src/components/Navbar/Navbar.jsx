import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "animate.css";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./colors.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for scroll detection
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // Get current route location
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar on home page
      if (isHomePage) {
        setScrolled(currentScrollY > 10);
        setLastScrollY(currentScrollY);
        setVisible(true);
        return;
      }

      // For other pages, implement hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

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
    { id: 1, name: "Commercial Properties For Sell", link: "buy" },
    { id: 2, name: "Commercial Properties For Rent", link: "rent" },
  ];

  return (
    <nav
      className={`w-full border-b border-b-[#e6e6e6] z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-white shadow-md py-0 fixed"
            : "bg-white shadow-md py-0 fixed]"
          : "bg-white shadow-md py-0 fixed"
      } ${!isHomePage && !visible ? "-translate-y-full" : "translate-y-0"}`}
      style={{
        transition: isHomePage
          ? "all 0.3s ease"
          : "transform 0.3s ease, background 0.3s ease",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="animate__animated animate__fadeIn">
            <div className="flex justify-center items-center">
              <img className="w-24" src={logo} alt="LOGO" />
              <div>
                <h3 className={`text-2xl font-bold tracking-tight text-[#000000]`}>
                  MATELUXY
                </h3>
                <p className={`text-lg uppercase tracking-widest text-black`}>
                  REAL ESTATE
                </p>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-8 relative z-50 ">
            <div className="hidden lg:flex space-x-6 items-center">
              <Link
                to="/buy"
                className={`hover:border-[#256fff] hover:border-b-2 font-[400] hover:pb-1.5 text-[#000000]`}
              >
                Buy
              </Link>

              <Link
                to="/rent"
                className={`hover:border-[#256fff] hover:border-b-2 hover:pb-1.5 font-[400] text-[#000000]`}
              >
                Rent
              </Link>

              {/* Fixed Off Plan Dropdown */}
              <div className="relative group ">
                <div className="relative">
                  <button
                    className={`flex items-center cursor-pointer hover:border-[#256fff] hover:border-b-2 font-[400] hover:pb-1.5 text-[#000000] `}
                  >
                    Off Plan{" "}
                    <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Hover bridge */}
                  <div className="absolute left-0 right-0 h-4 bg-transparent" />
                </div>

                <div className="absolute left-0 top-full pt-2 w-[200px]">
                  <div className="bg-white border border-[#e6e6e6] rounded-[20px] shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-[1000]">
                    {offPlanMenuList.map((item) => (
                      <div
                        className="px-4 hover:bg-gray-50 "
                        key={item.id}
                      >
                        <Link
                          to={`/${item.link}`}
                          className="block text-[#083819] hover:text-[#083819] text-sm capitalize py-3 border-b border-gray-100"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fixed Commercial Dropdown */}
              <div className="relative group ">
                <div className="relative">
                  <button
                    className={`flex items-center cursor-pointer hover:border-[#256fff] hover:border-b-2 font-[400] hover:pb-1.5 text-[#000000] `}
                  >
                    Commercial{" "}
                    <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Hover bridge */}
                  <div className="absolute left-0 right-0 h-4 bg-transparent" />
                </div>

                <div className="absolute left-0 top-full pt-2 w-[200px]">
                  <div className="bg-white border border-[#e6e6e6] rounded-[20px] shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000]">
                    {commercialMenuList.map((item) => (
                      <div
                        className="px-4 hover:bg-gray-50 transition-colors z-50"
                        key={item.id}
                      >
                        <Link
                          to={`/${item.link}`}
                          className="block text-[#083819] hover:text-[#083819] text-sm capitalize py-3 border-b border-gray-100"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`hover:border-[#256fff] hover:border-b-2 hover:pb-1.5 text-[#000000] font-[400]`}
              >
                Contact
              </Link>
              <Link
                to="/our-team"
                className={`hover:border-[#256fff] hover:border-b-2 hover:pb-1.5 text-[#000000] font-[400]`}
              >
                Our Team
              </Link>
            </div>
          </div>

          <div
            className={`flex items-center space-x-4 animate__animated animate__fadeIn animate__delay-0.8s rounded-full bg-[#CEFFD5] text-green-400 font-medium relative z-10`}
          >
            <Link
              to="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1.5 px-5 py-3"
            >
              <FaWhatsapp className="text-xl text-[#00BD1C]" />{" "}
              <span className="text-[#00BD1C]">Whatsapp</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="animate__animated animate__fadeIn">
            <div className="flex justify-center items-center">
              <img className="w-20" src={logo} alt="LOGO" />
              <div>
                <h3 className={`text-xl font-bold tracking-tight text-black`}>
                  MATELUXY
                </h3>
                <p className={`text-sm uppercase tracking-widest text-black`}>
                  REAL ESTATE
                </p>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="https://wa.me/+8801640301028"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-green-500 hover:text-green-600`}
            >
              <FaWhatsapp className="text-xl" />
            </Link>

            <button
              onClick={toggleMenu}
              className={`text-black focus:outline-none animate__animated animate__fadeIn animate__delay-1s`}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 animate__animated animate__fadeInRight animate__faster z-[1000] relative">
            <div className="flex flex-col px-4">
              <Link
                to="/buy"
                className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
              >
                Buy
              </Link>

              <Link
                to="/rent"
                className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
              >
                Rent
              </Link>

              <details className="cursor-pointer border-x-0 border-y border-gray-100 py-5">
                <summary className="flex items-center justify-between font-light text-[#083819] capitalize">
                  Off Plan <IoIosArrowDown />
                </summary>
                {offPlanMenuList.map((item) => (
                  <div
                    className="pl-4 py-3 mt-2 hover:bg-gray-50 transition-colors"
                    key={item.id}
                  >
                    <Link
                      to={`/${item.link}`}
                      className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </details>

              <details className="cursor-pointer border-x-0 border-y border-gray-100 py-5">
                <summary className="flex items-center justify-between font-light text-[#083819] capitalize">
                  Commercial <IoIosArrowDown />
                </summary>
                {commercialMenuList.map((item) => (
                  <div
                    className="pl-4 py-3 mt-2 transition-colors"
                    key={item.id}
                  >
                    <Link
                      to={`/${item.link}`}
                      className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </details>

              <Link
                to="/blog"
                className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-[#083819] hover:text-[#083819] font-light text-sm capitalize border-x-0 border-y border-gray-100 py-5"
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