var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m19,m20,m21,m22,m23,m24,m25
var bg;
var canvas;


function preload(){

  bg = loadImage("./assets/bg.jpg")
  
  

}

function setup(){
  canvas = createCanvas(800,500)

  m1 = createSprite(31,242,10,400)
  m1.shapeColor = "white"

  m2 = createSprite(328,39,600,10)
  m2.shapeColor = "white"

  m3 = createSprite(470,445,600,10)
  m3.shapeColor = "white"

  m4 = createSprite(770,250,10,400)
  m4.shapeColor = "white"

  m5 = createSprite(156,325,80,10)
  m5.shapeColor = "white"
  
  m6 = createSprite(200,345,10,50)
  m6.shapeColor = "white"

  m7 = createSprite(160,368,90,10)
  m7.shapeColor = "white"

  m8 = createSprite(90,241,110,10)
  m8.shapeColor = "white"

  m9 = createSprite(76,90,100,10)
  m9.shapeColor = "white"

  m10 = createSprite(126,110,10,52)
  m10.shapeColor = "white"

  m11 = createSprite(145,139,50,10)
  m11.shapeColor = "white"

  m12 = createSprite(164,160,10,50)
  m12.shapeColor = "white"

  m13 = createSprite(290,69,10,70)
  m13.shapeColor = "white"

  m14 = createSprite(310,105,50,10)
  m14.shapeColor = "white"

  m15 = createSprite(339,135,10,70)
  m15.shapeColor = "white"

  m16 = createSprite(217,110,10,50)
  m16.shapeColor = "white"

  m17 = createSprite(236,137,50,10)
  m17.shapeColor = "white"

  m18 = createSprite(266,182,10,100)
  m18.shapeColor = "white"
  
  m19 = createSprite(320,226,100,10)
  m19.shapeColor = "white"

  m20 = createSprite(264,358,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(481,80,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(544,415,10,50)
  m20.shapeColor = "white"

  m20 = createSprite(504,390,90,10)
  m20.shapeColor = "white"

  m20 = createSprite(690,399,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(725,271,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(490,120,100,10)
  m20.shapeColor = "white"

  m20 = createSprite(375,225,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(490,236,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(446,233,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(344,358,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(365,315,50,10)
  m20.shapeColor = "white"

  m20 = createSprite(389,335,10,50)
  m20.shapeColor = "white"

  m20 = createSprite(728,116,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(689,152,10,80)
  m20.shapeColor = "white"

  m20 = createSprite(669,189,50,10)
  m20.shapeColor = "white"

  m20 = createSprite(590,345,10,210)
  m20.shapeColor = "white"

  m20 = createSprite(555,236,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"

  m20 = createSprite(300,393,80,10)
  m20.shapeColor = "white"



  

  
}

function draw(){
background(bg)
console.log(mouseX,mouseY)

drawSprites()
}