

let welcome = document.querySelector(".welcome");

let texts = ["Welcome to my portfolio"];

let pos = document.body.scrollTop
let changeNav = () => {
    (window.pageYOffset > 800 && window.pageYOffset < 1800) ? document.querySelector(".navbar").classList.add("bold") : 
    document.querySelector(".navbar").classList.remove("bold");
}

window.addEventListener ("scroll", changeNav);

function disp (texts) {
    
    let textToDisp = texts[0];
    let j = 0;
    let writeIt = setInterval(function () {
        welcome.innerHTML += textToDisp[j];
        j++;
        if (j >= textToDisp.length){clearInterval(writeIt)}
    }, 50)
    
}

let blink = setInterval(function () {
    document.querySelector(".underscore").classList.toggle("sho")
}, 800)

let seq = setTimeout (disp, 3000, texts);
