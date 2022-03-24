// función de fetch para consultar la PokeAPI
const fetchPokemon = () => {
    // Consegue el identificador info-name del archivo html
    const pokeName = document.getElementById("info-input");
    // convierte a mayusculas el valor de la variable pokeName 
    let pokeInput = pokeName.value.toLowerCase();
    // Consulta la API y busca el el valor de la variable pokeInput
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    /*const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokeInput}`;*/


    //fetch es para la consulta de la API
    fetch(url).then((res) => {
        // Si el el estatus es diferente de 200..
        if (res.status != "200") {
            // imprime el error en consola
            console.log(res);
            console.log("solo esta entrando  a esta parte del ciclo")
            
            // muestra la imagen de pikachu sad 
            pokeImage("./img/pikachuSad.gif");
            pokeInfoName(" Pokemón no encontrado");
            pokeId("000");
            pokeHabilidad("0");
            pokeTypeInfo("0");
            pokeAltura("0");
            pokePeso("0");
            pokePS("0");
            pokeAtaque("0");
            pokeDefensa("0");
            pokeVelocidad("0");
            pokeAtaqueEspecial("0");
            pokeDefensaEspecial("0");
            pokeSumaTotal("0");
            // mostrar alerta de pokemon no encontrado
            alert('Error, Pokemon no encontrado');
            //swal("Error", "Pokemón no encontrado", "error");          

        }
        // De lo contrario...
        else {
            // retorna el json() con toda la informción
            return res.json();
        }
    }).then((data) => {  
        console.log(data);
        // variable que alamcena una imagen que va a traer desde la api
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        // llama a la funcion pokeImage 
        pokeImage(pokeImg);

        //console.log(data);
        let pokemonName = data.name;        
        console.log("Nombre: " + pokemonName);
        // convierte a mayusculas el nombre de los pokemones
        let nombrePoke = pokeName.value.toUpperCase();
        //llama a la función pokeInfoName y pasa como parametro nombrePoke
        pokeInfoName(nombrePoke);
        
        //mostrar el id del pokemon
        let pokemonId = data.id;
        console.log("Id: " + pokemonId);
        pokeId(pokemonId);

        // muestra una habilidad
        let hability = data.abilities[0].ability.name;
        console.log("Habilidad: " + hability);
        pokeHabilidad(hability);

        let hability2 = data.abilities[1].ability.name;
        console.log("Habilidad:" + hability2);

        // muestra el tipo de pokemon
        let pokeType = data.types[0].type.name;
        console.log(`Tipo:${ pokeType }`);
        pokeTypeInfo(pokeType);

        // Muestra la altura 
        let pokeHeight = data.height;
        console.log(`altura:${ pokeHeight }`);
        pokeAltura(pokeHeight);

        // muestra el peso del pokemon
        let pokeWeight = data.weight;
        console.log("Peso: " + pokeWeight);
        pokePeso(pokeWeight);

        // stats
        let ps = data.stats[0].base_stat;
        console.log(`PS:${ ps }`);
        pokePS(ps);

        let ataque = data.stats[1].base_stat; 
        console.log(`Ataque:${ ataque }`);
        pokeAtaque(ataque);

        let defensa = data.stats[2].base_stat; 
        console.log(`Defensa:${ defensa }`);
        pokeDefensa(defensa);

        let velocidad = data.stats[5].base_stat ; 
        console.log(`Velocidad:${ velocidad }`);
        pokeVelocidad(velocidad);

        let atEspecial = data.stats[3].base_stat; 
        console.log(`Ataque Especial:${ atEspecial }`);
        pokeAtaqueEspecial(atEspecial);

        let defEspecial = data.stats[4].base_stat; 
        console.log(`Defensa Especial:${ defEspecial }`);
        pokeDefensaEspecial(defEspecial);

        let sumaTotal = ps + ataque + defensa + velocidad + atEspecial + defEspecial;
        console.log("Total: " + sumaTotal);
        pokeSumaTotal(sumaTotal);

        // manda llamar a la función pokemonDescription
        /* let pokemonDescription = data.species.url;
        pokeInfoDescription(pokemonDescription); */
    })

    // fetch para consultar la descripcion del pokemon
  /* fetch(url2)
        .then((response) => 
        response.json())
        .then((data) => {
            // establece la descripción del pokemon
            let pokemonDescription = data.flavor_text_entries.flavor_text;
            console.log(pokemonDescription);
            // llama a la función pokeInfoDescription
            pokeInfoDescription(pokemonDescription);
        }) */
}

// Funcion para cambiar la imagen
const pokeImage = (url) => {
    // cambia la iagen del apartado info-img que esta el el archivo html
    const pokeImg = document.getElementById("info-img");
    pokeImg.src = url;
}

// funcion para cambiar el nombre
const pokeInfoName = (url) => {
    const infoName = document.getElementById("info-name");
    infoName.innerHTML = url;  // Cambia el nombre del pokemon en el archivo html
} 

// funcion para cambiar el texto de la descripción del pokemon
/*const pokeInfoDescription = (url2) => {
    const infoDescription = document.getElementById("info-text");
    infoDescription.innerHTML = url2; 
}*/

// funcion para poner el id del pokemon
const pokeId = (url) => {
    const infoId = document.getElementById("info-id");
    infoId.innerHTML = url;
}

// funcion para poner la habilidad del pokemon
const pokeHabilidad = (url) => {
    const habilidad = document.getElementById("pokemonHability");
    habilidad.innerHTML = url;
} 

// funcion para mostrar el tipo de pokemon
let pokeTypeInfo = (url) => {
    const infoType = document.getElementById("pokemonTipo");
    infoType.innerHTML = url;
}

// funcion para mostrar la altura
let pokeAltura = (url) => {
    const infoAltuta = document.getElementById("pokemonAltura");
    infoAltuta.innerHTML = url;
}

// funcion para cambiar lo que muestra en peso
let pokePeso = (url) => {
    const infoPeso = document.getElementById("pokemonPeso");
    infoPeso.innerHTML = url;
}

// funcion para cambiar lo que muestra en PS
let pokePS = (url) => {
    const infoPS = document.getElementById("pokemonPS");
    infoPS.innerHTML = url;
}

// funcion para cambiar lo que muestra en Ataque
let pokeAtaque = (url) => {
    const infoAtaque = document.getElementById("pokemonPokeAtaque");
    infoAtaque.innerHTML = url;
}

// funcion para cambiar lo que muestra en Defensa
let pokeDefensa = (url) => {
    const infoDefensa = document.getElementById("pokemonDefensa");
    infoDefensa.innerHTML = url;
}

// funcion para cambiar lo que muestra en Velocidad
let pokeVelocidad = (url) => {
    const infoVelocidad = document.getElementById("pokemonVelocidad");
    infoVelocidad.innerHTML = url;
}

// funcion para cambiar lo que muestra en Velocidad
let pokeAtaqueEspecial = (url) => {
    const infoAtaqueEspecial = document.getElementById("pokemonAtEspecial");
    infoAtaqueEspecial.innerHTML = url;
}

// funcion para cambiar lo que muestra en Velocidad
let pokeDefensaEspecial = (url) => {
    const infoDefensaEspecial = document.getElementById("pokemonDefEspecial");
    infoDefensaEspecial.innerHTML = url;
}

// fución para mostrar la suma de todas las caracteristicas del pokemon
let pokeSumaTotal = (url) => {
    const infoSumaTotal = document.getElementById("total");
    infoSumaTotal.innerHTML = url;
}