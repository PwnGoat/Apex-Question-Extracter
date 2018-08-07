// ==UserScript==
// @name         Strip Qustion
// @namespace    http://tampermonkey.net/
// @version      0.0.5
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

function refreshData()
{
   var x = 15;
    // 5 Seconds
    // Do your thing here


    (function() {
    'use strict';

var htmlString= "Search Begin";
var body = document.body;
var pageContent = body.textContent || body.innerText;
var questionText = document.getElementById("question").innerText;
var questionText2 = document.getElementById("question").innerText;
var extracter = questionText;


//Displays
// console.log(stripHtml(htmlString));
console.log(questionText)
console.log(pageContent);
//alert(questionText);
// var extractedQuestion = prompt("This Is the Question We were able to extract", questionText);

         var x = document.getElementsByClassName("instructions");
         x[0].innerHTML = "*** Auto Answer Function Still In Development... Refer To New Tab ***";

     /* Selects all element with ID parent */
var parent = document.getElementById("question");
/* Selects all childs of parent having <span> as the element */
var child=parent.querySelectorAll("p");
/* Changes Background Color of First <span> element to red */
child[0].style.backgroundColor="green";
/* Changes Background Color of Second <span> element to green */
child[1].style.backgroundColor="blue";

var Beta = document.getElementById("question");
var childnew = Beta.querySelectorAll("p");
childnew[1].style.backgroundColor="orange";
var Real = childnew[1].innerHTML;
console.log(Real);
/////////////////////////////////////////////////////////////////////////
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
wait(1500);
var replaced = Real.split(' ').join('+');
console.log(replaced);
prompt("Allow Pop Ups Or Copy And Paste Into Google :) ", Real);
window.open('https://www.google.com/search?q='+ Real, '_blank');
/////////////////////////////////////////////////////////////////////////
})();


    setTimeout(refreshData, x*15000);
}

refreshData(); // execute function

