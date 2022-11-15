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
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?w=1060&t=st=1668319209~exp=1668319809~hmac=da1d1f5d2ffb74ed06b1415e5150afd9986a72884cfc27dad688df3bd3a10298"
        />
      </Box>
    </Box>
  );
};

export default NotFound;
