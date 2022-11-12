import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";
import { NavbarTop } from "./components/NavbarTop";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return <div>
    <NavbarTop />
    <AllRoutes /> 

    {/* <List/> */}
  
  </div>;
}

export default App;
