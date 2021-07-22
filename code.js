var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia
var Sofia=createSprite(25,25,25,25);
    Sofia.shapeColor="whire";

//creating the maze walls (wall1 - wall2)
  var wall1 =createSprite(95,125,25,155);
  var wall2 =createSprite(60,125,50,25);
  var wall3 =createSprite(47,230,25,200);
  var wall4 =createSprite(120,317,125,25);
  var wall5 =createSprite(150,260,25,100);
  var wall6 =createSprite(230,250,25,300);
  var wall7 =createSprite(190,150,80,25);
  var wall8 =createSprite(135,60,100,25);
  var wall9 =createSprite(172,25,25,50);
  var wall10 =createSprite(299,12.5,230,25);
  var wall11 =createSprite(315,0,25,400);
  var wall12 =createSprite(315,400,25,230);
  wall1.shapeColor=wall2.shapeColor=wall3.shapeColor=
  wall4.shapeColor=wall5.shapeColor=wall6.shapeColor=
  wall7.shapeColor=wall8.shapeColor=wall9.shapeColor=
  wall10.shapeColor=wall11.shapeColor=wall12.shapeColor
  ="orange";
  

//create cup
var cup=createSprite(375,375,50,50);
    cup.shapeColor="green";
  
function draw() {
 
  background("black");
  
  createEdgeSprites();
  if (Sofia.isTouching(edges)) {
    Sofia.x=25;
    Sofia.y=25;
    Sofia.velocityX=0;
   Sofia.velocityY=0;
 }
  
  if (keyDown(UP_ARROW)) {
   Sofia.velocityX=0;
   Sofia.velocityY=-2;
  }
  if (keyDown(DOWN_ARROW)) {
    Sofia.velocityX=0;
   Sofia.velocityY=+2;
  }
  if (keyDown(RIGHT_ARROW)) {
    Sofia.velocityX=+2;
   Sofia.velocityY=0;
  }
  if (keyDown(LEFT_ARROW)) {
    Sofia.velocityX=-2;
   Sofia.velocityY=0;
  }
  if (keyDown("space")) {
    Sofia.velocityX=0;
   Sofia.velocityY=0;
  }
  if (Sofia.isTouching(wall1)) {
  Sofia.x=20;
  Sofia.y=20;
  Sofia.velocityX=0;
  Sofia.velocityY=0;
   }
   
   if ( Sofia.isTouching(cup))  {
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
  
drawSprites();

}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
