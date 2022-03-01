const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.querySelector('#remove');
const listItems = document.getElementsByTagName('li');

for (let listItem of listItems){
    listItem.addEventListner("mouseover",()=>{
        listItem.textContent=listItem.textContent.toUpperCase();
    })
    listItem.addEventListener("mouseout",()=>{
        listItem.textContent=listItem.textContent.toLowerCase();
    })