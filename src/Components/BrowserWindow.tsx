import Achievements from "./Achievements";
import Banner from "./Banner";
import BottomBar from "./BottomBar";
import Pricing from "./Pricing";
import TopBar from "./TopBar";

const BrowserWindow = () => {
  return (
    <div>
      <Banner />
      <Pricing />
      <Achievements />
      <BottomBar />
    </div>
  );
}

export default BrowserWindow;