import {useToast} from "@chakra-ui/react";
import  {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {login} = useSelector((state) => state.Authentication);
  const toast = useToast();

  const navigate = useNavigate();

    if (!login) {
      toast({
        title: "Login first",
        position: "top-right",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(()=>{
        navigate("/login");
      },3000)
    }else{
      return children
    }



};

export default PrivateRoute;
