//Create variables here
var canvas,database;
var dog,sadDog,happyDog;
var feedDog,addFood;
var foodObj,lastFedTime;


function preload(){
  sadDog= loadImage("images/Dog.png");
  happyDog= loadImage("images/happydog.png")

}

function setup(){
  canvas= createCanvas(1000,400);

  database = firebase.database();
  console.log(database);

  feedDog= createButton("Feed the Dog");
  feedDog.position(400,50);

  addFood= createButton("Add Foods");
  addFood.position(500,50);

  dog =createSprite(700,200,100,100);
  dog.addImage(sadDog);
  dog.scale=0.5;

  foodObj= new Food();
  console.log(foodObj)
  foodObj.readFoodStock();
  
  foodObj.lastFeed=foodObj.getLastFedTime();
  console.log(foodObj.lastFeed)

  feedDog.mousePressed(function(){
    console.log("inside")
    foodObj.deductFood();
    dog.addImage(happyDog);
  });

  addFood.mousePressed(function(){
    if(foodObj.foodStock<20){
    foodObj.addFoods();
    }
  })



}

function draw(){
  background(46,139,87);
  
  // stroke("white")
  // text("LastFed: "+foodObj.lastFeed,270,65)
  

  fill(255,255,254);
  textSize(15);
  if(foodObj.lastFeed>=12){
    text("Last Feed : "+ foodObj.lastFeed%12 + " PM",270,65);
   }else if(foodObj.lastFeed==0){
     text("Last Feed : 12 AM",270,65);
   }else{
     text("Last Feed : "+ foodObj.lastFeed + " AM", 270,65);
   }
  
  stroke("red");
  
  text(mouseX+","+mouseY,mouseX,mouseY)

  foodObj.display();
  
  drawSprites();

}

