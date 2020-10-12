let sonic;
let sonici;
let background1;
let backgroundi;
let MENU = 0;
let PLAY = 1;
let BOSS = 2;
let END = 3;
let gameState = MENU;
let sonics,sonics2;
let ground;
let sonico;
let shoot;
let sonicp,sonicp2;
let roboti,roboto; 
let rg;
let blocki;
let robot;
let shoot2;
let block;
let time = 0;
let boss;
let bossi,bosso;
let ground2,groundi;
let shooti,shooto;
let sg;
let sg2;
let play,playi,playo;
let life = 3;
let lifei;
let lifeo;
let lifep;
let life1;
let life2;
let life3;
let reset,reseti,reseto;
let robot3,robotp;
let rg2;
let score = 0;
let kills = 0;
let bo;
let so1;
let so2;

function preload(){
  so1 = loadSound("song1.mp3");
  so2 = loadSound("so2.wav");

  sonici = loadAnimation("sonic1.png","sonic2.png","sonic3.png","sonic4.png");
  sonico = loadAnimation("sonic5.png","sonic6.png","sonic7.png","sonic8.png");
  sonics = loadImage("sonicstan.png");
  sonics2 = loadImage("sonicstan2.png");
  backgroundi = loadImage("background4.png");
  sonicp = loadImage("sonicpun.png");
  sonicp2 = loadImage("sonicpun2.png");
  roboti = loadImage("robot1.png");
  roboto = loadImage("robot2.png");
  blocki = loadImage("block.png");
  bosso = loadAnimation("bossg0.png");
  bossi = loadAnimation("bossg20.png");
  groundi = loadImage("ground2.png");
  shooti = loadAnimation("shoot1.png","shoot2.png");
  shooto = loadAnimation("shoot3.png","shoot4.png");
  playi = loadAnimation("play.png");
  playo = loadAnimation("playh.png");
  lifei = loadImage("lives.png");
  lifeo = loadImage("lives.png");
  lifep = loadImage("lives.png");
  reseti = loadImage("reset10.png");
  reseto = loadImage("reset20.png");
  robotp = loadImage("robotf.png");
  

}

function setup() {
 
  createCanvas(1360,580);
 
  background1 = createSprite(width/5.3,height/2,10,10);
  background1.addImage(backgroundi);
  background1.scale = 6.6;

 // rect(50,camera.position.y - 50,200,50);
  bo = createSprite(0,height/2.8,2,height + 10000);


  sonic = createSprite(width/10 ,height - 250,20,20);
  sonic.addAnimation("standing",sonics2);
  sonic.addAnimation("standing2",sonics);
  sonic.addAnimation("running",sonici);
  sonic.addAnimation("running2",sonico);
  sonic.addAnimation("punch",sonicp);
  sonic.addAnimation("punch2",sonicp2);
  sonic.scale = 2;
  sonic.setCollider("rectangle",0,0,35,45);
  sonic.debug = false;

  ground = createSprite(width/2,height - 65,5000,170);
  ground.visible = false;
  //background1.height = windowHeight;
 // frameRate(100);
    
  block = createSprite(width/10,height - 200,10,10);
  block.addImage(blocki);
  block.scale =3;
  block.setCollider("rectangle",0,0,90,30);
  block.debug = false;
  block.visible = false;
  rg = new Group;
  rg2 = new Group;

  boss = createSprite(width - 100,height/2.5,10,10);
  boss.addAnimation("left",bosso);
  boss.addAnimation("right",bossi);
  boss.scale = 1.5;

  ground2 = createSprite(width/2,width/2,10,10);
  ground2.addImage(groundi);
  ground2.scale = 6.6;
  ground2.y = camera.position.y + 350;

  play = createSprite(width/2,height/2.5,10,10);
  play.addAnimation("light",playi);
  play.addAnimation("dark",playo);
  play.visible = false;
  play.scale = 1.4;

  sg = new Group();
  sg2 = new Group();

  life1 = createSprite(50,camera.position.y - 50,10,10);
  life1.addImage(lifei);
  life1.scale = 0.4;


  life2 = createSprite(life1.x + 75,life1.y,10,10);
  life2.addImage(lifeo);
  life2.scale = 0.4;

  life3 = createSprite(life2.x + 75,life1.y,10,10);
  life3.addImage(lifep);
  life3.scale = 0.4;
  
  reset = createSprite(width/2,height/2.5,10,10);
  reset.addImage("light1",reseti);
  reset.addImage("dark1",reseto);
  reset.visible = false;
  frameRate(10000);
}



