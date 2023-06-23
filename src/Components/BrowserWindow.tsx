import Achievements from "./Achievements";
import Banner from "./Banner";
import BottomBar from "./BottomBar";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";

const BrowserWindow = () => {
  return (
    <div>
      <Banner />
      <Portfolio />
      <Pricing />
      <Achievements />
      <BottomBar />
    </div>
  );
}

export default BrowserWindow;