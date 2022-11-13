import {useToast} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const PrivateRoute = () => {
  const {login} = useSelector((state) => state.Authentication);
  const toast = useToast();

  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
      toast({
        title: "Login first",
        position: "top-right",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [login]);
};

export default PrivateRoute;
