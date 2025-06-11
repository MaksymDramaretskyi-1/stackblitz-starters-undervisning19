console.log('Hello!');

// For loop 
// for (let index = 0; index <= 10; index++ ){
//   console.log(`Teller opp: ${index}`);
// }

// for (let index = 10; index >= 0; index-- ){
//     console.log(`Teller med: ${index}`);
// }

// let count = 10
// for(let i = 1; i <= count; i++){
//   console.log(`${count} x ${i} = ${count * i}`);
// }

// count = 7;
// for(let i = 1; i <= count; i++){
//   console.log(`${count} x ${i} = ${count * i}`);
// }

// const fruitBowl = ["Banana", "Orange", "Pear", "Orange", "Peach"];

// for (let i = 0; i < fruitBowl.length; i++) {
//     console.log(`For loop + ${fruitBowl[i]}`);
// }

// fruitBowl.forEach((fruit) => {
//   console.log(`forEach: ${fruit}`);
//   console.log(fruitBowl);
// });


// const fruitBowMap = fruitBowl.map((fruit) => {
//     return "One" + fruit
// });

// console.log(fruitBowMap);

// HomeWork
// HomeWork
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
  const textInput = document.getElementById("textInput").value; 
  const output = document.getElementById("outputDisplay");
  if (textInput === "") {
   output.textContent = "Feltet kan ikke være tomt!";
   output.classList.add("displayError");
   output.classList.remove("displayInput"); // Fjern styling hvis feltet er tomt
  } else {
   output.textContent = "Du skrev: " + textInput;
   output.classList.add("displayInput"); // Legg til styling hvis input er gyldig
 }
});