/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "The " + myAdjective + " " + myNoun+ " " + myVerb + " " + "to the store " + myAdverb + "."

    return result;
  }


  console.log (wordBlanks("dog", "big", "ran", "quickly"));
  console.log (wordBlanks("bike", "slow","flew","slowly"));


};
