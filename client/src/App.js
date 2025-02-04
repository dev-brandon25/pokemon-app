import Details from "./components/Details";
import Header from "./components/Header";
import Starters from "./components/Starters";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [selectedStarter, setSelectedStarter] = useState("");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSelect = (pokemon) => {
    setSelectedStarter(pokemon);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Starters
          capitalize={capitalizeFirstLetter}
          handleSelect={handleSelect}
        />
        <Details
          selectedStarter={selectedStarter}
          capitalize={capitalizeFirstLetter}
        />
      </main>
    </div>
  );
}

export default App;
