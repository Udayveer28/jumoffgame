var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(700,590,80,50)
surface1.shapeColor="green";
surface2=createSprite(600,590,80,50)
surface2.shapeColor="purple";
surface3=createSprite(500,590,80,50)
surface3.shapeColor="blue";
surface4=createSprite(400,590,80,50)
surface4.shapeColor="yellow";

    //create box sprite and give velocity
box=createSprite(30,50,30,20);
box.shapeColor="white";
box.x=Math.round(random(20,750));
box.velocityY=4

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bouceOff(surface1)){
        box.shapeColor="green"
    }
    if(surface2.isTouching(box) && box.bouceOff(surface2)){
        box.shapeColor="purple"
    }
    if(surface3.isTouching(box) && box.bouceOff(surface3)){
        box.shapeColor="blue"
    }
    if(surface4.isTouching(box) && box.bouceOff(surface4)){
        box.shapeColor="yellow"
    }
    drawSprites();
}
