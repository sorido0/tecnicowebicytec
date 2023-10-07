// url referencia a la Api
// const url = 'https://rickandmortyapi.com/api/character';

// Varia con contiene una diracion de APi
const url2 = 'https://hp-api.onrender.com/api/characters?house=Gryffindor?name=Harry'


// fetch para consumir la api
const resp = fetch(url2)
    .then(resp => resp.json())
    .then(data => { return data })
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'));


const getPersonajes = async () => {

    const resultadoPersonajes = await resp;
    const personajes = await resultadoPersonajes.map(
        (personajes) => {
            return {
                id: personajes.id,
                nombre: personajes.name,
                casa: personajes.house,
                Image: personajes.image,
                especie: personajes.species
            }
        }
    )

    const personajeFotos = personajes.filter(peronaje => peronaje.imagen !== "");
    console.log(await personajeFotos)
    return personajeFotos;
}

const dataPersonaje = getPersonajes()

async function mostraPersonajes (data) {

    // Mostrar los personajes en el HTML
    const personajes = await data;

    const main = document.querySelector('main');
    let html = "";
    personajes.map((personaje) => {
        html += `
        <div>
            <div>
                <img src=${personaje.Image} alt=${personaje.nombre}>
            </div>
            <article>
                <ul>
                    <li> ${personaje.nombre} </li>
                    <li> ${personaje.casa} </li>
                    <li> ${personaje.especie} </li>
                </ul>
            </article>
        </div>
        `;
    });
    main.innerHTML = html;
}

mostraPersonajes(dataPersonaje);


// var nombre = prompt("Cual es tu nombre");



// alert("sorido0")
// console.log("sorido0")