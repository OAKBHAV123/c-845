
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var rover_hieght=90;
var rover_width=100;

var rover_x=10;
var rover_y=10;

nasa_mars_array=["1.jpg","2.jpg","mars.jpg"]

var rambom_number=Math.floor(Math.random() * 3)
console.log(rambom_number);

var background_imgae=nasa_mars_array[rambom_number];
console.log(background_imgae);
var rover_imgae="rover.png";

function add(){
     bg_img=new Image ();
    bg_img.onload=upload_background;
bg_img.src=background_imgae;

rover_img=new Image();
rover_img.onload=upload_rover;
rover_img.src=rover_imgae;
}

function upload_background(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_hieght);
}
window.addEventListener("keydown",My_keydown);
function My_keydown(e){
    var keypressed=e.keyCode
    console.log(keypressed);
    if(keypressed == "37")
    {
        Left();
        console.log("left_keypressed")
    }

    if(keypressed == "38")
    {
        up();
        console.log("up_keypressed")
    }

    if(keypressed == "39")
    {
        right();
        console.log("right_keypressed")
    }   
    if(keypressed == "40")
    {
        down();
        console.log("down_keypressed")
    }
}

function up(){
    if (rover_y>0){
rover_y=rover_y-10;
console.log("when up keypressed x= "+rover_x+" y="+ rover_y);
upload_background();
upload_rover();

    }
    
}

function down(){
    if (rover_y<=510){
rover_y=rover_y+10;
console.log("when down keypressed x= "+rover_x+" y="+ rover_y);
upload_background();
upload_rover();

    }
    
}

function Left(){
    if (rover_x>0){
rover_x=rover_x-10;
console.log("when left keypressed x= "+rover_x+" y="+ rover_y);
upload_background();
upload_rover();

    }
    
}

function right(){
    if (rover_x<=700){
rover_x=rover_x+10;
console.log("when right keypressed x= "+rover_x+" y="+ rover_y);
upload_background();
upload_rover();

    }
    
}
