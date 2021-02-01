var canvas;
var music;
var Ysurface,Gsurface,Rsurface,Bsurface;
var BOX;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    Ysurface = createSprite(690,500,200,20);
    Gsurface = createSprite(480,500,200,20);
    Rsurface = createSprite(270,500,200,20);
    Bsurface = createSprite(60,500,200,20);
    Rsurface.shapeColor = "red";
    Ysurface.shapeColor = "yellow";
    Bsurface.shapeColor = "blue";
    Gsurface.shapeColor = "green";
    //create box sprite and give velocity
    BOX = createSprite(random(20,750),50,50,50);
    BOX.velocityY = 5;
    BOX.shapeColor = "white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    if(Ysurface.isTouching(BOX)){
        BOX.velocityY = 0;
        BOX.shapeColor = "yellow";
    }
    if(Gsurface.isTouching(BOX)){
        BOX.velocityY = 0;
        BOX.shapeColor = "green";
        BOX.restitution = 0.8;
    }
    if(Rsurface.isTouching(BOX)){
        BOX.velocityY = 0;
        BOX.shapeColor = "red";
    }
    if(Bsurface.isTouching(BOX)){
        BOX.velocityY = 0;
        BOX.shapeColor = "blue";
        BOX.bounceOff(Bsurface);
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
