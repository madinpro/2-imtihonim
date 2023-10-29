var elButton = document.querySelector(".btn");
var elButtonMenu = elButton.querySelector(".menu");
var elButtonExit = elButton.querySelector(".exit");
var Nav = document.querySelector(".nav");


elButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    Nav.classList.toggle("nav__blok")
    
})
