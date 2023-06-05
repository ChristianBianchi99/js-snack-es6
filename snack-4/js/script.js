// CREAZIONE ARRAY
let teams= [
    {
        name            : "Juventus",
        score           : 0,
        sufferedFouls   : 0
    },
    {
        name            : "Milan",
        score           : 0,
        sufferedFouls   : 0
    },
    {
        name            : "Inter",
        score           : 0,
        sufferedFouls   : 0
    },
    {
        name            : "Napoli",
        score           : 0,
        sufferedFouls   : 0
    },
    {
        name            : "Roma",
        score           : 0,
        sufferedFouls   : 0
    },
]

// CREAZIONE FUNZIONE PER I NUMERI RANDOM
function numbersGenerator(max, min){
    let number = Math.floor(Math.random() * (max - min + 1) + min)
    return number
}

// CREAZIONE CICLO PER L'IMPOSTAZIONE DEI VALORI
teams.forEach((team) => {
    team.score= numbersGenerator(100, 50);
    team.sufferedFouls= numbersGenerator(500, 200);
})

let teamsFouls= teams.map((team) => {
    let {name, sufferedFouls}= team;

    let obj= {
        name,
        sufferedFouls
    }
    return obj
})
console.log(teams)
console.log(teamsFouls)

