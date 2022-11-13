import {Route, Routes} from "react-router-dom";
import SearchItem from "../components/Home/SearchData/SearchItem";
import Home from "../pages/Home2/Home";
import Hotel from "../pages/hotel/Hotel";
import List from "../pages/list/List";
import AirportTaxi from "../pages/AirportTaxis";
import Attractions from "../pages/Attractions";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import { Flights } from "../pages/Flights";
import { FlightSearch } from "../pages/FlightSearch";
import NotFound from "../pages/NotFound";
import { PersonalDetails } from "../pages/PersonalDetails";
import Stays from "../pages/Stays";
import Airport_Taxi from "../pages/AirportTaxis"
import ListLanding from "../components/Attraction/ListLanding";

export default function AllRoutes() {
  return (
    <Routes>
      < Route path="/" element={<Home/>}/>
      <Route path="/stays" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/attractions/:city" element={<ListLanding />} />
      
      <Route path="/taxis" element={<Airport_Taxi />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/taxis" element={<AirportTaxi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights/search/:myway" element={<FlightSearch />} />
      <Route path="/flights/book" element={<PersonalDetails />} />
      <Route path="/car-rentals" element={<NotFound />} />
      <Route path="/hotels/:id" element={<List/>}/>
      <Route path="*" element={<NotFound />} />
    
    </Routes>
  );
}
