var landing = document.querySelector(".landing");
var circle = document.querySelector(".circle");
var secs = document.querySelectorAll(".sec");
var h1s = document.querySelectorAll(".first h1");
var models = document.querySelectorAll(".end .itemno h1");
var colors = document.querySelectorAll(".end .colors h1");
var colos = document.querySelectorAll(".mid .right .colo");
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var img4 = document.querySelector(".img4")
var img5 = document.querySelector(".img5")
var img6 = document.querySelector(".img6")
var img7 = document.querySelector(".img7")
var img8 = document.querySelector(".img8")
var img9 = document.querySelector(".img9")
var trek = document.querySelector(".landing .mid .mid h1")

gsap.from(trek,{
    opacity:0,
    duration:2,
    ease:"power1.in"
})


function greyout() {
    gsap.to(secs, {
        opacity: 0
    });
    gsap.to(h1s, {
        opacity: 0.5
    });
    gsap.to(models, {
        opacity: 0
    });
    gsap.to(colors, {
        opacity: 0
    });
    gsap.to(colos, {
        display: "none",
        opacity: 0
    });
}

greyout();

var rotate = 270;
var id = 0;
var inter;
var customColorTimeout;

function defaultclr() {
    landing.style.backgroundColor = "black";
    landing.style.color = "white";
}

function startInterval() {
    inter = setInterval(function () {
        if (id < secs.length) {
            rotate -= 45;
            id++;
            circle.style.transform = `rotate(${rotate}deg)`;
            greyout();
            gsap.to(secs[id - 1], {
                opacity: 1,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(h1s[id - 1], {
                opacity: 1,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(models[id - 1], {
                opacity: 1,
                y: -10,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(colors[id - 1], {
                opacity: 1,
                y: -10,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(colos[id - 1], {
                opacity: 1,
                display: "initial",
                duration: .5,
                ease: "power1.in"
            });
        } else {
            id = 0;
        }
    }, 3000);
}

startInterval();

function changeColor(color) {
    landing.style.backgroundColor = color;
    landing.style.color = "black";
    clearInterval(inter);
    clearTimeout(customColorTimeout);
    customColorTimeout = setTimeout(function () {
        defaultclr();
        startInterval();
    }, 2000);
}

var cl_sl5 = document.querySelectorAll(".sl5 .clbix");

cl_sl5.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#CCCCCC");
            img1.classList.add("hidden")
            img2.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_ealr = document.querySelectorAll(".ealr .clbix");

cl_ealr.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#CCCCCC");
            img3.classList.add("hidden")
            img4.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_fxs = document.querySelectorAll(".fxs .clbix");

cl_fxs.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#999999");
            img5.classList.add("hidden")
            img6.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_marlin = document.querySelectorAll(".marlin .clbix");

cl_marlin.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "0") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#EAF7FF");
            img7.classList.add("hidden")
            img8.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
        else if (dets.target.id === "3") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#84ABAB");
            img8.classList.add("hidden")
            img9.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});
