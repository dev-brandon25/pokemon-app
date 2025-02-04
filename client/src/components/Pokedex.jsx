import { useState } from "react";
import Starters from "./Starters";
import Details from "./Details";

function Pokedex() {
  const [selectedStarter, setSelectedStarter] = useState("");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleSelect = (pokemon) => {
    setSelectedStarter(pokemon);
  };
  return (
    <>
      <Starters
        capitalize={capitalizeFirstLetter}
        handleSelect={handleSelect}
      />
      <Details
        selectedStarter={selectedStarter}
        capitalize={capitalizeFirstLetter}
      />
    </>
  );
}

export default Pokedex;
