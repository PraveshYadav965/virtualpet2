var dog, happyDog, database, foodS, lastFeds;

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  HappyDogImg=loadImage("images/dogImg1.png")
  milkBottleImg=loadImage("images/Milk.png")
}

function setup() {
	createCanvas(1000, 500);
  
  dog=createSprite(750,300);
  dog.addImage(dogImg);
  dog.scale=0.3;

  database=firebase.database();
  
  foodObj=new Food();
  foodObj.getFoodStock();
  foodObj.getFeedTime();

  feed=createButton("Feed the dog")
  feed.position(400,30)
  feed.mousePressed(ClickFeed);

  addfood=createButton("Add Food")
  addfood.position(500,30)
  addfood.mousePressed(ClickAddFood);

  mILKBOTTLE=createSprite(600,350,80,80)
  mILKBOTTLE.addImage(milkBottleImg);
  mILKBOTTLE.scale=0.15
  mILKBOTTLE.visible=false
}

function draw() {  
background(46, 139, 87);
  drawSprites();
  
  //text("Will get hungry")

  fill(255)
  textSize(15);
  if(lastFeds>=12){
    lastFeds=lastFeds-12 + " PM"
  }
  else if(lastFeds==0){
    lastFeds="12 AM"
  }
  else if(lastFeds>0 && lastFeds<12){
    lastFeds=lastFeds + " AM"
  }
  text("Last Feed : "+lastFeds,250,45)
  
  foodObj.display();

}

function ClickFeed(){
  foodObj.foodStock -= 1;
  foodObj.updateFoodStock(foodObj.foodStock);
  
  dog.addImage(HappyDogImg);
  
  foodObj.updateFeedTime(hour())
  mILKBOTTLE.visible=true
}

function ClickAddFood(){
  foodObj.foodStock += 1;
  foodObj.updateFoodStock(foodObj.foodStock);
}
