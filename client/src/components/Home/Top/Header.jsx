import {
  faBed,
  faCalendarDays,
 faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Route, useNavigate } from "react-router-dom";
import { Box, Button, Divider, Input, SimpleGrid, Text } from "@chakra-ui/react";
import id from "date-fns/esm/locale/id/index.js";
import {searchdata} from '../SearchData/SearchItem'
import { AddIcon } from "@chakra-ui/icons";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [place, setPlace] = useState("")
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [city, SetCity] = useState([
    {id:1,city:"indore"},
    {id:2,city:"delhi"},
    {id:3,city:"manali"},
    {id:4,city:"bangalore"},
  ])
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate(`/hotels/${place}`, { state: { destination, date, options } });
    
  }; 

  const [search,setSearch] = useState([])

  const handleChange = (e) => {
    setDestination(e.target.value)
    if(e.target.value)
    {
    var searchresult = city.filter((elem)=>elem.city.includes(e.target.value))
    
    }else{
      var searchresult = []
    }
    setPlace(e.target.value)
    //  console.log(searchresult)
   setSearch(searchresult)


   
  }

console.log(search)
  const handlenavigate = (id) => {
 
  navigate(`/hotels/${id}`)
  }
  return (
    <>
   
    <div style={{width:'100%'}}>
     <div  className="header" >
        
        {type !== "list" && (
          <>
             
             <SimpleGrid  className="headerSearch" gap={"30px"} columns={{base:1,sm:2,md:5}} >
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <Input
                
                  type="text"
                  value = {place}
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={handleChange}
                  
                />
              </div>
             
              {/* <Divider orientation="vertical" color='yellow.500' size='50px'/> */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <Box
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</Box>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              {/* <Divider orientation="vertical" color='yellow.500' size='50px'/> */}
              <div className="headerSearchItem" style={{border:"2px solid black"}}>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options"  style={{border:"2px solid red"}}>
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <Button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </Button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <Button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <Button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </Button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <Button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <Box className="optionText">Room</Box>
                      <div className="optionCounter">
                        <Button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </Button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <Button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Divider orientation="vertical" color='yellow.500' size='50px'/>
              <div className="headerSearchItem">
                <Button className="headerBtn" onClick={handleSearch}>
                  Search
                </Button>
              </div>
              </SimpleGrid>
           
          </>
        )}

</div>
      </div>
      <Box 
      w={"20%"}
       h="auto" 
       border={"1px solid white"}
        mt={"-10px"}
        marginLeft={"100px"}
        textAlign={"center"}
       margin='auto'
      
      
      >
                {
                   search?.map((elem)=>(
                   < Box display={"flex"} gap='30px' marginTop={"20px"} marginLeft='80px'>
                   
                   <AddIcon cursor={'pointer'} /> <Text marginTop={"-5px"}  fontSize={"17px"} cursor={"pointer"}  onClick={()=>setPlace(elem.city)}  key={elem.id}>{elem.city}</Text>
                    </Box>
                   ))
                }
              </Box>



      </>
 
  );
};

export default Header;




