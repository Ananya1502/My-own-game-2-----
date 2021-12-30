var bg ,  bgImg;
var boy , boyImg;
var advancedSpell, defenceSpell, hydroSpell, metalSpell, moonSpell, solarFlareSpell, windSpell, spellsGroup
var fire , fireSword , guillotine , handcuffs , snake;
var invisibleGround
//var gameState = PLAY;

function preload(){
  bgImg = loadImage("assets/magicforest.png");
  
  boyImg = loadAnimation(
    "boy/boyrunning-0.png",
    "boy/boyrunning-1.png",
    "boy/boyrunning-2.png",
    "boy/boyrunning-3.png",
    "boy/boyrunning-4.png",
    "boy/boyrunning-5.png",
    "boy/boyrunning-6.png",
    "boy/boyrunning-7.png",
    "boy/boyrunning-8.png",
    "boy/boyrunning-9.png",
    "boy/boyrunning-10.png");

  advancedSpell = loadImage("assets/spells/advanced spell.png");
  defenceSpell = loadImage("assets/spells/defencespell.png");
  hydroSpell = loadImage("assets/spells/hydro spell.png");
  metalSpell = loadImage("assets/spells/metalspell.png");
  moonSpell = loadImage("assets/spells/moonspell.png") ;
  solarFlareSpell = loadImage("assets/spells/solarflarespell.png");
  windSpell = loadImage("assets/spells/wind.png");

  //obstacles : fire , fireSword , guillotine , handcuffs , snake;
  fire = loadImage("assets/obstacles/fire.png");
  fireSword = loadImage("assets/obstacles/untitled.png");
  guillotine = loadImage("assets/obstacles/guillotine.png");
  snake = loadImage("assets/obstacles/snake.png");
  handcuffs = loadImage("assets/obstacles/handcuffs.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*bg = createSprite(windowWidth/2, windowHeight/2, windowWidth , windowHeight);
  bg.addImage(bgImg);
  bg.scale = 2.6*/

  boy = createSprite(width/2-700, height/2+250, 70, 200);
  boy.shapeColor = "red";
  boy.setCollider("circle", 0, 0 ,100);
  //boy.addAnimation("running", boyImg);
  boy.scale = 0.5
  
  //boy.setCollider("circle", 0, 0 ,40);

  invisibleGround = createSprite(width/2 , height/2+250, width , 40);
  //invisibleGround.visible = false;

  spellsGroup = createGroup();
  

}

function draw() {
  background(bgImg);

  if(keyDown("space")){
    boy.velocityY = -10
    
  }
  boy.velocityY = boy.velocityY+1;


  drawSprites();
  spawnSpells();
  spawnObstacles();

  boy.collide(invisibleGround);
}

function spawnSpells(){
  if(frameCount % 100 === 0){
    var spell = createSprite(width , height/2+200 , 20, 40);
    spell.velocityX = -6;
    spell.scale = 0.9
    spell.lifetime = -2;
    spellsGroup.add(spell);
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1 : spell.addImage("spell1", advancedSpell);
        break;
      case 2 : spell.addImage("spell2" , defenceSpell);
        break;
      case 3 : spell.addImage("spell3", hydroSpell);
        break;
      case 4 : spell.addImage("spell4", metalSpell);
        break;
      case 5 : spell.addImage("spell5", moonSpell);
        break;
      case 6 : spell.addImage("spell6", solarFlareSpell);
        break;
      case 7 : spell.addImage("spell7", windSpell);
        break;
    }
    
  }
}

function spawnObstacles(){
  if(frameCount % 200 === 0){
    var obstacles = createSprite(width , height/2+200 , 20, 40);
    obstacles.velocityX = -6;
    obstacles.scale = 0.6
    obstacles.lifetime = -2;
    var rand1 = Math.round(random(1,5));
      switch(rand1){
        case 1 : obstacles.addImage("obstacle1" , fire);
          break;
        case 2 : obstacles.addImage("obstacle2", guillotine);
          break;
        case 3 : obstacles.addImage("obstacle3", handcuffs);
          break;
        case 4 : obstacles.addImage("obstacle4", fireSword);
          break;
        case 5 : obstacles.addImage("obstacle5", snake);
          break;
      }
  }
}


 