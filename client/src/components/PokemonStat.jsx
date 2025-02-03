function PokemonStat(props) {
  return (
    <div>
      <p>
        {props.stat.name}: {props.base_stat}
      </p>
    </div>
  );
}

export default PokemonStat;
