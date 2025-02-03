import "../styles/PkmStarter.css";
function PkmStarter(props) {
  const { front_default } = props.sprites;
  const uppercasedName = props.capitalize(props.name);
  // const UppercasedName =
  //   props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <li onClick={() => props.onSelect(props)} className="pokemon">
      <h3>{uppercasedName}</h3>
      <img src={front_default} alt={props.name} />
    </li>
  );
}

export default PkmStarter;
