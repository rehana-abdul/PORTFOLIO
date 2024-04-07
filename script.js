var hamburger= document.querySelector(".hamb");
var navlist= document.querySelector(".nav_list");
var links= document.querySelector(".nav_list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});