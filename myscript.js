////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below
let tag =document.querySelectorAll("p");
let paragraph = tag[1];
console.log(paragraph);

let list = document.querySelectorAll(".list");
console.log(list);

let content = document.querySelectorAll(".list");
let child = content[2];
console.log(child);

let length = list.length;
console.log(length);

///////Class List Exercise: Add "darkMode//////

let heading = document.querySelector("darkMode");
heading.classList.add("black");
