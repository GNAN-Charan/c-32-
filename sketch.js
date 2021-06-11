const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, hour;

function preload() 
{

}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()
}

function draw()
{
    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0)
    {
        var ampm = " AM";
    }
    else 
    {
        var ampm = " PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}

async function getBackgroundImg()
{
    var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var dataJson = await data.json()
    var dateTime = dataJson.datetime
    var image
    hour = dateTime.slice(11,13)
    if(hour <= 8 && hour >= 6)
    {
        var image = "sunrise1.png";
    }
    else if(hour <= 10 && hour >= 8)
    {
        var image = "sunrise2.png";
    }
    else if(hour <= 12 && hour >= 10)
    {
        var image = "sunrise4.png";
    }
    else if(hour <= 14 && hour >= 12)
    {
        var image = "sunrise5.png";
    }
    else if(hour <= 16 && hour >= 14)
    {
        var image = "sunset7.png";
    }
    else if(hour <= 18 && hour >= 16)
    {
        var image = "sunset10.png";
    }
    else if(hour <= 20 && hour >= 18)
    {
        var image = "sunset11.png";
    }
    else 
    {
        var image = "sunset12.png";
    }
    console.log(image)
    backgroundImg = loadImage(image);
    console.log(backgroundImg)
    console.log(data)
    console.log(dataJson)
    console.log(dateTime)
    console.log(hour)
}
