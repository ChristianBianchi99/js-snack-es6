// CREAZIONE ARRAY
let bikes= [
    {
        name    : "Bianchi",
        weight  : 6.8
    },
    {
        name    : "Pinarello",
        weight  : 7.5
    },
    {
        name    : "Colnago",
        weight  : 6.3
    },
    {
        name    : "Cervelo",
        weight  : 7.9
    },
    {
        name    : "Canyon",
        weight  : 6.0
    },
    {
        name    : "Merida",
        weight  : 7.2
    },
]

// DICHIARAZIONE VARIABILE
let lowerWeight= bikes[0];

// CREAZIONE CICLO PER LA COMPARAZIONE
bikes.forEach((bike) => {
    // UTILIZZO DESTRUCTURING
    let {name, weight}= bike;
    //Comparazione pesi
    if(bike.weight < lowerWeight.weight){
        lowerWeight= bike
    }
})

// STAMPA DEL RISULTATO IN CONSOLE
console.log(`Il modello di bici ${lowerWeight.name} è quello col peso minore, equivalente a ${lowerWeight.weight} Kg`)