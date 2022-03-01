//dom = document object model
//tree of nodes/elements crated by the browser
//dom is object orientates- each node has its own properties and methods

//top level object = document
//root element=html node
//separates into children nodes

//tree diagram of html is the dom

//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);

console.log(document.domain); //DISPLAYS CERTAIN ELEMENTS FROM THE DOCUMENT


//EVENT LISTENER 
//addEventListener is a method that adds an event to an element

const myHeading = document.getElementById("heading") ; //variable for heading

//myHeading.addEventListener("click", ()=>{
//    myHeading.style.color="red";
//})

myHeading.addEventListener("click",()=>{
    myHeading.style.color="red";
    myHeading.style.backgroundColor="black";
})
