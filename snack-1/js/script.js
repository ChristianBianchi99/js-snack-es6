// CREO L'ARRAY DEGLI OSPITI
const guest= [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// CREO UN NUOVO ARRAY CON ASSOCIATI I NOMI AL TAVOLO E AL POSTO
const guestPlace= guest.map((item, index) => {
    let object= {
        tavolo    : "Vip",
        ospite    : item,
        posto     : (index + 1)
    }
    return object
})
console.log(guestPlace)