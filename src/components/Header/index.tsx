import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.svg";
import { BlackBgRoutes } from "../../utils/data";
import NavButtons from "./NavButtons";

import menublack from "../../assets/images/menu-Black.svg";
import menuwhite from "../../assets/images/menu-white.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isWhiteText = ["/", "/products", "/industries"].includes(currentRoute);

  return (
    <>
      <header
        className={`px-4 md:px-12 w-full flex items-center justify-between z-30 fixed top-0 text-white p-3 transition-all duration-300 ${
          BlackBgRoutes.includes(currentRoute)
            ? currentRoute === "/culture"
              ? "bg-transparent"
              : "bg-black"
            : ""
        } ${isScrolled ? "backdrop-blur-md bg-opacity-70 bg-primary" : ""} ${
          isMenuOpen ? "bg-black" : ""
        }`}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <button type="button" onClick={() => navigate("/")}>
            <img src={logo1} alt="logo" className="w-12 md:w-15" />
          </button>
          <div className="hidden md:flex">
            <NavButtons isWhiteText={isWhiteText} />
          </div>
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="bg-primary text-white font-normal rounded-full py-2 px-4 text-sm md:text-base hidden md:block"
        >
          Contact Us
        </button>

        <button
          className={`md:hidden ${isWhiteText ? "text-white" : "text-black"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isWhiteText ? menuwhite : menublack} alt="menu icon" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-90 flex flex-col items-center gap-6 pt-20 text-white transition-opacity duration-300 ${
            isScrolled ? "sticky-menu-bg" : ""
          }`}
        >
          <NavButtons
            onClick={() => setIsMenuOpen(false)}
            isWhiteText={isWhiteText}
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
