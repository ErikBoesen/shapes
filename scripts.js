const canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const POINT_RADIUS = 3;
ctx.strokeStyle = 'white';
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
function color() {
    let color = '#';
    for (let i = 0; i < 6; i++) color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
    return color;
}
function drawPath(path) {
    if (path.length > 0) {
        ctx.fillStyle = color();
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (point of path) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.closePath();
        ctx.fill();
        for (point of path) {
            ctx.moveTo(point.x, point.y);
            ctx.arc(point.x, point.y, POINT_RADIUS, 0, 2*Math.PI);
        }
        ctx.stroke();
    }
}
function draw() {
    for (path of paths) drawPath(path);
    drawPath(currentPath);
}
setInterval(draw, 10);
