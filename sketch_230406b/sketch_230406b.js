
class balle{
  constructor (posx,posY,oriantation,vitesse,degats,taille = 10){
  this.posX = posX
  this.posY = posY
  this.oriantation = oriantation
  this.vitesse = vitesse
  this.degats = degats
  this.taille = taille
  }
  
  afficher(){
  ellipse(this.posX,this.posY,this.taille,this.taille);
  }
  
  deplacer () {
  this.posX = this.vitesse + sin(this.oriantation)*this.vitesse
  }
}


function setup() {

}


function draw() {

}
