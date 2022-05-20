const createObj = () => {
  let obj = {};
  return obj;
};

let personA = createObj();
let personB = createObj();

console.log(personA, personB);

const createPerson = (first, last) => {
  let person = {};
  person.firstName = first;
  person.lastName = last;

  function fullName() {
    return `${person.firstName} ${person.lastName}`;
  }

  person.fullName = fullName();

  // Public interface
  return person;
};

let personC = createPerson('Daniel', 'Avzaradel');
let personD = createPerson('David', 'Avzaradel');
console.log(personC, personD);

let personE = createPerson('Johnny', 'Depp');
console.log(personE.fullName);
