import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

const Flag = () => {
  const [name, setNAme] = useState("");
  const [data, setData] = useState([]);

  const getCountries = async () => {
    await fetch("https://restcountries.com/v2/lang/en")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        // console.log(res);
      })

      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <Menu bg="teal">
        <MenuButton
          // border="4px solid"
          bg={"transparent"}
          w={["40%", "40%", "30%", "45%"]}
          fontWeight={"bolder"}
          _expanded={{bg: "transparent"}}
          // _focus={{bg:"black"}}
          fontSize={"14px"}
          _hover={{textDecorationLine: "none"}}
          textDecorationLine={"underline"}
          as={Button}
          //   isLoading={state.loading}
          loadingText="Countries"
          spinnerPlacement="end"
        >
          {!name ? (
            <Image m={"auto"} src="https://flagcdn.com/in.svg" />
          ) : (
            <Image m={"auto"} src={name} />
          )}
        </MenuButton>
        <MenuList
          bg={"teal"}
          zIndex={"overlay"}
          h={[40, 60, "full", "270"]}
          overflow={["scroll", "scroll", "scroll"]}
          w={["full"]}
        >
          <SimpleGrid
            columns={[1, 1, 2, 3, 4]}
            pl={2}
            pb={2}
            row={3}
            // overflow={"scroll"}
            rowGap={1}
            columnGap={[1, 3]}
          >
            {data.slice(34, 62).map((el, i) => {
              return (
                <MenuItem
                  zIndex={"20"}
                  key={i}
                  onClick={() => setNAme(el.flag)}
                  _expanded={{bg: "transparent"}}
                  _focus={{bg: "transparent"}}
                  _hover={{bg: "transparent"}}
                >
                  <Image w={5} mr={1} src={el.flag} />
                  {el.name}
                </MenuItem>
              );
            })}
          </SimpleGrid>
        </MenuList>
      </Menu>
    </>
  );
};

export default Flag;
