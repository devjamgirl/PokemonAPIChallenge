
const search = (event) => {
   // on this search event grab the input value and and get the content that matches the input value
    event.preventDefault();
    const pokenumber = document.getElementById("pokenumber").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    
    $.get(baseURL + pokenumber || pokename,  (pokemon) => { 
        console.log(pokemon); 
        //test to see whether API request is pulled succesfully
       if(pokemon.id > 151) { 
         alert( "You have exceeded the classic pokemon limit!");
       } else if (Math.ceil(pokemon.name.length,152) ) {
      document.getElementById("pokename").innerHTML = pokemon.name;
      document.getElementById("pokeimage").src = pokemon.sprites.front_default;
     document.getElementById("pokeid").innerHTML = "Pokemon ID: " + pokemon.id;
      
  document.getElementById("pokeheight").innerHTML = "Pokemon Height: " + pokemon.height;
   
  document.getElementById("pokeweight").innerHTML = "Pokemon Weight: " + pokemon.weight + " Lbs ";
         }
    });
//  
const pokeURL = "https://pokeapi.co/api/v2/evolution-chain/";
    $.get(pokeURL + pokenumber || pokename,  (pokemon) => {
    document.getElementById("pokespecies").innerHTML = "Pokemon Species: " + chain.species.name;
    //still trying to make this work.
});

  }
  document.getElementById("pokeform").addEventListener('submit', search);
  