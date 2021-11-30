var canvas=document.getElementById("My_Canvas");
var ctx=canvas.getContext("2d");
var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    var mouse_X=e.clientX-canvas.offsetLeft;
    var mouse_Y=e.clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_X, mouse_Y, 40, 0, 2*Math.PI);
ctx.stroke();
}