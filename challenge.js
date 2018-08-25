const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1

const takeNumber =  (bandName) => {
  // print band name
  // deal with counter
  const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
  bandNumber++;
  printToDom(bandString, 'bandz');  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM