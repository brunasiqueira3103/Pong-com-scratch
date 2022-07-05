//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function incluiPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(225,140,0);
  rect(150,10,40,20);
  fill(225);
  text(meusPontos, 170,26)
  fill(225,140,0);
  rect(450,10,40,20);
  fill(225);
  text(pontosDoOponente,470,26)
}


function marcaPonto(){
  if (xBolinha > 590){
    meusPontos +=1;
    somPonto.play();
  }
  if (xBolinha <10){
    pontosDoOponente += 1;
    somPonto.play();
  }
}

