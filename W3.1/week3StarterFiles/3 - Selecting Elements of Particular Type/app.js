const list = document.getElementsByTagName("li");
const notOrange = document.getElementsByClassName("not-orange");

for (let i = 0; i< notOrange.length; i++){
    notOrange[i].style.color = "red";
}



for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
    
}

// const list = document.getElementsByTagName("li");

// for (let i = 0; i<list.length; i++){
//   list[i].style.color = "red"
// }