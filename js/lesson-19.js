const source = document.getElementById('entry-template').innerHTML;
const pokemonCardTpl = Handlebars.compile(source);

const r = fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
  })
  .catch(error => {
    console.log(error);
  });
