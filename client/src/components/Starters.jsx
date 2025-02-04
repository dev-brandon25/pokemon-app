import { useState, useEffect } from "react";
import PkmStarter from "./PkmStarter";

function Starters({ capitalize, handleSelect }) {
  const [starters, setStarters] = useState([]);

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

  return (
    <section id="starters">
      <ul className="pokemon-starter">
        {starters.map((pokemon) => (
          <PkmStarter
            key={pokemon.id}
            onSelect={handleSelect}
            capitalize={capitalize}
            {...pokemon}
          />
        ))}
      </ul>
    </section>
  );
}

export default Starters;
