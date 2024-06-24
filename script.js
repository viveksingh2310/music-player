let diva = document.querySelector('.a');
let divb = document.querySelector('.b');
let divc = document.querySelector('.c');
let divd = document.querySelector('.d');
let dive = document.querySelector('.e');
let divf = document.querySelector('.f');
let divg = document.querySelector('.g');
let a = new Audio("crash-28546.mp3");
let b = new Audio("kick-bass-28547.mp3");
let c = new Audio("snare-28545.mp3");
let d = new Audio("tom-1-28537.mp3");
let e = new Audio("tom-2-28541.mp3");
let f = new Audio("tom-3-28542.mp3");
let g = new Audio("tom-4-28543.mp3");
diva.addEventListener('click', function () {
    a.play();
});
divb.addEventListener('click', function () {
    b.play();
});
divc.addEventListener('click', function () {
    c.play();
});
divd.addEventListener('click', function () {
    d.play();
});
dive.addEventListener('click', function () {
    e.play();
});
divf.addEventListener('click', function () {
    f.play();
});
divg.addEventListener('click', function () {
    g.play();
});
// let tile=document.querySelector('.tile');
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            a.play();
            console.log(diva.__proto__);
            break;
        case 'b':b.play();
            break;
        case 'c':c.play();
            break;
        case 'd':d.play();
            break;
        case 'e':e.play();
            break;
        case 'f':f.play();
            break;
        case 'g':g.play();
            break;
    }
})