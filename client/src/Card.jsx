function Card({ name, type, attack, defense }) {
  return (
    <div>
    {attack >= 3000 && <strong><h2>{name}</h2></strong>}
    {attack < 3000 && <h3>{name}</h3>}
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>
      <p>Defesa: {defense}</p>
    </div>
  );
}

export default Card;