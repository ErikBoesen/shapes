const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'white';
ctx.lineWidth = 3;

currentPath = null;
paths = [];


function draw() {
}
setInterval(function() {
    draw();
}, 10);
