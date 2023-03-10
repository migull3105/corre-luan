var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

 // Movendo o fundo 
 path = createSprite(200,190,600,20);
 path.addImage(pathImg)   
 path.velocityY = 4
 path.scale = 1.2

 //Criando menino que corre 
 boy = createSprite(200,350);
 boy.addAnimation("correndo",boyImg);
 boy.scale =0.07;

 // Criando Boundary (Limite) esquerdo  
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;

 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;
 //Crie Boundary direito 

}


function draw() {
 background("gray");


 // Menino se movendo no eixo X com o mouse

boy.x = mouseX

 edges= createEdgeSprites();
 boy.collide(edges[3]);
boy.collide(rightBoundary)
boy.collide(leftBoundary)

  //Reiniciar o fundo
if(path.y > 600){
path.y = height/2
}



  drawSprites();

 }




