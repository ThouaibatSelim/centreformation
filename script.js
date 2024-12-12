//Afficher année actuelle dans le footer
const date = new Date();
const elementDate = document.querySelector ("#currentyear");
elementDate.textContent += `${date.getFullYear()} STF Mayotte. Tous droits réservés© `;


//Récupérer les informations saisies dans la console
const elementFormulaire = document.querySelector("#form");
  console.log(elementFormulaire)

elementFormulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    const elementInputNom = document.querySelector("#nom");
    const valueNom = elementInputNom.value;
    console.log("##### Nom saisi:", valueNom)

    const elementInputPrenom = document.querySelector("#prenom");
    const valuePrenom = elementInputPrenom.value;
    console.log("##### Prénom saisi:", valuePrenom)

    const elementInputMail = document.querySelector("#mail");
    const valueMail = elementInputMail.value;
    console.log("##### Adresse mail saisie:", valueMail);

    const elementInputNumero = document.querySelector("#numero");
    const valueNumero = elementInputNumero.value;
    console.log("##### Numéro saisi:", valueNumero);

    const elementInputDiplome = document.querySelector("#diplome");
    const valueDiplome = elementInputDiplome.value;
    console.log("##### Diplôme saisi:", valueDiplome);

    const elementInputSituationpro = document.querySelector("#situationpro");
    const valueSituationPro = elementInputSituationpro.value;
    console.log("##### Situation Professionelle saisie:", valueSituationPro);
   
    const elementInputPassword = document.querySelector("#password");
    const valuePassword = elementInputPassword.value;
    console.log("##### Mot de passe saisi:", valuePassword);

});