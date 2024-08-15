let cor;
let posicaoHorizontal;//x
let posicaoVertical;//y

function setup() {
  createCanvas(400, 400);
 background("pink");
  posicaoHorizontal=200;
  posicaoVertical=200;
 cor=color(random(0,255),random(0,255),random(0,255))
}
                                  

function draw() {
 circle(posicaoHorizontal,posicaoVertical,35);
 fill(cor);
 if (mouseX<posicaoHorizontal){posicaoHorizontal--;}
 if (mouseX>posicaoHorizontal){posicaoHorizontal++;}
 if (mouseY<posicaoVertical){posicaoVertical--;}
 if (mouseY>posicaoVertical){posicaoVertical++;}                          
 if (mouseIsPressed){ cor=color(random(0,255),random(0,255),random(0,255))}

}   