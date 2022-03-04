const Pet = require('../src/pet');

describe('constructor', () => {
  const pet = new Pet('Fido')
    it('returns an object', () => {
      expect(pet).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    })
    it('ages, gets more hungry and less fit', () => {
      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0)
      expect(pet.fitness).toEqual(10)
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5)
      expect(pet.fitness).toEqual(7)
    });
 
    it('gets fitter when it walks to a maximum of 10', () => {
      pet.walk();
      expect(pet.fitness).toEqual(10);
      pet.fitness=4
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('gets less hungry when fed, with a minimum of 0', () => {
      pet.feed();
      expect(pet.hunger).toEqual(2);
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it('will tell you its needs if you run the checkUp function', () => {
      expect(pet.checkUp()).toEqual('I feel great!');
      pet.growUp();
      expect(pet.checkUp()).toEqual('I am hungry');
      pet.growUp();
      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
      pet.feed();
      expect(pet.checkUp()).toEqual('I need a walk');
      });
  });