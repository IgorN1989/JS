// const r = fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => {
//   return response.json();
//   })
//   .then(renderPokemonCard)
//   .catch(error => {
//     console.log(error);
//   });

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//     requestAnimationFrame.cardContainer.innerHTML = markup;
// }

const url = 'https://newsapi.org/v2/everything?q=bitcoin';
const options = {
  headers: {
    'X-Api-Key': '998da77ec83644b1a32a6a45028d130c'
  }
}

fetch(url, options)
  .then(response => response.json())
  .then(console.log);