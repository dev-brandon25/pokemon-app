import { useState, useEffect } from "react";
import Header from "./components/Header";
import PkmStarter from "./components/PkmStarter";
import PokemonStat from "./components/PokemonStat";
import PokemonType from "./components/PokemonType";
import PokemonAbilities from "./components/PokemonAbilities";
import "./styles/App.css";

function App() {
  const [starters, setStarters] = useState([]);
  const [selectedStarter, setSelectedStarter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/";

        // Make multiple API calls in parallel
        const [response1, response2, response3] = await Promise.all([
          fetch(`${url}/pokemon/1`).then((response) => response.json()),
          fetch(`${url}/pokemon/4`).then((response) => response.json()),
          fetch(`${url}/pokemon/7`).then((response) => response.json()),
        ]);

        // Combine the rsponse into an array
        setStarters([
          ...(Array.isArray(response1) ? response1 : [response1]),
          ...(Array.isArray(response2) ? response2 : [response2]),
          ...(Array.isArray(response3) ? response1 : [response3]),
        ]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (pokemon) => {
    setSelectedStarter(pokemon);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let description = <p>please choose your starter</p>;

  if (selectedStarter) {
    const types = [...selectedStarter.types];
    const CapitalizedName = capitalizeFirstLetter(selectedStarter.name);

    description = (
      <div>
        <span className="pokemon-name">
          <h2>{CapitalizedName}</h2>
        </span>

        {/* Displays Pokemon Type */}
        <ul className="pokemon-types">
          {types.map((type, index) => (
            <PokemonType
              capitalize={capitalizeFirstLetter}
              key={index}
              {...type}
            />
          ))}
        </ul>
        {/* Displays Pokemon Stats */}
        <ul className="pokemon-stat">
          {selectedStarter.stats.map((stat, index) => (
            <PokemonStat {...stat} key={index} />
          ))}
        </ul>
        {/* Displays Pokemon Abilities */}
        <ul className="pokemon-abilities">
          {selectedStarter.abilities.map((ability, index) => (
            <PokemonAbilities
              key={index}
              {...ability}
              capitalize={capitalizeFirstLetter}
            />
          ))}
        </ul>
      </div>
    );
  }

  console.log(selectedStarter);
  return (
    <div className="App">
      <Header />
      <ul className="pokemon-starter">
        {starters.map((pokemon) => (
          <PkmStarter
            key={pokemon.id}
            onSelect={handleSelect}
            capitalize={capitalizeFirstLetter}
            {...pokemon}
          />
        ))}
      </ul>
      <section>{description}</section>
    </div>
  );
}

export default App;
