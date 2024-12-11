//Afficher année actuelle dans le footer
function anneeFooter() { 
  // get the the span element
  const date = new Date();
  // get the current year
  const currentYear = date.getFullYear();
  // set the year span element's text to the current year
  document.querySelector("#footer").innerHTML = currentYear;
};
