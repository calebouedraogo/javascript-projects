let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
beagle["astronautID"] = 4;
tardigrade["astronautID"] = 5;

// Add a move method to each animal object
superChimpOne["move"] = function () {return Math.floor(Math.random()*11)}
salamander["move"] = function () {return Math.floor(Math.random()*11)};
superChimpTwo["move"] = function () {return Math.floor(Math.random()*11)};
beagle["move"] = function () {return Math.floor(Math.random()*11)};
tardigrade["move"] = function () {return Math.floor(Math.random()*11)};

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

// Print out the relevant information about each animal.
function crewReports () {
   for (i = 0; i < crew.length; i++) {
   console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
   }
   return;
}
crewReports();

// Start an animal race!
function fitnessTest (candisates) {
   let results = [], numSteps, turns;

   for (i = 0; i < candisates.length; i++){
      numSteps = 0;
      turns = 0;

      while(numSteps < 20){
         numSteps += candisates[i].move();
      }

      results.push(`${candisates[i.name]} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
