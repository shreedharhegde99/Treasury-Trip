import AllRoutes from "./allRoutes/AllRoutes";
import "./App.css";
import ScrollToTop from "./components/common/ScrollToTop";
import FooterSm from "./components/Footers/Another/FooterSm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <FooterSm />
      <ScrollToTop />
    </div>
  );
}

export default App;
