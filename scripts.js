const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'white';
ctx.lineWidth = 3;

currentPath = null;
paths = [];

onmousedown = function(e) {
    if (currentPath === null) {
        currentPath = [];
    }
    currentPath.push({
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    });
    if (currentPath.length === 2) {
        paths.push(currentPath);
        currentPath = null;
    }
}

function drawPath(path) {
    ctx.beginPath();
    for (point of path) {
        ctx.moveTo(point);
    }
    ctx.closePath();
    ctx.fill();
}
function draw() {
    for (path of paths) drawPath(path);
    drawPath(currentPath);
}
setInterval(function() {
    draw();
}, 10);
