//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;



function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}


function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
      xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
  } 
  if (yBolinha + raio > height ||
      yBolinha - raio <0){
        velocidadeYBolinha *= -1;
  }
}

//função "collideRectCircle" importada da biblioteca 
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, 
  comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu){
    velocidadeXBolinha *= -1;
    somRaquetada.play();
  }
}

