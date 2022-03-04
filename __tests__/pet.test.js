const Pet = require('../src/pet');

describe('constructor', () => {
  const pet = new Pet('Fido')
  const pet2 = new Pet('hungryPet')
  const pet3 = new Pet('unfitPet')
    it('returns an object', () => {
      expect(pet).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      expect(pet.name).toEqual('Fido');
    })
    it('ages', () => {
      expect(pet.age).toEqual(0);
      pet.growUp();
      expect(pet.age).toEqual(1);
    })
    it('gets hungry', () => {
      expect(pet2.hunger).toEqual(0)
      pet2.growUp();
      expect(pet2.hunger).toEqual(5)
    });
    it('gets less fit', () => {
      expect(pet3.fitness).toEqual(10)
      pet3.growUp();
      expect(pet3.fitness).toEqual(7)
    });
    it('gets fitter when it walks to a maximum of 10', () => {
      pet3.walk();
      expect(pet3.fitness).toEqual(10);
      pet3.fitness=4
      pet3.walk();
      expect(pet3.fitness).toEqual(8);
    }
    )
  });