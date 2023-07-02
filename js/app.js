$(document).ready(function(){
    const body = document.querySelector(".body");
    const header = document.querySelector(".header__menu");
    let book = document.getElementById("bookF");
    let closeBtnPopUp = document.querySelector(".btn-close");
    let btnsBook = document.querySelector(".bookBtn");
    const popUp1 = document.querySelector(".popup-win1");
    
    btnsBook.addEventListener("click", function(){
        popUp1.classList.toggle("dn");
    });

    closeBtnPopUp.addEventListener("click", function(){
        popUp1.classList.toggle("dn")
    });

    book.addEventListener("click", function(){
        alert("Вы забронировали столик. (На самом деле это просто макет, поэтому большая часть функционала не работет.)")
    });
});