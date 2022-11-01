console.log("native js =the message!");

function setup(){
    console.log("p5!");
    createCanvas(600, 600)
    background(255);
}

function draw() {
    // console.log("crash!")
   
   for(let i=0; i < 9; i++){
    ellipse(50 * i,50,50)
   } 

   rect(mouseX,mouseY, 60,60)
}