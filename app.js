var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


var colorArray = [
  "#F2385A",
  "#F5A503",
  "#E9F1DF",
  "#4AD9D9",
  "#36B1BF",
]; 

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);


var player = {
  x : 650,
  y : 700,
  dx : 5,
  dy : 5,
  height : 100,
  width : 100
}


function Rectangles (x, y, height, width) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


  this.draw = function() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.height, this.width);
 }
}


var rectArray = []

var random =  Math.floor(Math.random()* 150 + 50);

for (var i = 0; i < 1; i++) {
  rectArray.push(new Rectangles(Math.random() * window.innerWidth, 0, random, random))
}


function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < rectArray.length; i++) {
    rectArray[i].draw();
    rectArray[i].y++;

  if (rectArray[i].x < player.x + player.width &&
      rectArray[i].width + rectArray[i].x > player.x &&
      rectArray[i].y < player.y + player.height &&
      rectArray[i].height + rectArray[i].y > player.y) {
          console.log('colissiowei')
          debugger
        }
  }

  c.fillStyle = "rgba(255, 0, 0, 0.5)"
  c.fillRect(player.x, player.y, player.height, player.width);

  if(keyState[37] || keyState[65]) {
    //console.log('left')
    if(player.x > 6) {
      player.x -= player.dx; 
    }
   
  }else if(keyState[39] || keyState[68]) {
    //console.log('right')
    if (player.x + player.width < window.innerWidth - 6) {
      player.x += player.dx 
    }

  }else if(keyState[38] || keyState[87]) {
    //console.log('up')
    if (player.y > 6) {
      player.y -= player.dy
    }
    
  }else if(keyState[40] || keyState[83]) {
    //console.log('down')
    if (player.y + player.height < window.innerHeight - 6) {
     player.y += player.dy 
    }
    
  }
  
}
animate();

