//variáveis das raquetes
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//variável para verificação de colisão das raquetes
let colidiu = false;


function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}


function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;  
  }
  if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;  
  }
}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}


function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
