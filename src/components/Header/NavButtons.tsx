import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlackBgRoutes, ColorTheme, ROUTES } from "../../utils/data";

interface NavButtonsProps {
    onClick?: () => void;
    isWhiteText: boolean;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const buttonTheme = BlackBgRoutes.includes(currentRoute)
    ? ColorTheme.dark
    : ColorTheme.light;

  const buttonStylePrimary = `text-${
    currentRoute === "/" ||
    currentRoute === "/products" ||
    currentRoute === "/industries"
      ? "white"
      : `[${buttonTheme.primary}]`
  } `;
  const buttonStyleSecondary = `text-${buttonTheme.active} font-extrabold text-primary`;

  const indicatorStylePrimary = `opacity-0 w-2 h-2 rounded-full`;
  const indicatorStyleSecondary = BlackBgRoutes.includes(currentRoute)
    ? `bg-[#259925] w-2 h-2 rounded-full`
    : `bg-[#259925] w-2 h-2 rounded-full`;

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-7 font-medium text-TextColor">
      {ROUTES.map((route, index) => (
        <section
          key={`${index}--${route.link}`}
          className="flex items-center gap-1"
        >
          <div
            className={
              currentRoute === route.link
                ? indicatorStyleSecondary
                : indicatorStylePrimary
            }
          />
          <button
            className={
              currentRoute === route.link
                ? buttonStyleSecondary
                : buttonStylePrimary
            }
            onClick={() => {
              navigate(route.link);
              if (onClick) onClick(); // Closes menu on mobile
            }}
          >
            {route.name}
          </button>
        </section>
      ))}
    </nav>
  );
};

export default NavButtons;
