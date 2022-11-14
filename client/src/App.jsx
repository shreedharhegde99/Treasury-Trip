import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";

import FooterSm from "./components/Footers/Another/FooterSm";

import {NavbarTop} from "./components/Navbar/NavbarTop";

function App() {
  return (
    <div>
      <NavbarTop />
      <AllRoutes />
      <FooterSm />
      <ScrollToTop/>
    </div>
  )
}

export default App;
