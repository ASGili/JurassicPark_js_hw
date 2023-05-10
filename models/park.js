const Dinosaur = require('./dinosaur.js');

const Park = function (name,price){
    this.name = name
    this.price = price
    this.dinos = []
}

Park.prototype.addDinosaur = function (dino){
    this.dinos.push(dino)
}

Park.prototype.removeDinosaur = function (dino){
    let i = this.dinos.indexOf(dino)
    if (i>-1){
    this.dinos.splice(i,1)}
}
Park.prototype.mostAttractive = function (){
    let attraction = 0
    let mostAttractiveDino = ""
    for (const dino of this.dinos){
        if(dino.guestsAttractedPerDay > attraction){
            attraction = dino.guestsAttractedPerDay
            mostAttractiveDino = dino.species   
        }
    }
   return mostAttractiveDino
}

Park.prototype.findBySpecies = function (species){
    const dinosBySpecies = []
    for (const dino of this.dinos){
        if (dino.species === species){
            dinosBySpecies.push(dino)}
    }
    return dinosBySpecies
}
Park.prototype.findVisitorsByDay = function (){
    let totalVisitors = 0
    for (const dino of this.dinos){
        totalVisitors +=dino.guestsAttractedPerDay}
    return totalVisitors
}

Park.prototype.findVisitorsByYear = function (){
    return this.findVisitorsByDay()*365}

Park.prototype.totalRevenueByYear = function (){
    return this.findVisitorsByYear()*this.price}

module.exports = Park