function draw() {
  //background("black");
  //let edges = createEdgeSprites();

  if(!so1.isPlaying()){
    so1.play();
  }

  background("black");
  background(backgroundi);
  ground2.x = background1.x;
  camera.position.y = sonic.y - 75;
  life1.y = camera.position.y - 197;
  life2.y = camera.position.y - 197;
  life3.y = camera.position.y - 197;
 
 // console.log(r);
  sonic.collide(bo);
  if(sonic.collide(ground)){
    life -= 1;
    sonic.velocityY = -30;
  }
  // if(sonic.y < 300){
  //   camera.position.y = sonic.y + 250;
    
  // }

  if(gameState === MENU){
    sonic.setCollider("rectangle",0,0,35,45);
    sonic.scale = 2;
   // World.frameCount = 0;
    score = 0;
    kills = 0;
    bo.x = 0;
    bo.y = height/2.8;
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    block.visible = true;
    boss.visible = false;
    play.visible = true;
    play.setCollider("rectangle",0,0,110,35);
    play.debug = false;
    sonic.x = width/10;
    sonic.y = height - 250;
    block.x = width/10;
    background.velocityX = 0;
    life = 3;
    reset.visible = false;
    time = 0;
    if(mouseIsOver(play)){
      play.changeAnimation("dark");
    }else{
      play.changeAnimation("light");
    }


   

    if(mousePressedOver(play)&& play.visible ===true ){
      gameState = PLAY;
    }
  }
  if(keyDown("p")){
    frameRate(10);


  }
  if(keyWentUp("p")){
    frameRate(10000);


  }

  //console.log(time);
if(gameState === END){
  background1.velocityX  = 0;
  sonic.changeAnimation("standing");
  sonic.velocityX = 0;
  sonic.velocityY = 0;
  reset.visible = true;
  rg.setVelocityXEach(0);   
  rg2.setVelocityXEach(0);
  rg.setVelocityYEach(0);
  rg.setLifetimeEach(-1);
  rg2.setLifetimeEach(-1);


  if(mouseIsOver(reset)){
    reset.changeImage("dark1");
  }else{
    reset.changeImage("light1");
  }
  if(mousePressedOver(reset)){
    rg.destroyEach();
    rg2.destroyEach();

    gameState = MENU;

  }
}

  
if(gameState === PLAY){

  play.visible = false;
  block.visible = true;
  boss.visible = false;
  //background1.visible = false;
  //World.frameCount = 0;
 
 // background1.x = camera.position.x;
 // background1.y = camera.position.y;
 if(rg2.isTouching(sonic)){
  life -= 1;
  sonic.velocityY = sonic.velocityY*(-1);


}

  if(life == 3){
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
  } 
  if(life == 2){
    life1.visible = true;
    life2.visible = true;
    life3.visible = false;
  } 
  if(life == 1){
    life1.visible = true;
    life2.visible = false;
    life3.visible = false;
  } 
  if(life == 0){
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    gameState = END;
  }

  so2.setVolume(0.1);

  if(keyDown("W") && sonic.collide(ground) || keyDown("space") && sonic.collide(ground) ){
    sonic.velocityY = -18;
    
  }
  if( keyDown("W") && sonic.collide(rg) || keyDown("space") && sonic.collide(rg)){
    sonic.velocityY = -22;


  }
  if( keyDown("W") && sonic.collide(block) || keyDown("space") && sonic.collide(block)){
    sonic.velocityY = -32;


  }
    
  block.velocityX = background1.velocityX;
  bo.velocityX = background1.velocityX;
    
  
  let select_punch = Math.round(random(1,2));
 // if(select_punch === 2){
    if(keyWentDown("X")){
      sonic.changeAnimation("punch2");
      sonic.scale = 1;
      sonic.setCollider("rectangle",0,0,70,70);
     
      so2.play();
      
    }
    if(keyWentUp("X")){
      sonic.changeAnimation("standing2");
      sonic.scale = 2;
      sonic.setCollider("rectangle",0,0,35,45);
      so2.stop();

      bullets();
    }
//  }
    
if(sg.isTouching(rg2)){
  shoot.destroy();
  robot3.destroy();
  kills += 1;

}
if(sg2.isTouching(rg2)){
  shoot2.destroy();
  robot3.destroy();
  kills += 1;
}
  
 // if(select_punch === 1){
    if(keyWentDown("C")){
      sonic.changeAnimation("punch");
      sonic.scale = 1;
      sonic.setCollider("rectangle",0,0,70,70);
      so2.play();

    
    }

    if(keyWentUp("C")){
      sonic.changeAnimation("standing");
      sonic.scale = 2;
      sonic.setCollider("rectangle",0,0,35,45);
      bullets2();
      so2.stop();


    }
//  }
  
  





  if(keyDown("D")){
    score = score + Math.round(getFrameRate()/60);
    if(sonic.x < 960){
        sonic.velocityX = 10;
        score = score/1;
    }
    if(sonic.x > 960){
      sonic.velocityX = 0;
     
    }

    let select_robot = Math.round(random(1,1));
    let select_robot2 = Math.round(random(1,1));
  if(World.frameCount % 40 == 0){
    if(select_robot == 1){
      robots();
      time = time + 1;
    }

  }
  if(World.frameCount % 150 == 0){
    if(select_robot2 == 1){
      robots2();
    //  time = time + 1;
    }

  }
  rg.setVelocityXEach(-10);
  //rg.setVelocityYEach(rg.VelocityY - 1);
    
   
    if(sonic.x > 960){
      background1.velocityX = -17;
      background.velocityX = -17;
      score = World.frameCount;

      //sonic.velocityX = -3; 
    }
    sonic.changeAnimation("running");
    if(background1.x < 200){
      background1.x = width/2;
      background.x = width/2;

    }

  
  }
  

  

  if(keyWentUp("D")){
    background1.velocityX = 0;
    background.velocityX = 0;
    sonic.velocityX = 0;
    sonic.changeAnimation("standing");
    rg.setVelocityXEach(0);   
    rg2.setVelocityXEach(0);
    rg.setVelocityYEach(0);
    rg.setLifetimeEach(-1);
    rg2.setLifetimeEach(-1);

      // if(background1.x < 200){
      //   background1.x = width/2;
  
      // }
  
    }
    if(keyDown("A")){
      if(sonic.x > 30){
        sonic.velocityX = -10;
    
      }
      if(sonic.x < 30){
        sonic.velocityX = 0;
    
      }
      if(sonic.x < 30){
        background1.velocityX = 17;
      }
      sonic.changeAnimation("running2");
      if(background1.x > 1160){
        background1.x = width/2;
  
      }
    }
    if(keyWentUp("A")){
        background1.velocityX = 0;
        sonic.velocityX = 0;
        sonic.changeAnimation("standing2");

        

      // if(background1.x < 2000){
      //   background1.x = width/2;
      
      //}
      
    }
  }

//   if(time === 75){
//     gameState = BOSS;
//   }
//   boss.velocityY = boss.velocityY + 1;
//   if(gameState === BOSS){
  
//   boss.setCollider("rectangle",0,0,200,220);
//   boss.debug = false;



//   block.visible = true;
//   boss.visible = true;
//   background1.x = width/2;
//   rg.destroyEach();
  
//   if(keyWentDown("Z")){
//     sonic.changeAnimation("punch2");
//     sonic.scale = 1;
//     sonic.setCollider("rectangle",0,0,70,70);
//   }
//   if(keyWentUp("Z")){
//     sonic.changeAnimation("standing2");
//     sonic.scale = 2;
//     sonic.setCollider("rectangle",0,0,35,45);
//     bullets();
//   }
// //  }


// // if(select_punch === 1){
//   if(keyWentDown("X")){
//     sonic.changeAnimation("punch");
//     sonic.scale = 1;
//     sonic.setCollider("rectangle",0,0,70,70);
    
  
//   }

//   if(keyWentUp("X")){
//     sonic.changeAnimation("standing");
//     sonic.scale = 2;
//     sonic.setCollider("rectangle",0,0,35,45);
//     bullets2();

//   }

//   if(keyDown("W") && sonic.collide(ground) || keyDown("space") && sonic.collide(ground) ){
//     sonic.velocityY = -18;
    
//   }
//   if( keyDown("W") && sonic.collide(rg) || keyDown("space") && sonic.collide(rg)){
//     sonic.velocityY = -22;


//   }
//   if( keyDown("W") && sonic.collide(block) || keyDown("space") && sonic.collide(block)){
//     sonic.velocityY = -22;


//   }
    
//   block.velocityX = background1.velocityX;
  
  
  

//   if(keyDown("D")){

//     if(sonic.x < 1360){
//         sonic.velocityX = 10;

//     }
//     if(sonic.x > 1360){
//       sonic.velocityX = 0;

//     }
    


//     // if(sonic.x > 960){
//     //   background1.velocityX = -17;
//     //   //sonic.velocityX = -3; 
//     // }
//     sonic.changeAnimation("running");
//     // if(background1.x < 200){
//     //   background1.x = width/2;

//     // }
//     sonic.collide(boss);
  
//   }
  
//   if(keyWentUp("D")){
//     background1.velocityX = 0;
//     sonic.velocityX = 0;
//     sonic.changeAnimation("standing");
//     rg.setVelocityXEach(0);   
//     rg2.setVelocityXEach(0);
//     rg.setVelocityYEach(0);
//     rg.setLifetimeEach(-1);
//     rg2.setLifetimeEach(-1);
//       // if(background1.x < 200){
//       //   background1.x = width/2;
  
//       // }
  
//     }
//     if(keyDown("A")){
//       if(sonic.x > 50){
//         sonic.velocityX = -10;
    
//       }
//       if(sonic.x < 50){
//         sonic.velocityX = 0;
    
//       }
//       // if(sonic.x < 50){
//       //   background1.velocityX = 17;
//       // }
//       sonic.changeAnimation("running2");
//       // if(background1.x > 1160){
//       //   background1.x = width/2;
  
//       // }
//     }
//     if(keyWentUp("A")){
//         background1.velocityX = 0;
//         sonic.velocityX = 0;
//         sonic.changeAnimation("standing2");

        

//       // if(background1.x < 2000){
//       //   background1.x = width/2;
      
//       //}
      
//     }


// }
    sonic.velocityY = sonic.velocityY + 1;
    sonic.collide(rg);
    sonic.collide(ground);
    sonic.collide(block);
    sonic.collide(boss);
    rg.collide(ground);
    boss.collide(ground);
  drawSprites();
  fill("white");
  textSize(25);
  stroke(255);
  text("score: "+score,30,camera.position.y - 250 );

  fill("white");
  textSize(25);
  stroke(255);
  text("kills: "+kills,30,camera.position.y - 120 );

  
}

