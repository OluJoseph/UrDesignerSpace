var welcome = document.querySelector(".welcome");

var texts = ["Welcome to my portfolio"];

var pos = document.body.scrollTop;
var changeNav = function changeNav() {
    window.pageYOffset > 800 && window.pageYOffset < 1800 ? document.querySelector(".navbar").classList.add("bold") : document.querySelector(".navbar").classList.remove("bold");
};

window.addEventListener("scroll", changeNav);

function disp(texts) {

    var textToDisp = texts[0];
    var j = 0;
    var writeIt = setInterval(function () {
        welcome.innerHTML += textToDisp[j];
        j++;
        if (j >= textToDisp.length) {
            clearInterval(writeIt);
        }
    }, 50);
}

// open google drive document containing CV 
function viewCV() {
    window.open("https://drive.google.com/file/d/1EjvV6WYyXCNVvh9j5gbKTOPbmD6zgast/view?usp=sharing");
}

// underscore animation in homepage
var blink = setInterval(function () {
    document.querySelector(".underscore").classList.toggle("sho");
}, 800);

var seq = setTimeout(disp, 3000, texts);

var menus = document.querySelectorAll(".SkillMenuList li");

// to indicate which is being displayed between web design, UI/UX, and graphic design 
function indicateActive(array) {
    var previous = array[0];
    array[0].classList.add("afterClick");

    var _loop = function _loop(i) {
        array[i].onclick = function () {
            if (array[i] != previous) {
                previous.classList.remove("afterClick");
                array[i].classList.add("afterClick");
                previous = array[i];
            }
        };
    };

    for (var i = 0; i < array.length; i++) {
        _loop(i);
    }
}

indicateActive(menus);