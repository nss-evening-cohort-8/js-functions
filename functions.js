// input = animal ex.  fish
// output = animal product  ex. fish stix

function nuggetizer(animal){
  return `${animal} stix`;
}
console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat')); // cat stix
console.log('bear:', nuggetizer('bear')); // bear stix


const nuggetizer2 = (animal) => {
  return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));

const nomnom = (person, food) => {
  return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer('bear'); // bear stix
console.log(nomnom('zoe', bearSticks)); // zoe devoured bear stix
console.log(nomnom('callan', 'crap'));  // callan devoured crap
console.log(nomnom('pink', 'blue')); // pink devoured blue

console.log(nomnom('red')); // red devoured undefined


// function numberAdder that takes in a number and
// return the number plus 3.  so input=22, output = 25
const numberAdder = (num) => {
  const finalNumber = num + 3;
  printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
  // const selectedDiv = document.getElementById('allTheNumbers');
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22); // 25
numberAdder(2); // 5
numberAdder(4);
numberAdder(6);
numberAdder(12);


printToDom('I am ready for lunch', 'feelings');