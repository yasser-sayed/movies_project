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
  Input,
  Card,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSun, FaMoon, FaLaptop } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux_system/slices/configSlice";
import {
  getMovieSrch,
  getTvSrch,
} from "../../redux_system/slices/search_Slices/srchSlice";

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
  const [search, setSearch] = useState("");
  const [srchType, setSrchType] = useState(true);
  const [openSrch, setOpenSrch] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(<FaSun />);

  const { theme } = useSelector((state) => state.config);
  const { srchResult } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  //theme config
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
    <Navbar className="sticky top-0 z-40 mx-auto max-w-screen-xl rounded-none lg:rounded-lg border-0 px-4 py-2 bg-transparent bg-[#a0adf5] dark:bg-[#212529] dark:text-gray-300">
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

        {/* search */}
        <div className="hidden items-center gap-x-2 lg:flex ms-auto">
          <div className=" flex relative w-full gap-2 md:w-max">
            <Input
              type="search"
              color={theme ? "black" : "white"}
              label={`search in ${srchType ? "movies" : "series"}`}
              containerProps={{ className: "min-w-[288px]" }}
              onChange={(inp) => setSearch(inp.target.value)}
              value={search}
              className=" bg-white dark:bg-[#212529] "
              onFocus={() => setOpenSrch(true)}
              onBlur={() => setOpenSrch(false)}
              onKeyUp={
                srchType
                  ? dispatch(getMovieSrch(search))
                  : dispatch(getTvSrch(search))
              }
            />

            <Card
              className={`w-96 absolute top-11 ${
                !search.length || !openSrch ? "hidden" : ""
              }`}
            >
              <List className="bg-[#9daaf7] text-black dark:bg-[#212529] dark:text-gray-400 border-0 max-h-[300px] overflow-scroll">
                {srchResult.map((res, i) => (
                  <ListItem
                    key={i}
                    className="hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50"
                  >
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src={
                          res?.poster_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${res?.poster_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                        }
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6">
                        {srchType ? res?.title : res?.name}
                      </Typography>
                      {/* <Typography variant="small" className="font-normal">
                        Software Engineer @ Material Tailwind
                      </Typography> */}
                    </div>
                  </ListItem>
                ))}
              </List>
            </Card>
          </div>
          <Button
            variant="outlined"
            color={theme ? "black" : "white"}
            size="sm"
            className="rounded-lg "
            disabled={!search.length}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="teal"
            size="sm"
            className="rounded-lg "
            hidden={!srchType}
            onClick={() => setSrchType(false)}
          >
            movies Search
          </Button>
          <Button
            variant="outlined"
            color="red"
            size="sm"
            className="rounded-lg "
            hidden={srchType}
            onClick={() => setSrchType(true)}
          >
            series Search
          </Button>
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

        {/* theme menu */}
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
          <MenuList className="bg-[#9daaf7] text-black dark:bg-[#212529] dark:text-gray-400 border-0">
            <MenuItem
              className="flex gap-2 hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50"
              onClick={() => toggleTheme("light")}
            >
              <FaSun /> Light
            </MenuItem>
            <MenuItem
              className="flex gap-2 hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50"
              onClick={() => toggleTheme("dark")}
            >
              <FaMoon /> Dark
            </MenuItem>
            <MenuItem
              className="flex gap-2 hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50"
              onClick={removeTheme}
            >
              <FaLaptop /> System
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* search */}
        <div className="lg:hidden items-center gap-2 flex ms-auto w-full flex-wrap justify-around my-2 ">
          <div className=" flex relative w-full gap-2 md:w-max">
            <Input
              type="search"
              color={theme ? "black" : "white"}
              label={`search in ${srchType ? "movies" : "series"}`}
              containerProps={{ className: "min-w-[288px]" }}
              onChange={(inp) => setSearch(inp.target.value)}
              value={search}
              className=" bg-white dark:bg-[#212529] "
              onFocus={() => setOpenSrch(true)}
              onBlur={() => setOpenSrch(false)}
            />
          </div>
          <Button
            variant="outlined"
            color={theme ? "black" : "white"}
            size="sm"
            className="rounded-lg "
            disabled={!search.length}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="teal"
            size="sm"
            className="rounded-lg "
            hidden={!srchType}
            onClick={() => setSrchType(false)}
          >
            movies Search
          </Button>
          <Button
            variant="outlined"
            color="red"
            size="sm"
            className="rounded-lg "
            hidden={srchType}
            onClick={() => setSrchType(true)}
          >
            series Search
          </Button>

          <Card
            className={`w-80 absolute top-[21rem] z-50 ${
              !search.length || !openSrch ? "hidden" : ""
            }`}
          >
            <List className="bg-[#9daaf7] text-black dark:bg-[#212529] dark:text-gray-400 border-0 max-h-[300px] overflow-scroll">
              <ListItem className="hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50">
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  <Typography variant="small" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
              </ListItem>
              <ListItem className="hover:!bg-[#7589fa] hover:text-black dark:hover:!bg-gray-700 dark:hover:text-gray-50">
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  <Typography variant="small" className="font-normal">
                    Software Engineer @ Material Tailwind
                  </Typography>
                </div>
              </ListItem>
            </List>
          </Card>
        </div>
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
