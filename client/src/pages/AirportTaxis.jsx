import { Fragment} from "react";
import TaxiFaq from "../components/AirportTaxi/TaxiFaq";
import DownloadApp from "../components/AirportTaxi/DownloadApp";
import SubscribeLetter from "../components/AirportTaxi/SubscribeLetter";
import BookYourTaxi from "../components/AirportTaxi/BookYourTaxi";
import AirportTransferDetail from "../components/AirportTaxi/AirportTransferDetail";
import AirportTaxiKinds from "../components/AirportTaxi/AirportTaxiKinds";
import NavbarR from "../components/Navbar/NavbarR";

export default function AirportTaxi() {
  // const inputRef = useRef("test");
  return (
    <Fragment>
      <NavbarR />
      <BookYourTaxi  />
      <AirportTransferDetail />
      <AirportTaxiKinds  />
      <TaxiFaq />
      <DownloadApp />
      <SubscribeLetter />
    </Fragment>
  );
}
