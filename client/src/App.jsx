// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).

import React, { useState } from 'react';
import Card from "./Card"
const cards = [{ name: "Dragão Branco de olhos azuis", type: "Dragão", attack: 3000, defense: 2500 },
  { name: "dragao preto de olhos vermelhos", type: "Dragão", attack: 2400, defense: 2000 },
  { name: "Slifer Dragão celeste", type: "Deus", attack: 5000, defense: 5000 },
  { name: "Dragão alado de Rá", type: "Deus", attack: 4000, defense: 4000 },
  { name: "Oblisco da Tormenta", type: "Deus", attack: 4000, defense: 4000 },
];

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [pesquisa, setPesquisa] = useState("");
  const [cartaSorte, setCartaSorte] = useState(null);
}

  const cartasFiltradas = cards.filter((card) => {
    const passaTipo = filtro === "todas" ? true : card.type === filtro;
    const passaPesquisa = card.name.toLowerCase().includes(pesquisa.toLowerCase());
    return passaTipo && passaPesquisa;
  });

  function escolherCartaSorte() {
    const indiceAleatorio = Math.floor(Math.random() * cards.length);
    setCartaSorte(cards[indiceAleatorio]);

  return (
    <main>
      <h1>A minha coleção</h1>
      <p>Tenho {cards.length} cartas</p>

      <div style={{ marginBottom: "15px" }}>
        <input 
          type="text" 
          placeholder="Pesquisar carta..." 
          value={pesquisa} 
          onChange={(e) => setPesquisa(e.target.value)} 
          style={{ padding: "5px", width: "200px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("Deus")}>Deus</button>
        <button onClick={() => setFiltro("Dragão")}>Dragão</button>
       
      </div>

      <ul>
        {cartasFiltradas.map((card, index) => (
          <li key={index}>
            <Card 
              name={card.name} 
              type={card.type} 
              attack={card.attack} 
              defense={card.defense} 
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
