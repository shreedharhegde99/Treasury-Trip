import { Route, Routes } from "react-router-dom";
import Airport_Taxi from "../pages/Airport_Taxi";
import Attractions from "../pages/Attractions";
import { Flights } from "../pages/Flights";
import Stays from "../pages/Stays";

export default function AllRoutes() {
  return (
    <Routes>
       <Route path="/stays" element={<Stays/>}/>
      <Route path="/flights" element={<Flights/>}/>
      <Route path="/attractionss" element={<Attractions/>}/>
      <Route path="/airport_taxi" element={<Airport_Taxi/>}/>
    </Routes>
  );
}