function robots(){
 
  let x = Math.round(random(1,2));

  robot = createSprite(width + 25,sonic.y -50+ 50,10,10);
  if(x == 1){
    robot.addImage(roboti);
  }
  if(x == 2){
    robot.addImage(roboto);
  }
  rg.collide(ground);
  robot.scale = 0.7;
  robot.velocityX = -11;
  robot.velocityY = robot.velocityY + 1;;
  robot.lifetime = 170;
  if(robot.y < 40){
    robot.y = height - 200; 
    robot.x = width + 25; 

  }

  
  
  rg.add(robot);
  return true;
}

function bullets (){

  shoot = createSprite(sonic.x,sonic.y,10,10);
  shoot.addAnimation("bu",shooti);
  shoot.scale = 1.4;
  shoot.velocityX = -10;
  shoot.lifetime = 200;
  sg.add(shoot);
  shoot.setCollider("rectangle",0,0,130,60);
  shoot.debug = false;
  return true;

}
function bullets2 (){


   shoot2 = createSprite(sonic.x,sonic.y,10,10);
   shoot2.addAnimation("bu2",shooto);
   shoot2.scale = 1;
   shoot2.velocityX = 10;
   shoot2.lifetime = 200;
   sg2.add(shoot2);
   shoot2.setCollider("rectangle",0,0,160,100);
   shoot2.debug = false;
   return true;x


}

function robots2(){
  robot3 = createSprite(width + 25,sonic.y -50+ 50,10,10);
  robot3.addImage(robotp);
  robot3.scale = 1;
  robot3.lifetime = 200;
  robot3.velocityX = -11;
  //sonic.collide(robot3);

  
  rg2.add(robot3);

}

