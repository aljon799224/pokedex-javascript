const pokedex = document.querySelector(".pokedex");
const backBtn = document.querySelector(".back");

backBtn.addEventListener("click", function () {
  pokedex.classList.toggle("hidden");
  pokemonListKanto.classList.toggle("hidden");
  pokemonListJohto.classList.toggle("hidden");
  pokemonListHoenn.classList.toggle("hidden");
  pokemonListSinnoh.classList.toggle("hidden");
});

// containers
const pokemonListKanto = document.querySelector(".pokemon-list-kanto");
const pokemonListJohto = document.querySelector(".pokemon-list-johto");
const pokemonListHoenn = document.querySelector(".pokemon-list-hoenn");
const pokemonListSinnoh = document.querySelector(".pokemon-list-sinnoh");

// number of pokemons
const pokemonsKanto = 151;
const pokemonsJohto = 251; // 251
const pokemonsHoenn = 386; //252 - 386
const pokemonsSinnoh = 494; //387 - 494

//regions
const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");

// colors bg
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

//event handlers

kanto.addEventListener("click", function () {
  pokedex.classList.toggle("hidden");
  pokemonListKanto.classList.toggle("hidden");
});

johto.addEventListener("click", function () {
  pokedex.classList.toggle("hidden");
  pokemonListJohto.classList.toggle("hidden");
});

hoenn.addEventListener("click", function () {
  pokedex.classList.toggle("hidden");
  pokemonListHoenn.classList.toggle("hidden");
});

sinnoh.addEventListener("click", function () {
  pokedex.classList.toggle("hidden");
  pokemonListSinnoh.classList.toggle("hidden");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Kanto Region

// render pokemon Kanto api
const getPokemonKanto = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  createPokemonCardKanto(pokemon);
};

// fetch pokemon Kanto
const fetchPokemonKanto = async () => {
  for (let i = 1; i <= pokemonsKanto; i++) {
    await getPokemonKanto(i);
  }
};

fetchPokemonKanto();

// kanto pokemon card

function createPokemonCardKanto(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  pokemonImg.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  pokemonCard.appendChild(pokemonImg);

  const pokemonNumber = document.createElement("h3");
  pokemonNumber.innerText = `#${pokemon.id.toString().padStart(3, "0")}`;
  pokemonCard.appendChild(pokemonNumber);

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("pokemon-name");
  pokemonName.innerText = `${
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  }`;
  pokemonCard.appendChild(pokemonName);

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const pokemonType = document.createElement("h3");
  pokemonType.classList.add("pokemon-type");
  pokemonType.innerText = `Type: ${type[0].toUpperCase() + type.slice(1)}`;
  const color = colors[type];
  pokemonCard.style.backgroundColor = color;
  pokemonCard.appendChild(pokemonType);

  const pokeSounds = document.createElement("audio");
  const pokeSource = document.createElement("source");
  pokeSource.src = `${kanto.mp3}`;

  pokeSounds.appendChild(pokeSource);
  pokemonCard.appendChild(pokeSounds);

  pokemonListKanto.appendChild(pokemonCard);
}

/////////////////////////////////////////////////////////////////////////

// Johto Region
// render pokemon Johto api
const getPokemonJohto = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  createPokemonCardJohto(pokemon);
};

// fetch pokemon Kanto
const fetchPokemonJohto = async () => {
  for (let i = 152; i <= pokemonsJohto; i++) {
    await getPokemonJohto(i);
  }
};

fetchPokemonJohto();

// Johto pokemon card
function createPokemonCardJohto(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  pokemonImg.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  pokemonCard.appendChild(pokemonImg);

  const pokemonNumber = document.createElement("h3");
  pokemonNumber.innerText = `#${pokemon.id.toString().padStart(3, "0")}`;
  pokemonCard.appendChild(pokemonNumber);

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("pokemon-name");
  pokemonName.innerText = `${
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  }`;
  pokemonCard.appendChild(pokemonName);

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const pokemonType = document.createElement("h3");
  pokemonType.classList.add("pokemon-type");
  pokemonType.innerText = `Type: ${type}`;

  const color = colors[type];
  pokemonCard.style.backgroundColor = color;
  pokemonCard.appendChild(pokemonType);

  pokemonListJohto.appendChild(pokemonCard);
}

//////////////////////////////////////////////////////////////////////////////////
// Hoenn Region
// render pokemon Hoenn api
const getPokemonHoenn = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  createPokemonCardHoenn(pokemon);
};

// fetch pokemon Kanto
const fetchPokemonHoenn = async () => {
  for (let i = 252; i <= pokemonsHoenn; i++) {
    await getPokemonHoenn(i);
  }
};

fetchPokemonHoenn();

// Hoenn pokemon card
function createPokemonCardHoenn(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  pokemonImg.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  pokemonCard.appendChild(pokemonImg);

  const pokemonNumber = document.createElement("h3");
  pokemonNumber.innerText = `#${pokemon.id.toString().padStart(3, "0")}`;
  pokemonCard.appendChild(pokemonNumber);

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("pokemon-name");
  pokemonName.innerText = `${
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  }`;
  pokemonCard.appendChild(pokemonName);

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const pokemonType = document.createElement("h3");
  pokemonType.classList.add("pokemon-type");
  pokemonType.innerText = `Type: ${type}`;

  const color = colors[type];
  pokemonCard.style.backgroundColor = color;
  pokemonCard.appendChild(pokemonType);

  pokemonListHoenn.appendChild(pokemonCard);
}

//////////////////////////////////////////////////////////////////////////////////
// Sinnoh Region
// render pokemon Sinnoh api
const getPokemonSinnoh = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  createPokemonCardSinnoh(pokemon);
};

// fetch pokemon Kanto
const fetchPokemonSinnoh = async () => {
  for (let i = 387; i <= pokemonsSinnoh; i++) {
    await getPokemonSinnoh(i);
  }
};

fetchPokemonSinnoh();

// Sinnoh pokemon card
function createPokemonCardSinnoh(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemon-img");
  pokemonImg.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  pokemonCard.appendChild(pokemonImg);

  const pokemonNumber = document.createElement("h3");
  pokemonNumber.innerText = `#${pokemon.id.toString().padStart(3, "0")}`;
  pokemonCard.appendChild(pokemonNumber);

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("pokemon-name");
  pokemonName.innerText = `${
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  }`;
  pokemonCard.appendChild(pokemonName);

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const pokemonType = document.createElement("h3");
  pokemonType.classList.add("pokemon-type");
  pokemonType.innerText = `Type: ${type}`;

  const color = colors[type];
  pokemonCard.style.backgroundColor = color;
  pokemonCard.appendChild(pokemonType);

  pokemonListSinnoh.appendChild(pokemonCard);
}
