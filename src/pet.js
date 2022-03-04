function Pet(name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
  }
  Pet.prototype.growUp=function () {
      this.age ++;
      this.fitness-=3;
      this.hunger +=5;
      }

  Pet.prototype.walk=function () {
      const maxFitness= 10
      const normalIncrease= 4
      if(this.fitness>=maxFitness-normalIncrease) {
        this.fitness=maxFitness;
      } else {
          this.fitness+=normalIncrease}
  };
  Pet.prototype.feed= function () {
      const minHunger = 0
      const normalReduce = 3
      if (this.hunger-normalReduce>=minHunger) {
          this.hunger-=normalReduce;
      } else {
          this.hunger=minHunger;    
      }
  };
  Pet.prototype.checkUp= function () {
      if (this.fitness<=3 && this.hunger<5){return 'I need a walk'}
      if (this.fitness>3 && this.hunger>=5) {return 'I am hungry'}
      if (this.fitness<=3 && this.hunger>=5){return 'I am hungry AND I need a walk'}
      else {return 'I feel great!'}
  };
module.exports = Pet;