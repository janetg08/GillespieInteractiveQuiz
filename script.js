/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "script running" in the browser's dev tools console
console.log("script running");

let q1c1 = document.querySelector("#q1c1");
console.log(q1c1);
let q1correct = document.querySelector("#q1c2");
console.log(q1correct);
let q1c3 = document.querySelector("#q1c3");
console.log(q1c3);
let q1c4 = document.querySelector("#q1c4");
console.log(q1c4);

q1c1.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q1c1.innerHTML = `Try Again`;
});
q1correct.addEventListener("click", e => {
  console.log("Nice work!");
  q1correct.innerHTML = `You Got It!`;
});
q1c3.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q1c3.innerHTML = `Try Again`;
});
q1c4.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q1c4.innerHTML = `Try Again`;
});

let q2c1 = document.querySelector("#q2c1");
console.log(q2c1);
let q2c2 = document.querySelector("#q2c2");
console.log(q2c2);
let q2correct = document.querySelector("#q2c3");
console.log(q2correct);
let q2c4 = document.querySelector("#q2c4");
console.log(q2c4);

q2c1.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q2c1.innerHTML = `Try Again`;
});
q2c2.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q2c2.innerHTML = `Try Again`;
});
q2correct.addEventListener("click", e => {
  console.log("Nice Work!");
  q2correct.innerHTML = `That's Right!`;
});
q2c4.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q2c4.innerHTML = `Try Again`;
});

let q3c1 = document.querySelector("#q3c1");
console.log(q3c1);
let q3c2 = document.querySelector("#q3c2");
console.log(q3c2);
let q3c3 = document.querySelector("#q3c3");
console.log(q3c3);
let q3correct = document.querySelector("#q3c4");
console.log(q3correct);

q3c1.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q3c1.innerHTML = `Try Again`;
});
q3c2.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q3c2.innerHTML = `Try Again`;
});
q3c3.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q3c3.innerHTML = `Try Again`;
});
q3correct.addEventListener("click", e => {
  console.log("Nice Work!");
  q3correct.innerHTML = `Nicely Done!`;
});

let q4c1 = document.querySelector("#q4c1");
console.log(q4c1);
let q4correct = document.querySelector("#q4c2");
console.log(q4correct);
let q4c3 = document.querySelector("#q4c3");
console.log(q4c3);
let q4c4 = document.querySelector("#q4c4");
console.log(q4c4);

q4c1.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q4c1.innerHTML = `Try Again`;
});
q4correct.addEventListener("click", e => {
  console.log("Nice work!");
  q4correct.innerHTML = `Yes!`;
});
q4c3.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q4c3.innerHTML = `Try Again`;
});
q4c4.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q4c4.innerHTML = `Try Again`;
});

let q5correct = document.querySelector("#q5c1");
console.log(q5correct);
let q5c2 = document.querySelector("#q5c2");
console.log(q5c2);
let q5c3 = document.querySelector("#q5c3");
console.log(q5c3);
let q5c4 = document.querySelector("#q5c4");
console.log(q5c4);

q5correct.addEventListener("click", e => {
  console.log("Nice work!");
  q5correct.innerHTML = `Sad, but True.`;
});
q5c2.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q5c2.innerHTML = `Try Again`;
});
q5c3.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q5c3.innerHTML = `Try Again`;
});
q5c4.addEventListener("click", e => {
  console.log("That's incorrect, please try again.");
  q5c4.innerHTML = `Try Again`;
});
