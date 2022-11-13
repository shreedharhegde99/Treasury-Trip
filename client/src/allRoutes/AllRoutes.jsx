import { Route, Routes } from "react-router-dom";
import ListLanding from "../components/Attraction/ListLanding";
import AirportTaxi from "../pages/AirportTaxis";
import Attractions from "../pages/Attractions";
import Logging from "../pages/Auth/Logging";
import Register from "../pages/Auth/Register";
import {Flights} from "../pages/Flights";
import {FlightSearch} from "../pages/FlightSearch";
import NotFound from "../pages/NotFound";
import {PersonalDetails} from "../pages/PersonalDetails";
import Stays from "../pages/Stays";


import PrivateRoute from "./PrivateRoute";
import { Ticket } from "../pages/Ticket";
import Airport_Taxi from "../pages/AirportTaxis"


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />


      
      <Route path="/taxis" element={<Airport_Taxi />} />


      <Route path="/attractions/:city" element={<ListLanding />} />

      <Route path="/login" element={<Login/>} />
    <Route path="/invoice/:id" element={<Ticket/>}/>
      <Route path="/taxis" element={<AirportTaxi />} />
      <Route path="/login" element={<Logging />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights/search/:myway" element={<FlightSearch />} />
      <Route
        path="/flights/book"
        element={
          <PrivateRoute>
            <PersonalDetails />
          </PrivateRoute>
        }
      />

      <Route path="/car-rentals" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    
    </Routes>
  );
}
