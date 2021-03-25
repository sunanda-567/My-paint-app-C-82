canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouse_event="empty";
var last_position_of_X , last_position_of_Y;

color="black";
width=10;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e){
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last position of X & Y=");
        console.log("X="+last_position_of_X+"Y="+last_position_of_Y);
        ctx.moveTo(last_position_of_X , last_position_of_Y);

        console.log("current position of X & Y=");
        console.log("X="+current_position_of_mouse_X+"Y="+current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X , current_position_of_mouse_Y)
        ctx.stroke();
    }
    last_position_of_X=current_position_of_mouse_X;
    last_position_of_Y=current_position_of_mouse_Y;

}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";
}
