const createPerson = (name, age) => {
  // your code here

  var person = {name: name, age: age};

  return person;
};

const getName = object => {
  // your code here

  var nameOf = object.name ;

  return nameOf;
};

const getProperty = (property, object) => {
  // your code here

  var obj = object;
  var prop = property;

  return obj[prop];

};

const hasProperty = (property, object) => {
  // your code here

  var prop = property;
  var obj = object;

  var result = obj[prop];

  if (result) {
    return true;
  } else { return false;}
};

const isOver65 = person => {
  // your code here

  var ageOf = person.age;

  if (ageOf <= 65) {
    return false;
  } else { return true;}
};

const getAges = people => {
  // your code here

  var ageArray = [];
  for (var i = 0; i < people.length; i++) {
    ageArray.push(people[i].age);

  }
  
  return ageArray; 
}

const findByName = (name, people) => {
  // your code here

  
  for (var i = 0; i < people.length; i++) {
   if (people[i].name == name) {
     var result = people[i];
   };
  }

  return result;
};

const findHondas = cars => {
  // your code here

  var hondaCars = [];

  for (var i = 0; i < cars.length ; i ++) {
    if (cars[i].manufacturer == "Honda") {
      hondaCars.push(cars[i]);
    }
  }

  return hondaCars;
};

const averageAge = people => {
  // your code here

 
  var total = 0;

  for (var i = 0 ; i < people.length ; i++) {
    total += people[i].age;

  }

  var avg = total / people.length;
  return avg;

};


const createTalkingPerson = (name, age) => {
  // your code here

  var person = {name: name, age: age, introduce: function intro(friend) {var greeting = "Hi " + friend + ", my name is " + name + " and I am " + age + "!";

  return greeting;
  }
};
 

 return person;


};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
