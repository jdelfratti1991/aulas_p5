let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let velocidadex = 10;
let velocidadey = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(xbolinha,ybolinha,diametro);
  xbolinha += velocidadex;
  if(xbolinha > width || xbolinha<0){
    velocidadex*=-1;
  }
  ybolinha
}
