import { Route, Routes } from "react-router-dom";
import { Flights } from "../pages/Flights";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element="" />
      <Route path="/flights" element={<Flights/>}/>
    </Routes>
  );
}
