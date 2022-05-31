color=""

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("colour").value
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mousex,mousey,50,0,2*Math.PI);
ctx.stroke();
}
function clear_canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}










