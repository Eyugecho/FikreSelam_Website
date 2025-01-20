import React, { useEffect } from "react";
import bgImg from "../../assets/images/Homehero.png";
import Downarrow from "../../assets/images/arrow-down.svg";
import { useNavigate } from "react-router-dom";

const HomeHero: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const scrollToFooter = (): void => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      const targetPosition =
        footer.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 2500; // Scroll duration in milliseconds (2.5 seconds)
      let startTime: number | null = null;

      const smoothScroll = (currentTime: number): void => {
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
    <article
      id="Hero-section"
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100dvh",
        width: "100dhw",
      }}
    >
      <section>
        <section className="flex flex-col md:items-start items-start justify-center inset-0 px-4 md:px-6 py-24 md:py-8 bg-cover bg-center">
          <div className="p-2 md:mt-36 lg:mt-60">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-start mb-5 md:mb-4 w-full md:w-2/3">
              Welcome To EMA Ethiopia <br /> We Supply the Organic Taste of
              Ethiopia
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl font-medium text-start mb-14 md:mb-10 w-full md:w-[50%]">
              Since 2019 G.C. EMA Import and Export Pvt.Ltd. has been focused on
              export business particularly on export of best quality Ethiopia
              coffee, oil seeds & pulses like sesame seeds, Niger seeds, haricot
              beans, chick pea, beans, Green mung bean and red kidney bean.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            type="button"
            className="bg-primary text-white rounded-full py-2 px-4 md:hidden mb-10" // Hide on md screens and larger
          >
            Contact Us
          </button>
        </section>
      </section>
      <button
        onClick={scrollToFooter}
        className="flex flex-row items-center text-white rounded-full py-2 px-4 cursor-pointer mb-4 absolute bottom-0 right-0"
      >
        Explore More <img src={Downarrow} className="text-lg w-8" alt="Down arrow" />
      </button>
    </article>
  );
};

export default HomeHero;
