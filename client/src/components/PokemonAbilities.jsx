function PokemonAbilities(props) {
  const abilityName = props.ability.name;
  const uppercasedName = props.capitalize(abilityName);
  return <li>{uppercasedName}</li>;
}

export default PokemonAbilities;
