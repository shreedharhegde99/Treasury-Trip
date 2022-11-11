import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";
import FooterDwn from "./components/Footers/FooterDwn";
import { NavbarTop } from "./components/NavbarTop";

function App() {
  return <div>
    <NavbarTop />
    <AllRoutes />
<FooterDwn/>
  </div>;
}

export default App;
