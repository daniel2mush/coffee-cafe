import BuyProducts from "./components/BuyProducts/BuyProducts";
import Download from "./components/Download/Download";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Tracker from "./components/Tracker/Tracker";

const App = () => {
  return (
    <div className=" overflow-x-hidden scroll-smooth">
      <Hero />
      <Tracker>
        {" "}
        <Service />
      </Tracker>
      <Tracker>
        <BuyProducts />
      </Tracker>
      <Tracker>
        <Download />
      </Tracker>
      <Tracker>
        <Footer />
      </Tracker>
    </div>
  );
};

export default App;
