/*var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);  

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
*/


var canvas,backgroundImage;
var gameState=0; // 0 --> when players are entering the game, 1--> when game starts , 2 ---> game end
var database,playerCount;
var form,player,game;
var allPlayers;
var distance = 0;
var car1,car2,cars,car1image,car2image
var track 

 function preload()
 {
   car1image=loadImage("car1.jpg")
   car2image=loadImage("car2.jpg")
   trackimage=loadImage("track1.jpg")

 }
function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState(); // set the game State values
  game.start(); // to start the game
}

function draw()
{
  if(playerCount === 2){
    game.update(1); // when two players enter the game, gamestate changes to 1
  }
  if(gameState === 1){
    clear();
    game.play();// game starts when gamestate = 1
      }
      if(gameState === 2){
        game.end();// game ends when gamestate = 2
          }  
}

