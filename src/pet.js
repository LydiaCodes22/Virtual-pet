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
  }
module.exports = Pet;