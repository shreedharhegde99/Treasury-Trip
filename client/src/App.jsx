import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";

import FooterSm from "./components/Footers/Another/FooterSm";

import {NavbarTop} from "./components/Navbar/NavbarTop";

function App() {
  return (
    <div>
      <NavbarTop />
      <AllRoutes />
      <FooterSm />
    </div>
  )
}

export default App;
