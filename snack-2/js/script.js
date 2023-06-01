// CREAZIONE ARRAY STUDENTI
const student= [
    {
        Id      : 213,
        name    : "Marco della Rovere",
        Grades  : 78
    },
    {
        Id      : 110,
        name    : "Paola Cortellessa",
        Grades  : 96
    },
    {
        Id      : 250,
        name    : "Andrea Mantegna",
        Grades  : 48
    },
    {
        Id      : 145,
        name    : "Gaia Borromini",
        Grades  : 74
    },
    {
        Id      : 196,
        name    : "Luigi Grimaldello",
        Grades  : 68
    },
    {
        Id      : 102,
        name    : "Piero della Francesca",
        Grades  : 50
    },
    {
        Id      : 120,
        name    : "Francesca da Polenta",
        Grades  : 84
    },
]
console.log(student);

// LISTA CON I SOLI NOMI DEGLI STUDENTI
const studentNames= student.map((item) => {
    let name= (item.name).toUpperCase();
    console.log(name)
})

// LISTA CON GLI STUDENTI AVENTI UN VOTO COMPLESSIVO SUPERIORE A 70
const studentOver70Grades= student.filter((item) => {
    if (item.Grades > 70){
        return true
    }
    return false
})
console.log(studentOver70Grades);

// LISTA CON GLI STUDENTI AVENTI UN VOTO COMPLESSIVO SUPERIORE A 70 E UN ID SUPERIORE A 120
const studentOver120Id= student.filter((item) => {
    if (item.Grades > 70 & item.Id > 120){
        return true
    }
    return false
})
console.log(studentOver120Id);