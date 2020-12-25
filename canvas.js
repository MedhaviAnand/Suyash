const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth =10;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY)
    ctx.stroke();
    [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
    hue+=0.5;
    if(hue>359) hue=0

    // if(ctx.lineWidth >=100 || ctx.lineWidth <= 50) direction = !direction

    // console.log(ctx.lineWidth , direction)
    // direction ? ctx.lineWidth++ : ctx.lineWidth--  
}

canvas.addEventListener('touchmove', draw)
canvas.addEventListener('touchstart', (e) =>{
    console.log(e.touches[0].clientX)
    isDrawing = true;
    [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY]
})
canvas.addEventListener('touchend', () => isDrawing = false)
canvas.addEventListener('touchcancel', () => isDrawing = false)