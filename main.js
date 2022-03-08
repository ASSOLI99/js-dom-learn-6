const canvas= document.querySelector("#draw");
const ctx= canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
ctx.strokeStyle = "white";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
let isDown=false;
let lastX=0;
let lastY=0;
let hue=1;
let direction=true;
function draw(e){
    if(isDown===false){return};
    console.log(e);
    ctx.beginPath();
    ctx.strokeStyle =`hsl(${hue},100%,50%)`;
    hue++;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY]=[e.offsetX,e.offsetY];
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth>=60 || ctx.lineWidth<9){
        direction=!direction;
            }
            if(direction){
                ctx.lineWidth++;
            }else{
                ctx.lineWidth--;
            }
        }
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mousedown",function(e){
    isDown=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});
canvas.addEventListener("mouseup",()=>isDown=false);
canvas.addEventListener("mouseout",()=>isDown=false);
canvas.addEventListener("touchstart", function(e){
    isDown=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
    return draw;
});
canvas.addEventListener("touchmove", function(e){
    isDown=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
    return draw;
});
canvas.addEventListener("touchend", function(e){
    isDown=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
    return draw;
});
