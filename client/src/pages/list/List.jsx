import "./list.css";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
import SearchItem from "../../components/Home/SearchData/SearchItem";
// import { div } from "@chakra-ui/react";

const List = () => {
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <div className="listContainer" columns={{ base: 1, sm: 2 }}>
        <div className="listWrapper">
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
