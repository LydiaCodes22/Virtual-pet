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
      pet.fitness = 5;
      pet.hunger = 0;
      expect(pet.checkUp()).toEqual('I feel great!');
      pet.fitness = 5;
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I am hungry');
      pet.fitness = 1;
      pet.hunger = 6;
      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
      pet.fitness = 3;
      pet.hunger = 4;
      expect(pet.checkUp()).toEqual('I need a walk');
      });
    it ('will tell you the pet is alive when the hunger is under 10, fitness over 0 & age under 30', () => {
      pet.fitness = 5;
      pet.hunger = 0;
      pet.age = 0;
      expect(pet.isAlive()).toEqual(true);

      pet.fitness = 0;
      pet.hunger = 0;
      pet.age = 0;
      expect(pet.isAlive()).toEqual(false);

      pet.fitness = 5;
      pet.hunger = 10;
      pet.age = 0;
      expect(pet.isAlive()).toEqual(false);

      pet.fitness = 5;
      pet.hunger = 0;
      pet.age = 30;
      expect(pet.isAlive()).toEqual(false);
      });
  });