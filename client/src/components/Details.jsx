import PokemonType from "./PokemonType";
import PokemonStat from "./PokemonStat";
import PokemonAbilities from "./PokemonAbilities";

function Details({ selectedStarter, capitalize }) {
  let description = <p>please choose your starter</p>;

  if (selectedStarter) {
    const types = [...selectedStarter.types];
    const CapitalizedName = capitalize(selectedStarter.name);

    description = (
      <>
        <span className="pokemon-name">
          <h2>{CapitalizedName}</h2>
        </span>

        {/* Displays Pokemon Type */}
        <ul className="pokemon-types">
          {types.map((type, index) => (
            <PokemonType capitalize={capitalize} key={index} {...type} />
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
              capitalize={capitalize}
            />
          ))}
        </ul>
      </>
    );
  }
  return <section id="details">{description}</section>;
}

export default Details;
