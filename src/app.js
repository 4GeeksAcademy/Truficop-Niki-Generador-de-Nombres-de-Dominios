/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extencions = [".com", ".net", ".us", ".io"];
  let allResults = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extencions) {
          let result = p + a + n + e;
          allResults.push(result);
        }
      }
    }
  }
  console.log(allResults);
  return allResults;
};
