
import './App.css'; 
import Header from './components/Header'
import Footer from './components/Footer'
import React, { useState } from 'react';  

  // Define uma função chamada 'primaryRequest'.

  function App() {  // Define o componente funcional principal chamado 'App'.
  
    const url = 'https://opentdb.com/api.php?amount=30&category=15'; 
  
  

    fetch(url)
    .then(response => response.json())
    .then(data => {
      question(data); 
      correct_answers(data);  
    });

    const PERGUNTA = (index) => {  // Define uma função chamada 'handleAddFavorite' que adiciona um país aos favoritos.
    const newPerguntas = [...question, correct_answers[index]];
    setPerguntas(newPerguntas);
    update(newPerguntas);
  };

  const [question, correct_answers] = useState([]);  

  return (
    <>
      <Header />
      <h1>PERGUNTA E RESPOSTA!</h1> 
      <div>
        <button onClick={App}>GERAR!</button>  
      </div>
      <div>
        <figure>
          <figcaption id="legenda">olá</figcaption>
          <p src="" id="" alt="" /> 
        </figure>
      </div>
      <Footer />
      <>
  
  </>
    </>
  );
}

export default App;  // Exporta o componente 'App' como exportação padrão.
