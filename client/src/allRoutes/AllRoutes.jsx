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
<<<<<<< HEAD
import { Ticket } from "../pages/Ticket";

=======
import Airport_Taxi from "../pages/AirportTaxis"
import ListLanding from "../components/Attraction/ListLanding";
>>>>>>> b8cc9915c3ccc2713c7cc8a388b9b631f9168fef

export default function AllRoutes() {
  return (
    <Routes>
      < Route path="/" element={<Home/>}/>
      <Route path="/stays" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />
<<<<<<< HEAD
      {/* <Route path="/taxis" element={<Airport_Taxi />} /> */}
=======
      <Route path="/attractions/:city" element={<ListLanding />} />
      
      <Route path="/taxis" element={<Airport_Taxi />} />
>>>>>>> b8cc9915c3ccc2713c7cc8a388b9b631f9168fef
      <Route path="/login" element={<Login/>} />
    <Route path="/invoice/:id" element={<Ticket/>}/>
      <Route path="/taxis" element={<AirportTaxi />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights/search/:myway" element={<FlightSearch />} />
      <Route path="/flights/book/:id" element={<PersonalDetails />} />
      <Route path="/car-rentals" element={<NotFound />} />
      <Route path="/hotels/:id" element={<List/>}/>
      <Route path="*" element={<NotFound />} />
    
    </Routes>
  );
}
