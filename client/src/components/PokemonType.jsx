function PokemonType(props) {
  const uppercasedName = props.capitalize(props.type.name);
  return <h3>{uppercasedName}</h3>;
}

export default PokemonType;
