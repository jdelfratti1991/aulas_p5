let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let velocidadex = 10;
let velocidadey = 5;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  circle(xbolinha,ybolinha,diametro);
  movimentobolinha();
  verificaborda(); 
}
function movimentobolinha(){
	xbolinha += velocidadex;
	ybolinha += velocidadey;
}
function verificaborda(){
	if(xbolinha > width || xbolinha<0){
		velocidadex*=-1;
	}
  
	if(ybolinha > height || ybolinha<0){
		velocidadey*=-1;
	}
}
