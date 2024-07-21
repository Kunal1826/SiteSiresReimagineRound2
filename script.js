tl1.to("#child1 .child", { scale: 1.5, duration: 1 })

.to("#child1 .child", { scale: 1, duration: 1 });

tl2.to("#child2 .child", { scale: 1.5, duration: 1 })

.to("#child2 .child", { scale: 1, duration: 1 });

tl3.to("#child3 .child", { scale: 1.5, duration: 1 })

.to("#child3 .child", { scale: 1, duration: 1 });

tl4.to("#child4 .child", { scale: 1.5, duration: 1 })
.to("#child4 .child", { scale: 1, duration: 1 });


document.getElementById('child1').addEventListener('mouseenter', function () {
tl1.restart();
});

document.getElementById('child2').addEventListener('mouseenter', function () {
tl2.restart();
});

document.getElementById('child3').addEventListener('mouseenter', function () {
tl3.restart();
});

document.getElementById('child4').addEventListener('mouseenter', function () {
tl4.restart();
});