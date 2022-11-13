import { Route, Routes } from "react-router-dom";
import AirportTaxi from "../pages/AirportTaxis";
import Attractions from "../pages/Attractions";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import { Flights } from "../pages/Flights";
import { FlightSearch } from "../pages/FlightSearch";
import NotFound from "../pages/NotFound";
import { PersonalDetails } from "../pages/PersonalDetails";
import Stays from "../pages/Stays";
import { Ticket } from "../pages/Ticket";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/stays" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />
      {/* <Route path="/taxis" element={<Airport_Taxi />} /> */}
      <Route path="/login" element={<Login/>} />
    <Route path="/invoice/:id" element={<Ticket/>}/>
      <Route path="/taxis" element={<AirportTaxi />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/flights/search/:myway" element={<FlightSearch />} />
      <Route path="/flights/book/:id" element={<PersonalDetails />} />
      <Route path="/car-rentals" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
