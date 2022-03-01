const input= document.getElementById("input");
const button=document.getElementById("Submit");
const remove=document.getElementById("remove");


button.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    let listItem = document.getElementsByTagName("ul")[0];
    listItem.textContent=input.value;
    listItem.appendChild(listItem);
    input.value="";
})

remove.addEventListener("click", ()=>{
    let lastItem=document.querySelector("li:last-child");
    let list = document.getElementsByTagName("ul")[0];
    list.removeChild(lastItem);
})