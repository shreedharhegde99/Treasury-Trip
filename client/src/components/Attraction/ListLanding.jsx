import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";
import {BiChevronRight} from "react-icons/bi";
import {BsCalendarCheck} from "react-icons/bs";
import {Tabs, TabList, Tab} from "@chakra-ui/react";
import "./ListLanding.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCityData, loaded} from "../../redux/attractions/attractions.action";
import {Navigate, useParams} from "react-router-dom";
import NavbarR from "../Navbar/NavbarR";
export default function ListLanding() {
  const {cityData, dataLoaded} = useSelector((state) => state.attraction);
  const [data, setData] = useState(cityData);
  const {city} = useParams();
  const [citySearch, setCitySearch] = useState(city);

  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(getCityData(city));
    // setData(cityData)
  };
  const getCity = (val) => {
    let city = val[0].toUpperCase() + val.slice(1);
    return city;
  };

  useEffect(() => {
    dispatch(loaded(false));
  }, []);

  useEffect(() => {
    setData(cityData);
  }, [cityData]);

  if (dataLoaded) {
    dispatch(loaded(false));
    return <Navigate to={`/attractions/${citySearch}`} replace={true} />;
  }

  const sortLowToHigh = () => {
    let updatedData = [...data].sort((a, b) => {
      let [Rs, price] = a.price.trim().split(".");
      let [rs, prices] = b.price.trim().split(".");
      price = price.split(",").join("");
      prices = prices.split(",").join("");
      // console.log(Number(price),Number(prices))

      return Number(price) - Number(prices);
    });
    setData(updatedData);
  };

  const highToLow = () => {
    let updatedData = [...data].sort((a, b) => {
      let [Rs, price] = a.price.trim().split(".");
      let [rs, prices] = b.price.trim().split(".");
      price = price.split(",").join("");
      prices = prices.split(",").join("");
      // console.log(Number(price),Number(prices))
      return Number(prices) - Number(price);
    });
    setData(updatedData);
  };
  // console.log(data)

  return (
    <Box>
      <NavbarR />
      <Box ml={"10%"} pt={"3%"} style={{fontWeight: "bold", fontSize: "25px"}}>
        {getCity(city)} Attractions
      </Box>
      <HStack align={"start"}>
        {/* Left-Box */}
        <Box mt={"20px"} ml={"10%"} mr={"5%"} w="28%">
          <Box border="4px" borderColor={"orange"} borderRadius={"10px"}>
            <InputGroup>
              <InputLeftElement>
                <FiSearch />
              </InputLeftElement>
              <Input
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                placeholder="Museum, tours,activities..."
              />
            </InputGroup>
            <Input type="date" />
            <Button
              onClick={() => handleSearch(citySearch)}
              border="2px"
              borderColor={"orange"}
              color="white"
              bg={"#006CE4"}
              pl={"42.5%"}
              pr={"42.5%"}
            >
              Search
            </Button>
          </Box>
          <br />

          <Box
            border={"1px solid lightgrey"}
            h="auto"
            borderRadius={"10px"}
            pl="5%"
          >
            <h1 style={{fontWeight: "bold", fontSize: "16px", marginTop: "5%"}}>
              Filter
            </h1>
            <br />
            <hr style={{marginLeft: "-5%"}} />
            <h1
              style={{
                fontWeight: "500",
                fontSize: "15px",
                color: "#1A1A1A",
                marginTop: "5%",
              }}
            >
              Category
            </h1>
            <HStack>
              <input type="checkbox" /> <h1>Tours</h1>
            </HStack>
            <HStack>
              <input type="checkbox" /> <h1>Activities</h1>
            </HStack>
            <h1
              style={{
                fontWeight: "500",
                fontSize: "15px",
                color: "#1A1A1A",
                marginTop: "5%",
              }}
            >
              Price
            </h1>
            <HStack>
              <input type="checkbox" /> <h1>Rs. 0 - Rs. 1,669</h1>
            </HStack>
            <HStack>
              <input type="checkbox" /> <h1>Rs. 1,669 - Rs. 3,338</h1>
            </HStack>
            <HStack>
              <input type="checkbox" /> <h1>Rs. 3,338 - Rs. 6,259</h1>
            </HStack>
            <HStack>
              <input type="checkbox" /> <h1>Rs. 6,259 - Rs. 10,432</h1>
            </HStack>
            <HStack>
              <input type="checkbox" /> <h1>Rs. 10,432 +</h1>
            </HStack>
            <h1
              style={{
                fontWeight: "500",
                fontSize: "15px",
                color: "#1A1A1A",
                marginTop: "5%",
              }}
            >
              Other
            </h1>
            <HStack>
              <input type="checkbox" /> <h1>Free cancellation</h1>
            </HStack>
            <br />
          </Box>
        </Box>
        {/* right box */}
        <Box w="50%" pt={"20px"}>
          <Tabs variant="soft-rounded" colorScheme="white" marginLeft={"-5%"}>
            <TabList w="100%" mt={"-10px"}>
              <HStack>
                <Tab onClick={highToLow} className="hover">
                  Our top picks
                </Tab>
                <Tab className="hover">Most popular</Tab>
                <Tab onClick={sortLowToHigh} className="hover">
                  Lowest price
                </Tab>
              </HStack>
            </TabList>
          </Tabs>
          {/* cards starts from here */}
          <Box marginLeft={"-7%"} mt={"5px"}>
            <Stack gap={3}>
              {data.map((el) => {
                return (
                  <Box
                    className="textHover"
                    key={el._id}
                    w="100%"
                    borderRadius="10px"
                    h="auto"
                    border={"1px solid lightgrey"}
                    cursor="pointer"
                  >
                    <HStack>
                      <Box w="25%" m={"15px"}>
                        <Image
                          w="100%"
                          borderRadius={"10px"}
                          src={el.image}
                          loading="lazy"
                        />
                      </Box>
                      <Box mt={"-20"} w="70%">
                        <p
                          style={{
                            color: "#1A1A1A",
                            fontSize: "14px",
                            marginTop: "5px",
                          }}
                        >
                          {el.city.toUpperCase()}
                        </p>
                        <h1 style={{fontWeight: "bold", fontSize: "20px"}}>
                          {el.title}
                        </h1>
                        <p
                          style={{
                            color: "#1A1A1A",
                            fontSize: "14px",
                            marginBottom: "15px",
                          }}
                        >
                          {el.desc}
                        </p>
                        {/* <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/>{el.duration}?<p>Duration 2 hours</p>:''</HStack></Box> */}
                        <Box style={{fontSize: "14px", color: "#008234"}}>
                          <HStack>
                            <BsCalendarCheck /> <p>{el.cancellation}</p>
                          </HStack>
                        </Box>
                        <Box className="rightalign">
                          From{" "}
                          <span>
                            <p>{el.price}</p>
                          </span>{" "}
                        </Box>
                        <Button bg={"#00000"} className="seeAvail">
                          See availability <BiChevronRight />
                        </Button>
                      </Box>
                    </HStack>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </HStack>
      <br />
    </Box>
  );
}
