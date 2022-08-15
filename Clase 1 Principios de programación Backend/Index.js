// Desafio Datos y Variables
const nombre = "pepe";
let edad = 25;
const precio = "$"+99.90;
const seriesFavoritas=["Darck","Mr Robot","Castlevania"];

const peliculasFavoritas = {
      nombre_1:"Guerra mundial z",
      añoEstreno_1:2013,
      protagonistas_1:"Brad Pit",
      nombre_2:"El robo del siglo",
      añoEstreno_2:2020,
      protagonistas_2:"Guillermo Franccela",
      nombre_3:"Star wars",
      añoEstreno_3:1995,
      protagonistas_3:"Luck Scariwaquer"
};

console.log("Nombre:");
console.log(nombre);
console.log("Edad:");
console.log(edad);
console.log("Precio:");
console.log(precio);
console.log("Series Favoritas:");
console.log("Peliculas favoritas:");
console.log(seriesFavoritas);
console.log(peliculasFavoritas);

edad= edad+ 1;
console.log(edad);

const addSerie = seriesFavoritas.push('Stranger Things');
console.log(seriesFavoritas);