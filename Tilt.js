

var bigTitle = document.querySelector(".big-title");
var titleTextHead = document.querySelector(".title-text h1");
var homeCont = document.querySelector(".home-container");
var avatar = document.querySelector(".avatar");
var pen = document.querySelector(".pen");

homeCont.addEventListener("mousemove", function (e) {
    var a = -(window.innerWidth / 2 - e.pageX) / 200;
    var n = -(window.innerHeight / 2 - e.pageY) / 120;

    titleTextHead.style.transform = "rotateY(" + a + "deg) rotateX(" + n + "deg) translateX(" + a * 4 + "px)";
    avatar.style.transform = "rotateY(0deg)  rotateX(" + -n + "deg) translateX(" + -a * 2 + "px)";
});