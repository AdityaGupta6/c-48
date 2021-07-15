var form1,game1,player1;
var database;
var gamestate=0;
var playerCount,allPlayers
var plant1,plant2,plant3,plant4,plant5;
var zombie1,zombie2,zombie3,zombie4,zombie5;
var plants1,plants2,plants3,plants4
var plants=[]
var bean
var zombieImage
var zombieImage1
var zombieGroup
var zombieGroup1
var zombieGroup2
var zombieGroup3
var coinImg,coin;
var score=0
function preload() {
  bg=loadImage("img/bg.jpeg")
   plant1_img=loadImage("img/plant.png")
  sound=loadSound('img/comming.mp3')
   zombieImage= loadAnimation("img/zombi1.png", "img/zombi2.png", "img/zombi3.png", "img/zombi4.png")
   zombieImage1= loadAnimation("img/zombieblue1.png", "img/zombieblue2.png", "img/zombieblue3.png", "img/zombieblue4.png","img/zombieblue5.png","img/zombieblue6.png")
   zombieImage2= loadAnimation("img/big zombie.png")
   zombieImage3= loadAnimation("img/zombie.png")
  beanImg=loadImage('img/pea.png')
  coinImg=loadImage('img/coin.png')
  zombieGroup=new Group()
  zombieGroup1=new Group()
  zombieGroup2=new Group()
  zombieGroup3=new Group()
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  // createSprite(400, 200, 50, 50);
 database=firebase.database();

 game1=new Game()
 game1.getState();
 game1.start();
}
function draw() {
  background("white"); 
  console.log(playerCount) 
if (playerCount===4) {
  game1.updateState(1)
}
if (gamestate===1) {
  game1.play()
}
}