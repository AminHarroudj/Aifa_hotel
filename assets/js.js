var menu = document.getElementById("menu-btn")
var list = document.querySelector(".navbar ul")
menu.addEventListener("click", function(){
    list.classList.toggle("show")
})

var reserveBtn = document.getElementById("reserve-button")
var result = document.getElementById("the-result")

reserveBtn.addEventListener("click", function(){
    result.innerHTML = "Thank You For The Reservation , We Will Call You Later To Confirme It"
})