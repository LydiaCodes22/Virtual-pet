/* eslint-disable no-undef */
//  disabled as it was having an issue with the test keywords.

const Pet = require('../src/petclass')

describe('constructor', () => {
  const pet = new Pet('Fido')
  it('returns an object', () => {
    expect(pet).toBeInstanceOf(Object)
  })
  it('sets the name property', () => {
    expect(pet.name).toEqual('Fido')
  })
})

describe('growUp', () => {
  it('ages, gets more hungry and less fit', () => {
    const pet = new Pet('Growo')
    pet.growUp()
    expect(pet.age).toEqual(1)
    expect(pet.hunger).toEqual(5)
    expect(pet.fitness).toEqual(7)
  })

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido')
    pet.age = 30
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
  })
})

describe('walk', () => {
  it('gets fitter when it walks to a maximum of 10', () => {
    const pet = new Pet('Walko')
    pet.walk()
    expect(pet.fitness).toEqual(10)

    pet.fitness = 4
    pet.walk()
    expect(pet.fitness).toEqual(8)
  })

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido')
    pet.age = 30
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
  })
})

describe('Feed', () => {
  const pet = new Pet('Feedo')

  it('gets less hungry when fed, with a minimum of 0', () => {
    pet.hunger = 5
    pet.feed()
    expect(pet.hunger).toEqual(2)

    pet.feed()
    expect(pet.hunger).toEqual(0)
  })

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido')
    pet.age = 30
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')
  })
})

describe('checkUp', () => {
  const pet = new Pet('Instructo')
  it('will tell you its needs if you run the checkUp function', () => {
    pet.age = 0
    pet.hunger = 0
    pet.fitness = 10
    expect(pet.checkUp()).toEqual('I feel great!')

    pet.fitness = 5
    pet.hunger = 5
    expect(pet.checkUp()).toEqual('I am hungry')

    pet.fitness = 1
    pet.hunger = 6
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')

    pet.fitness = 3
    pet.hunger = 4
    expect(pet.checkUp()).toEqual('I need a walk')
  })

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido')
    pet.age = 30
    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(')
  })
})

describe('isAlive', () => {
  const pet = new Pet('Alivo')
  it('will tell you the pet is alive when the hunger is under 10, fitness over 0 & age under 30', () => {
    expect(pet.isAlive).toEqual(true)

    pet.fitness = 0
    pet.hunger = 0
    pet.age = 0
    expect(pet.isAlive).toEqual(false)

    pet.fitness = 5
    pet.hunger = 10
    pet.age = 0
    expect(pet.isAlive).toEqual(false)

    pet.fitness = 5
    pet.hunger = 0
    pet.age = 30
    expect(pet.isAlive).toEqual(false)
  })
})

describe('haveBaby', () => {
  const parent = new Pet('Stan')
  it('will add a new instance of Pet to the children array with the name passed as the argument', () => {
    expect(parent.children).toBeInstanceOf(Array)
    expect(parent.children.length).toBe(0)
    parent.haveBaby('firstBorn')
    expect(parent.children.length).toBe(1)
    expect(parent.children[0].name).toBe('firstBorn')
    parent.haveBaby('secondBorn')
    expect(parent.children.length).toBe(2)
    expect(parent.children[1].name).toBe('secondBorn')
  })
})

describe('adoptChild', () => {
  const parent = new Pet('Ben')
  it('will add a new instance of Pet to the children array with the name passed as the argument', () => {
    expect(parent.children).toBeInstanceOf(Array)
    expect(parent.children.length).toBe(0)
    parent.haveBaby('first')
    expect(parent.children.length).toBe(1)
    expect(parent.children[0].name).toBe('first')
    parent.haveBaby('second')
    expect(parent.children.length).toBe(2)
    expect(parent.children[1].name).toBe('second')
  })
})
