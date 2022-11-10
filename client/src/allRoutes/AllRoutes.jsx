import {Route, Routes} from "react-router-dom";
import Airport_Taxi from "../pages/Airport_Taxi";
import Attractions from "../pages/Attractions";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import {Flights} from "../pages/Flights";
import NotFound from "../pages/NotFound";
import Stays from "../pages/Stays";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/stays" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/taxis" element={<Airport_Taxi />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
