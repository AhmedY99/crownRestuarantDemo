/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navLog").style.top = "0";

    } else {
        document.getElementById("navLog").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    var x = document.documentElement.scrollTop;
    var y = document.body.scrollTop;
    if (y > 200 || x > 200) {
        document.getElementById("icon8").style.right = "0";
        document.getElementById("icon8").style.position = "fixed";
    } else {
        document.getElementById("icon8").style.right = "-100px";

    }
}
// click buttons to display the store content
function myFunction() {
    var x = document.getElementById("content-holder");
    var y = document.getElementById("storeContent");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }

}

function display() {
    var x = document.getElementById("storeContent");
    var y = document.getElementById("content-holder");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }

}


function changeIcon() {
    const x = document.getElementById("Navicon");
    var y = document.getElementById("navUl");

    if (x.classList.contains("fa-bars")) {
        x.classList.replace("fa-bars", "fa-times");
        y.style.display = "block";
    } else {
        x.classList.replace("fa-times", "fa-bars");
        y.style = "none";
    }

}

function openWindow() {
    const icon = document.getElementById("iconCont");
    if (icon.classList.contains("fa-user")) {
        window.open("login.html");
    }
}

/*================Slides============*/

var indexValue = 1;
showContent(indexValue);

function currentSlide(e) {
    showContent(indexValue = e);
}

function plusSlides(e) {
    showContent(indexValue += e);
}

function showContent(e) {
    var i;
    let content = document.querySelectorAll(".slides");

    let sliders = document.querySelectorAll(".dot span");

    if (e > content.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = content.length;
    }
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "rgb(228, 86, 86)";
    }
    content[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "rgb(204, 209, 246)";
}