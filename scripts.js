const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.fillStyle = 'white';

currentPath = [];
paths = [];

onmousedown = function(e) {
    currentPath.push({
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    });
    if (currentPath.length === 3) {
        paths.push(currentPath);
        currentPath = [];
    }
}

function drawPath(path) {
    if (path.length > 0) {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (point of path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}
function draw() {
    for (path of paths) drawPath(path);
    drawPath(currentPath);
}
setInterval(function() {
    draw();
}, 10);
