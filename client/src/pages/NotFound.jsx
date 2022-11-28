import { Box, Image } from "@chakra-ui/react";
import React from "react";
// import {useNavigate} from "react-router-dom";

const NotFound = () => {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/stays");
  //   console.log("Redirecting.....");
  // }, 3000);

  return (
    <Box>
      <Box>
        <Image
          objectFit={"cover"}
          m="auto"
          src="https://i.imgur.com/HbBkrn9.jpg"
        />
      </Box>
    </Box>
  );
};

export default NotFound;
