import { Typography } from "@material-tailwind/react";
import React from "react";

const MessageError = ({ err }) => {
  return (
    <div className="text-center bg-red-500 bg-opacity-30 p-8 rounded-lg my-6">
      <Typography variant="h3">
        we are sorry for that...,our server have some problems, please try again
        later or contact us
      </Typography>{" "}
      <Typography variant="h6">
        Error Message : <span className="text-red-500">{err}</span>{" "}
      </Typography>
    </div>
  );
};

export default MessageError;
