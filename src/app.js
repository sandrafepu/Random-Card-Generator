/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  function generateRandomNumber() {
    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let resultOfNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[resultOfNumbers];
  }
  let suit = document.querySelector(".card");
  suit.classList.add(generateRandomSuit());
  function generateRandomSuit() {
    let suits = ["diamond", "heart", "club", "spade"];
    let resultOfSuits = Math.floor(Math.random() * suits.length);
    return suits[resultOfSuits];
  }
};
