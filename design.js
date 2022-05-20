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

  return `${person.firstName} ${person.lastName}`;
};

let personC = createPerson('Daniel', 'Avzaradel');
console.log(personC);
