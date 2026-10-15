function Card({ name, type, attack, defense }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>
      <p>Defesa: {defense}</p>
    </div>
  );
}

export default Card;