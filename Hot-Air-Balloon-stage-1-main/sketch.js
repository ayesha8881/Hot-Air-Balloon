var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var database,height

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
database=firebase.database()
createCanvas(1000,700);
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
var ballonheight= database.ref("balloon/height")
ballonheight.on("value",show,readheight)



}

function draw() {
  
  background(bgImg);
        
          //making the hot air balloon jump
          
          if(keyDown(LEFT_ARROW)){
            balloon.x=balloon.x-10
            
          }
          else
          if(keyDown(RIGHT_ARROW)){
            balloon.x=balloon.x+10
            
          }
          else
          if(keyDown(UP_ARROW)){
            balloon.y=balloon.y-10
            balloon.scale=balloon.scale-0.02
          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;
          }
          if(keyDown(DOWN_ARROW)){
            balloon.y=balloon.y+10
            balloon.scale=balloon.scale+0.02
          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;
          }
        drawSprites();
        
}
function readheight(data){
height=data.val()
balloon.x=height.x
balloon.y=height.y
}
function show(){
  console.log("error")
}
function updateHeight(x,y){
  database.ref("ballon/height").set({
    "x":height.x+x,
    "y":height.y+y
  })
}