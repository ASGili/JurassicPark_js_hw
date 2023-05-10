const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park('Jurassic Park',15);
  })

  it('should have a name',function(){
    const actual = park.name
    assert.strictEqual(actual,'Jurassic Park')
  });

  it('should have a ticket price',function(){
    const actual = park.price
    assert.strictEqual(actual,15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinos
    assert.deepStrictEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Bill')
    const actual = park.dinos.length
    assert.strictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('Bill')   
    park.addDinosaur('Say')   
    park.removeDinosaur('Bill')
    const actual = park.dinos.length
    assert.strictEqual(actual,1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dino1 = new Dinosaur('T-Rex','Meat',30)
    dino2 = new Dinosaur('Trice','Meat',20)
    dino3 = new Dinosaur('Bill','Meat',10)
    park.dinos = [dino1,dino2,dino3]
    const actual = park.mostAttractive()
    assert.strictEqual(actual,'T-Rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    dino1 = new Dinosaur('T-Rex','Meat',30)
    dino2 = new Dinosaur('Trice','Meat',20)
    dino3 = new Dinosaur('Bill','Meat',10)
    dino4 = new Dinosaur('Bill','Veg',20)
    park.dinos = [dino1,dino2,dino3,dino4]
    const actual = park.findBySpecies('Bill')
    assert.deepStrictEqual(actual,[dino3,dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    dino1 = new Dinosaur('T-Rex','Meat',30)
    dino2 = new Dinosaur('Trice','Meat',20)
    dino3 = new Dinosaur('Bill','Meat',10)
    park.dinos = [dino1,dino2,dino3]
    const actual = park.findVisitorsByDay()
    assert.strictEqual(actual,60)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    dino1 = new Dinosaur('T-Rex','Meat',30)
    dino2 = new Dinosaur('Trice','Meat',20)
    dino3 = new Dinosaur('Bill','Meat',10)
    park.dinos = [dino1,dino2,dino3]
    const actual = park.findVisitorsByYear()
    assert.strictEqual(actual,21900)
  });

  it('should be able to calculate total revenue for one year', function(){

  });

});
