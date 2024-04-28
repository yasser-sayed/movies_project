import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 my-14 px-4 text-center">
      <section className="font-bold">
        <Typography variant="h6">
          &copy; 2024{" "}
          <span className="text-blue-600 text-xl">Yasser_Sayed</span> , All
          Rights Reserved{" "}
        </Typography>
      </section>
      <section className="font-bold flex gap-6">
        <Typography variant="h6" color="red">
          About Us
        </Typography>
        <Typography variant="h6" color="red">
          Terms of Use
        </Typography>
        <Typography variant="h6" color="red">
          Privacy
        </Typography>
      </section>
    </footer>
  );
};

export default Footer;
