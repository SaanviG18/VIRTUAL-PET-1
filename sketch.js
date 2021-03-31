var dogIm, happyDogIm, dog, database, foodS, foodStock

function preload()
{
	dogIm = loadImage("Dog.png");
  happyDogIm = loadImage("Dog2.png")
}

function setup() {
	createCanvas(500, 500);
  database= firebase.database();
  dog= createSprite(50,50,50,50)
  dog.addImage(dogIm);
  foodStock= databse.ref('Food');
  foodStock.on("value, readStock")
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogIm);
}
  drawSprites();

  text(foodStock, 400,100);
  text("Note: Press the Up Arrow Key to feed your dog!", 100,100);

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
})
}
}
