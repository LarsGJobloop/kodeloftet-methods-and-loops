
// De grunnleggendes typene
let myBool = false;
let myNumber = 3234;
let myString = "Foobar"

// En liste med navn
let listOfPersons = [
  "Lars Gunnar",
  "Jack Sparrow",
  "Mother Mary",
  "Clint Eastwood",
  "Bonnie",
  "Clyde",
  "Baloon Girl",
]

// Funksjon for å logge en hilsning til consollen
function greet(name) {
  console.log(`Greeting ${name}`)
}

// Manuelt oppset av en for løkke
console.log("========== Basic For løkke =============")
for (let index = 0; index < listOfPersons.length; index++) {
  console.log(index)
  greet(listOfPersons[index])
};

// Funksjon som genere HTML elementer
console.log("========== Generator function =============")
// #1 Hente et element fra html (DOM) som vi ønsker å sett inn elementene under

const nameList = document.getElementById("person-list")
console.log(nameList)

// #2 Lag en funksjon for å legge til elementer i listen vår
function addNewListItem(content) {
  // #2.1 lage det nye elementet
  const newListItem = document.createElement("li")
  // #2.2 Sette innholdet
  newListItem.textContent = content
  newListItem.className = "people-card"

  // #2.3 Legge til det nye elementet vårt
  nameList.appendChild(newListItem)
}

// #3 For løkken som blir kjørt for hvert element i listen vår
for (let index = 0; index < listOfPersons.length; index++) {
  addNewListItem(listOfPersons[index])
};


// ====================================================
// Her under er alternative løkker som dere vil møte på
// Se på de, men fokuser på den som er vist over
// ====================================================

// Alternativ til basic for løkkker
console.log("========== For..in løkke =============")
for (const index in listOfPersons) {
  const newGreeting = `Hello person with name: ${listOfPersons[index]}!`
  console.log(newGreeting)
}

// Dette er en funksjon uten navn
// Brukes veldig mye i JavaScript for funksjoner som
// kun skal brukes ett sted i programmet vårt
// I JavaScript så blir disse kalt Arrow Functions
// Også Lambda Functions, Anonymous Function, inline function
() => {}

console.log("========== Array.forEach method (function) =============")
// Her bruker en funksjon (metode) som eksister på Array (lister)
// for å gå igjennom hvert element i Arrayet
// Den tar in en funksjon som blir gitt
// et av liste elementene som argument
listOfPersons.forEach(
  (element) => {
    console.log(element)
    greet(element)
  }
);

console.log("========== Array.map method (function) =============")
// Noe tilsvarende forEach metoden (funksjonen), istedenfor å
// gjøre noe for hvert element i en liste så får tilbake en ny
// liste
let listOfGreetings = listOfPersons.map(
  (name) => {
    return `Hello ${name}`
  }
)
console.log(listOfGreetings)