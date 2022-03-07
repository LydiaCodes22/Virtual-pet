function Pet(name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
  }
  Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };
  Pet.prototype.growUp=function () {
    // if (this.isAlive==false){throw 'Your pet is no longer alive :('
// }
        if (this.isAlive==false) {
        throw new Error('Your pet is no longer alive :(');
} else {
    
        this.age ++;
        this.fitness-=3;
        this.hunger +=5;
        }  
      };

  Pet.prototype.walk=function () {
      const maxFitness= 10
      const normalIncrease= 4
    //   if (this.isAlive==false){throw 'Your pet is no longer alive :('}
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      if(this.fitness>=maxFitness-normalIncrease) {
        this.fitness=maxFitness;
      } else {
          this.fitness+=normalIncrease}
  };
  Pet.prototype.feed= function () {
      const minHunger = 0
      const normalReduce = 3
    //   if (this.isAlive==false){throw 'Your pet is no longer alive :('}
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      if (this.hunger-normalReduce>=minHunger) {
          this.hunger-=normalReduce;
      } else {
          this.hunger=minHunger;    
      }
  };
  Pet.prototype.checkUp= function () {
    // if (this.isAlive==false){throw 'Your pet is no longer alive :('}
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
      if (this.fitness<=3 && this.hunger<5){return 'I need a walk'}
      if (this.fitness>3 && this.hunger>=5) {return 'I am hungry'}
      if (this.fitness<=3 && this.hunger>=5){return 'I am hungry AND I need a walk'}
      else {return 'I feel great!'}
  };
  
module.exports = Pet;