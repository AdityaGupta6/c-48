class Game {
   constructor() {

   }
   getState() {
      var gsr = database.ref("gamestate");
      gsr.on('value', (data) => {
         gamestate = data.val();

      })
   }
   updateState(state) {
      database.ref("/").update({
         gamestate: state
      })

   }
   async start() {
      if (gamestate === 0) {

         player1 = new Player();
         var playerCountRef = await database.ref("playerCount").once("value")
         if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player1.getPlayerCount()
         }
         form1 = new Form()
         form1.display();
      }
      plants1 = createSprite(380, 290);
      plants1.addImage("plant1", plant1_img)
      plants1.scale = 0.3;
      plants2 = createSprite(380, 430);
      plants2.addImage("plant2", plant1_img);
      plants2.scale = 0.3;
      plants3 = createSprite(380, 570);
      plants3.addImage("plant3", plant1_img)
      plants3.scale = 0.3;
      plants4 = createSprite(380, 160);
      plants4.addImage("plant4", plant1_img)
      plants4.scale = 0.3;
      plants = [plants1, plants2, plants3, plants4]
   }
   play() {
      background(bg)
      form1.hide()
      Player.getPlayerInfo();
      var index = 0;
      var x=380
      var y=160

      for (var plr in allPlayers) {
         index = index + 1;
         y=y+130
         plants[index-1].x=x
         plants[index-1].y=y

            if (index === player1.index) {
               camera.position.x = plants[index - 1].x;
               camera.position.y = displayHeight/2;
              
            
         }
            }

            if (frameCount % 200 === 0) {
               zombie1 = createSprite(1377,random(100,600) , 100, 100);
               zombie1.velocityX =  -6;
               zombie1.addAnimation("zombie1",zombieImage);
               sound.play()
               zombie1.lifetime=230;
               zombieGroup.add(zombie1)
               console.log(frameCount)
            }

            if (frameCount %100 === 0) {
               zombie2 = createSprite(1377,random(100,600) , 100, 100);
               zombie2.velocityX =  -6;
               zombie2.addAnimation("zombie2",zombieImage1);
                  sound.play()
               zombie2.lifetime=230;
               zombie2.scale=2;
               zombieGroup1.add(zombie2)
            }
            if (frameCount % 1300 === 0) {
               zombie3 = createSprite(1377,random(100,600) , 100, 100);
               zombie3.velocityX =  -6;
               zombie3.addAnimation("zombie2",zombieImage2);
                  sound.play()
               zombie3.lifetime=230;
               zombie3.scale=1.2;
               zombieGroup2.add(zombie3)
            }
            if (frameCount % 180 === 0) {
               zombie4 = createSprite(1377,random(100,600) , 100, 100);
               zombie4.velocityX =  -10;
               zombie4.addAnimation("zombie4",zombieImage3);
               sound.play()
               zombie4.lifetime=230;
               zombie4.scale=0.7;
               zombieGroup3.add(zombie4)
            }
         
            if(keyCode===32){
               bean=createSprite(plants[index].x, plants[index].y,50,50);
               bean.addImage(beanImg);
               bean.velocityX=5;
               bean.lifetime=300;

            }
            if (bean.isTouching(zombie4)) {
               zombie4.deatroy()
               coin=createSprite(zombie4.x,zombie4.y,50,50)
               coin.addImage(coinImg)
               coin.velocityY=6
               coin.lifetime=130;
               player1.score+=50;
               
            }
            else if( bean.isTouching(zombie3)){
 
                zombie3.deatroy()
                coin=createSprite(zombie3.x,zombie3.y,50,50)
                coin.addImage(coinImg)
                coin.velocityY=6
                coin.lifetime=130;
                player1.score+=50;
            }
           else if( bean.isTouching(zombie2)){
              
              zombie2.deatroy()
              coin=createSprite(zombie2.x,zombie2.y,50,50)
              coin.addImage(coinImg)
              coin.velocityY=6
              coin.lifetime=130;
              player1.score+=50;
            }
            else if( bean.isTouching(zombie1)){
               
               zombie1.deatroy()
               coin=createSprite(zombie1.x,zombie1.y,50,50)
               coin.addImage(coinImg)
               coin.velocityY=6
               coin.lifetime=130;
               player1.score+=50;
            }
            if (zombie1.isTouching(plants[index])||zombie2.isTouching(plants[index])||zombie3.isTouching(plants[index]||zombie4.isTouching(plants[index]))) {
               gamestate=2
            }
            drawSprites()

   }
end(){

}


}