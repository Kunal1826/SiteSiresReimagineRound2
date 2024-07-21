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


Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
Shery.hoverWithMediaCircle(".nav .middle .cta", {
    images: ["mountain.jpeg", "road.jpg", "gravel.jpeg","city.jpg","helmet.jpg","clothing.jpg"] ,
  });

var tl = gsap.timeline()

tl.from(trek,{
    opacity:0,
    duration:2,
    ease:"power2.in"
})
tl.from(".circle",{
    delay:-.1,
    duration:.5,
    y:"80%",
    ease:"power2.in"
})

tl.from(".nav",{
    opacity:0,
    duration:.5,
    ease:"power1.out"
})

tl.from(".mid .left",{
    opacity:0,
    duration:.5,
    x:-40,
    ease:"power2.in"
})


Shery.imageEffect(".banner1 img",{
    style: 5,
    config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.974667743593509},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})


Shery.imageEffect(".banner2",{
    style: 5,
   config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0822368421052633},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.96,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.11,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}},
    gooey:true
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

var bgvideo = document.querySelector(".info")
var video = document.querySelector(".bgvideo video")
var vidbut = document.querySelector(".bgvideo h3")

vidbut.addEventListener("mouseenter",function(){
    video.style.display= "inherit"
    bgvideo.style.transform = "scale(1) translate(-50%, -50%)"
    
})