class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      brd1 = new Brd1(400,460,60,60);
  brd2 = new Brd2(1300,460,60,60);

  sling1 = new Slingshot1({x:400,y:510}, brd1.body)
  sling2 = new Slingshot2({x:1300,y:510}, brd2.body)

  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,650));
  }

  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,600));
  }
  for (var j = 120; j <=350; j=j+40) { 
    block1.push(new Block1(j,550));
  }

  for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,650));
  }

   for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,600));
  }

  for (var j = 1360; j <=1599; j=j+40) { 
    block1.push(new Block1(j,550));
  }

  /*for (var j = 1200; j <=1400; j=j+40) { 
    block1.push(new Block1(j,330));
  }*/

  stand1 = new Stand(230,700,250,10);
  stand2 = new Stand(1470,700,250,10);
  //stand3 = new Stand(880,120,250,10)

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
        //var display_position = 100;
        
        //index of the array
        var index = 0;
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          if (index === player.index){
            mouseDragged();
            mouseReleased();
            keyPressed();
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
     
  
      if(allPlayers.score > 10){
        gameState = 2;
      }
  
      drawSprites();
    }
    end(){
      console.log("Game has ended")
    }
  }
  