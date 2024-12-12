//Afficher année actuelle dans le footer
const date = new Date();
const elementDate = document.querySelector ("#currentyear");
elementDate.textContent += `${date.getFullYear()} STF Mayotte. Tous droits réservés© `;

// Règle validation formulaire
const elementFormulaire = document.querySelector("#form");
  console.log(elementFormulaire)

//Récupérer
function verifierchamp(champ) {
  if(champ.value === "") {
      console.log("le champ nom est vide");
  } else {
      console.log("le champ nom est rempli");
  }
};

//Nom
elementFormulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const elementInputNom = document.querySelector("#nom");
    const valueNom = elementInputNom.value;
    console.log("##### Nom saisi:", valueNom)
    const elementInputPrenom = document.querySelector("#prenom");
    verifierchamp(elementInputNom);
    verifierchamp(elementInputPrenom);
});