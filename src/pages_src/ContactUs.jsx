import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [userInfo, setUserInfo] = useState({
    from_name: "",
    message: "",
    user_email: "",
  });

  const [checkInfo, setCheckInfo] = useState("");
  const navigate = useNavigate();

  const sendMsg = () => {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    !userInfo.from_name.length
      ? setCheckInfo("please enter your name first")
      : !emailValid.test(userInfo.user_email)
      ? setCheckInfo("invalid email")
      : userInfo.message.length < 3
      ? setCheckInfo("please enter atleast one word in your message")
      : emailjs
          .send("service_gxk5z1b", "template_ymvhf88", userInfo, {
            publicKey: "dCvT675f8gKndvgyv",
          })
          .then(
            async () => {
              await setCheckInfo(
                "done, we will reaply to your message At the earliest"
              );

              setTimeout(() => {
                navigate("/");
              }, 2000);
            },
            (error) => {
              setCheckInfo("netWork Error , please try again later");
            }
          );
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center ">
      <Typography variant="h3" color="blue">
        Contact with the Website developer!
      </Typography>

      <Card className="w-full md:w-96 rounded-none md:rounded-xl bg-[#9daaf7] bg-opacity-50 dark:bg-[#212529] py-4">
        <CardBody className="flex flex-col gap-6 ">
          <Input
            color="blue"
            value={userInfo.from_name}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, from_name: inp.target.value })
            }
            label="your name"
            size="lg"
            className="dark:text-white bg-white dark:bg-transparent"
          />
          <Input
            color="blue"
            value={userInfo.user_email}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, user_email: inp.target.value })
            }
            label="email"
            size="lg"
            className="dark:text-white bg-white dark:bg-transparent"
          />
          <Textarea
            color="blue"
            value={userInfo.message}
            onChange={(inp) =>
              setUserInfo({ ...userInfo, message: inp.target.value })
            }
            label="enter your message Message"
            className="dark:text-white bg-white dark:bg-transparent"
          />

          <Alert
            color={checkInfo.startsWith("done") ? "green" : "red"}
            open={checkInfo ? true : false}
          >
            {checkInfo}
          </Alert>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={sendMsg} variant="outlined" color="blue">
            send message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUs;
