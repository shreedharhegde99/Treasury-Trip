import {Route, Routes} from "react-router-dom";
import AirportTaxi from "../pages/AirportTaxis";
import Attractions from "../pages/Attractions";
import Logging from "../pages/Auth/Logging";
import Register from "../pages/Auth/Register";
import {Flights} from "../pages/Flights";
import {FlightSearch} from "../pages/FlightSearch";
import NotFound from "../pages/NotFound";
import {PersonalDetails} from "../pages/PersonalDetails";
import Stays from "../pages/Stays";
import { Ticket } from "../pages/Ticket";
import AirportTaxiResults from "../pages/AirportTaxiResults";
// import AirportTaxiCheckout from "../pages/AirportTaxiCheckout";
import List from "../pages/list/List";
import PrivateRoute from "./PrivateRoute";
import ListLanding from "../components/Attraction/ListLanding";
import GridBlurredBackdrop from "../components/Footers/Another/Testimonial";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Stays />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/attractions/:city" element={<ListLanding />} />
      <Route path="/invoice/:id" element={<Ticket />} />
      <Route path="/taxis" element={<AirportTaxi />} />
      <Route path="/taxis/taxi-search" element={<AirportTaxiResults />} />
      {/* <Route
        path="/taxis/taxi-search/checkout"
        element={<AirportTaxiCheckout />}
      /> */}
      <Route path="/login" element={<Logging />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights/search/:myway" element={<FlightSearch />} />
      <Route
        path="/flights/book/:id"
        element={
         <PrivateRoute><PersonalDetails /></PrivateRoute>
            
          
        }
      />
      <Route path="/treasury/testimonials" element={<GridBlurredBackdrop />} />
      <Route path="/car-rentals" element={<NotFound />} />
      <Route path="/hotels/:id" element={<List/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
