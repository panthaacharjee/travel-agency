import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Partner from "./components/Partner";
import Service from "./components/Service/Service";
import Trip from "./components/Trip/Trip";
function App() {
  return (
    <div>
      <Header />
      <Service />
      <Destination />
      <Trip />
      <Contact />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
