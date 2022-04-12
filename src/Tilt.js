

const bigTitle = document.querySelector(".big-title");
const titleTextHead = document.querySelector(".title-text h1");
const homeCont = document.querySelector(".home-container");
const avatar = document.querySelector(".avatar");
const pen = document.querySelector(".pen");

homeCont.addEventListener("mousemove", (e) => {
    var a = -(window.innerWidth/2 - e.pageX) / 200;
    var n = -(window.innerHeight/2 - e.pageY) / 120;

    titleTextHead.style.transform = `rotateY(${a}deg) rotateX(${n}deg) translateX(${a * 4}px)`;
    avatar.style.transform = `rotateY(0deg)  rotateX(${-n}deg) translateX(${-a * 2}px)`;
    pen.style.transform = `rotateY(0deg)  rotateX(${-n}deg) translateX(${-a * 2}px)`;
})