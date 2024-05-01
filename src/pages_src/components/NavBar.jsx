import {
  Button,
  Collapse,
  IconButton,
  List,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSun, FaMoon, FaLaptop } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux_system/slices/configSlice";
import { config } from "./../../redux_system/slices/configSlice";

function NavList() {
  const { pathname: activePage } = useLocation();

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className={`${
          activePage == "/" ? "activePage" : "dark:text-gray-300"
        } flex items-center gap-2 py-2 pr-4 hover:text-blue-500 transition-colors font-medium  dark:hover:text-blue-700`}
      >
        Home
      </Typography>

      <Typography
        as={Link}
        to="/movies"
        variant="small"
        color="blue-gray"
        className={`${
          activePage == "/movies" ? "activePage" : "dark:text-gray-300"
        } flex items-center gap-2 py-2 pr-4 hover:text-blue-500 transition-colors font-medium  dark:hover:text-blue-700`}
      >
        Movies
      </Typography>

      <Typography
        as={Link}
        to="/series"
        variant="small"
        color="blue-gray"
        className={`${
          activePage == "/series" ? "activePage" : "dark:text-gray-300"
        } flex items-center gap-2 py-2 pr-4 hover:text-blue-500 transition-colors font-medium  dark:hover:text-blue-700`}
      >
        Series
      </Typography>

      <Typography
        as={Link}
        to="/contactus"
        variant="small"
        color="blue-gray"
        className={`${
          activePage == "/contactus" ? "activePage" : "dark:text-gray-300"
        } flex items-center gap-2 py-2 pr-4 hover:text-blue-500 transition-colors font-medium  dark:hover:text-blue-700`}
      >
        Contact Us
      </Typography>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(<FaSun />);
  const { theme } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const checkTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch(setTheme(false));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(setTheme(true));
    }

    localStorage.theme == "dark"
      ? setSelectedTheme(<FaMoon />)
      : localStorage.theme == "light"
      ? setSelectedTheme(<FaSun />)
      : setSelectedTheme(<FaLaptop />);
  };

  const toggleTheme = (theme) => {
    localStorage.theme = theme;
    checkTheme();
  };

  const removeTheme = () => {
    localStorage.removeItem("theme");
    checkTheme();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    checkTheme();
  }, []);

  return (
    <Navbar
      color="gray"
      className="sticky top-0 z-10 mx-auto max-w-screen-xl px-4 py-2 bg-[#DEEEF5] dark:bg-[#212529] dark:text-gray-300"
    >
      <div className="flex items-center justify-start text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 dark:text-gray-300"
        >
          Movies World
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex self-center ms-auto me-2">
          <Button color="blue" variant="outlined" size="sm">
            Login
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <Menu allowHover={true}>
          <MenuHandler>
            <IconButton
              color={theme ? "black" : "white"}
              variant="text"
              className="text-md"
            >
              {selectedTheme}
            </IconButton>
          </MenuHandler>
          <MenuList className="bg-gray-300 dark:bg-[#212529] dark:text-gray-400 border-0">
            <MenuItem
              className="flex gap-2 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              onClick={() => toggleTheme("light")}
            >
              <FaSun /> Light
            </MenuItem>
            <MenuItem
              className="flex gap-2 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              onClick={() => toggleTheme("dark")}
            >
              <FaMoon /> Dark
            </MenuItem>
            <MenuItem
              className="flex gap-2 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              onClick={removeTheme}
            >
              <FaLaptop /> System
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button color="blue" variant="outlined" size="sm" fullWidth>
            Login
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
export default NavBar;
