import Achievements from "./components/Achievements";
import Banner from "./components/Banner";
import BottomBar from "./components/BottomBar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";

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
};

export default BrowserWindow;
