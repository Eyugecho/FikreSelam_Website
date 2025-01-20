import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import uprightarrow from "../../assets/images/arrow-up-right-01.svg";
import uprightBlue from "../../assets/Buttons/arrow-up-blue.svg";
import logo1 from "../../assets/images/logo1.svg";


const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToHero = () => {
    const Hero = document.getElementById("Hero-section");
    if (Hero) {
      const targetPosition = Hero.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 2500; // Scroll duration in milliseconds (2.5 seconds)
      let startTime: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Smooth scroll effect using ease-in-out
        const easeInOut =
          progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOut);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <footer
      id="footer-section"
      className="pt-10 pb-2 px-3 md:px-8 overflow-hidden"
    >
      <div className="flex flex-wrap gap-4">
        {/* Company Info */}
        <div className="order-2 md:order-1 w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <div className="flex flex-row items-center justify-between">
            <img src={logo1} alt="Logo" />
            <button
              onClick={scrollToHero}
              className="flex flex-row items-center justify-center text-white bg-primary px-2 rounded-full cursor-pointer md:hidden sm:block"
            >
              Back to top
              <img
                src={uprightarrow}
                alt="Arrow Up"
                style={{ width: "30px", height: "40px", marginLeft: "5px" }}
              />
            </button>
          </div>

          <p className="mt-1 text-TextColor w-1/2 text-sm mb-5 text-start">
            EMA Import and Export Pvt. Ltd. Co., part of DROGA GROUP since 2019,
            operates across diverse sectors to boost foreign currency and
            support import substitution in Ethiopia.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ema-import-export"
              target="_blank"
              className="text-[#676767]"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://t.me/emaimportexport"
              target="_blank"
              className="text-[#676767]"
              rel="noopener noreferrer"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100085732999332"
              target="_blank"
              className="text-[#676767]"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <section className="order-1 md:order-2 grid grid-cols-2 md:flex flex-row items-start md:gap-10 lg:gap-10 gap-2 text-TextColor lg:ml-8 mr-5 ml-5">
          <div className="w-1/2 sm:w-1/4 md:w-full flex flex-col gap-1">
            <h5 className="font-bold whitespace-nowrap text-black">
              Quick links
            </h5>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-full flex flex-col gap-1">
            <h5 className="font-bold text-black whitespace-nowrap">
              Popular Product
            </h5>
            <Link to="#">Coffee</Link>
            <Link to="#">Oil Seed</Link>
            <Link to="#">Honey</Link>
            <Link to="#">Spice & Herbs</Link>
            <Link to="#">Fruits & Vegs</Link>
          </div>

          <div className="w-1/2 sm:w-1/4 md:w-full flex flex-col gap-1 mt-5 md:mt-0 lg:mt-0">
            <h5 className="font-bold whitespace-nowrap text-black">
              Sister Companies
            </h5>
            <div className="flex flex-row items-center justify-between">
              <a href="#">Ema Coffee</a>
              <img src={uprightBlue} alt="Arrow Blue" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <p>Ema Honey</p>
              <img src={uprightBlue} alt="Arrow Blue" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <p>Ema Constructions</p>
              <img src={uprightBlue} alt="Arrow Blue" />
            </div>
          </div>

          <div className="lg:w-full w-full md:w-full flex flex-col gap-1 mt-5 md:mt-0 lg:mt-0">
            <h5 className="font-bold whitespace-nowrap text-black">Address</h5>
            <a href="mailto:export@emaethiopia.com">export@emaethiopia.com</a>
            <Link to="tel:+251-900-111100">+251-900-111100</Link>
            <a href="mailto:contact@rise.com">Contact@rise.com</a>
            <a href="mailto:help@rise.com">Help@rise.com</a>
          </div>
        </section>

        {/* Back to Top Button */}
        <div className="order-2 md:order-4 w-full hidden md:flex justify-center md:justify-end mt-4 md:mt-0">
          <button
            onClick={scrollToHero}
            className="flex flex-row items-center justify-center text-white bg-primary px-4 pt-1 pb-1 rounded-full cursor-pointer"
          >
            Back to top
            <img
              src={uprightarrow}
              alt="Arrow Up"
              style={{ width: "30px", height: "40px", marginLeft: "5px" }}
            />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="order-4 md:order-4 w-full">
          <hr className="border-[#FFFFFFBF] my-2" />
          <div className="flex flex-wrap justify-between text-TextColor">
            <p>© {currentYear} EMA Ethiopia, All rights reserved.</p>
            <div className="flex gap-2">
              <p>Privacy Policy</p>
              <Link to="/privacyPolicy">
                <span className="cursor-pointer">Terms of Use</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
