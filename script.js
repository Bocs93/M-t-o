// let prenom =  ("Bocar")
// let age = ("35")
// let taille = ("182cm")
// let calcul = (17+120) * 3.141592 %3 ;
// let total= {"prenom": prenom ,"age":age,"taille": taille,"resultat":calcul };
// console.log (total) ;
// let nul=  (null==undefined);
// console.log(nul);
// let zero= (0 == false);
// console.log(zero);

// let jourdelasemaine = "lundi";
// switch (jourdelasemaine) {
// case "lundi":
// console.log("Vous avez choisi lundi.");
// break;
// case "mardi":
// console.log("Vous avez choisi mardi.");
// break;
// case "mercredi":
// console.log("Vous avez choisi mercredi.");
// break;
// default:
// console.log("jour inconnu.");
// }

// let temperature = 22;
// if(temperature >=15 && temperature < 25) {
//    console.log ("valide");
// }else{
//     console.log("pasvalide");

// }

// let utilisateur = "admin"

//  if (utilisateur === "admin" || utilisateur === "modérateur") {
//     console.log(`Bienvenue ${utilisateur}, vous etes admin.`);
//   } else {
//     console.log(`Bonjour ${utilisateur}, vous êtes modo.`);
//   }
//
// // let connecte ="connecte"
//   let age = "majeur"
//   let role = "membre" ;"admin"; "vip"
//   let statut = "not valid"
//   if (utilisateurconnecte) {
//     console.log("bienvenue")
//   } else {
//     console.log ("refus")
//   }
//   if( age "18=< ")

// let nombre=1;
// while(nombre <=50) {
//     if(nombre % 5 ===0) {
//         console.log (nombre);
//     }
//     nombre++;

// }
// let compteur = 5;
// do {
// console.log("Valeur actuelle : " + compteur);
// compteur--; }
// while (compteur > 0) ;

//     let livre = { nom: "l'alchimiste", auteur: "Paulo Coelho", annee: "1988" };
// for (let info in livre) {
// console.log(info + " : " + livre [info]); }

// let names = ["Bocar", "Alexis", "Alain"];

// names.forEach((item, index) => {
//   console.log(index + " : " + item.toUpperCase());
// });

// let utilisateurs = [
//      { nom: "Alice", age: 22, role: "admin" },
//      { nom: "Bob", age: 17, role: "user" },
//      { nom: "Clara", age: 29, role: "admin" },
//      { nom: "David", age: 16, role: "user" }
//      ];

//      utilisateurs.forEach((utilisateur) => {
//         //   console.log(index + " : " + noms)
//         });
//         // names.forEach (noms, index) ;

//         let majeur = [ "Alice", "Clara"]
//         let mineur = [ "Bob", "David"]
//         // for (let majeur = 0; 18 < majeur; 18 ++)
//         //     if (majeur.age >= 18){
//         //       majeur "Alice", "Clara";}
//     // console.log ( majeur) ;
//     // console.log ( mineur);
//     let utilisateursMajeurs = [];
// for (let i = 0; i < utilisateurs.length; i++) {
//   if (utilisateurs[i].age >= 18){
//     utilisateursMajeurs.push(utilisateurs[i].nom);

// } if (admin)

// }

// console.log("\nUtilisateurs majeurs :");
// console.log(utilisateursMajeurs.join(" ok "));
// console.log(utilisateursMajeurs);

// let admin = [];
// for (let i =0; i< admin.length; i++) {
//   if (utilisateurs[i].admin) {
//     admin.push(utilisateurs[i].nom);
//   }
// }
//  console.log (admin)

// function saluer (a,b) {
//     return a+b;
// }

// console.log (saluer ("bonjour"," Bocar"))

// const soustraire= function(x, y) { return x - y; };
// console.log(soustraire(10, 5));

// let estPair = n  => n % 2 ===0 ;

// // function estPair(n)  => n % 2 === 0 ;

// console.log (estPair (2))

// Créez une fonction presentation qui affiche "Je m'appelle
// [nom] et j'ai [âge] ans", avec des valeurs par défaut :
// "Inconnu", 30.

// Utilisez setTimeout avec une fonction anonyme qui affiche
// "Fin du chargement" après 3 secondes.

// setTimeout(() => { console.log("fin du chargement"); },
// 3000);

// function additionner(a, b) {
//     return a + b;
//     }
//     console.log(additionner( 5, 3));

// function soustract (a, b) {
//     return a - b;
//         }
//         console.log(soustract( 5, 3));

//         const multiplication = (a, b) => a * b;

//         console.log(multiplication(5, 3));

//         function division (a, b) {
//             return a / b;
//             }
//             console.log(division( 10, 2 ));

//             function calculatrice(a, b, operateur) {
//                 switch (operateur) {
//                     case '+':
//                         return a + b;
//                     case '-':
//                         return a - b;
//                     case '*':
//                         return a * b;
//                     case '/':
//                         if (b !== 0) {
//                             return a / b;
//                         } else {
//                             return "Erreur : division par zéro";
//                         }
//                     default:
//                         return "Erreur : opérateur invalide";
//                 }
//             }

//             // Exemples d'utilisation :
//             console.log(calculatrice(3, 5, '+'));
//             console.log(calculatrice(5, 3, '-'));
//             console.log(calculatrice(5, 3, '*'));
//             console.log(calculatrice(10, 2, '/'));

// let chiffre = [10,-5,15,-20]
// function positif () { let resultat = chiffre.filter
//     (i=>i>=0);
//     console.log (resultat);
// }

//      positif ()

// const image = document.querySelector("img");
// image.setAttribute("src", "./garn.jpg");

// const h2 = document.querySelector("h2");
// h2.textContent = "Aurevoir"

// const bouton = document.createElement("button");
// bouton.textContent = "Supprimez texte";

// // bouton.addEventListener("click", () => {
// //     alert("Supprimé !");
// // });

// // document.body.appendChild(bouton);
// // setTimeout(() => { console.log("supprimez texte"); },
// // 3000);

// const newButtons = document.createElement("button");
// newButtons.textContent = "Couleur texte";
// let parent = document.querySelector(".button");
// parent.appendChild(newButtons);

// const newP = document.createElement("h1");
// newP.textContent = "TURN GREEN !";
// let texte = document.querySelector(".button");
// texte.appendChild(newP);

// newButtons.addEventListener("click", function () {
//   newP.style.color = "green";
// });
// alert("Bouton cliqué !");

// let paragraphe = document.querySelector("h1")
// let button = document.querySelector(".cliqua")
// console.log(button);
// button.addEventListener("click",function () {
//     paragraphe.classList.toggle("yellow")
   
    
// })


// const counterDisplay = document.querySelector('#counter');
// const incrementBtn = document.querySelector('#incrementBtn');
// const decrementBtn = document.querySelector('#decrementBtn');
// const resetBtn = document.querySelector('#resetBtn');

// let count = 0;


// incrementBtn.addEventListener('click', () => {
//   count++;
//   counterDisplay.textContent = count;
// });

// decrementBtn.addEventListener('click', () => {
//   count--;
//   counterDisplay.textContent = count;
// });


// resetBtn.addEventListener('click', () => {
//   count = 0;
//   counterDisplay.textContent = count;
// });

// const sombre = document.getElementById ("sombre")
// const clair = document.getElementById ("clair")
// const background = document.getElementById ("body")
// const body = document.body;

// sombre.addEventListener('click', function () {
//     body.style.backgroundColor ="black" ;
//     counterDisplay.textContent = "white";
// });
  
// clair.addEventListener('click', function () {
//     body.style.backgroundColor = "white";
//     counterDisplay.textContent = "black" ;
//   });

  
// let tableauDeCitations = ["Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès",

// "Chaque jour est une nouvelle chance de faire mieux.",

// "Il n'y a pas d'ascenseur vers le succès, il faut prendre les escaliers.",

// "Rêve grand, commence petit, agis maintenant."];


// let bouton = document.getElementById("bouton-citation");
// let citations  = document.getElementById("citations");

// bouton.addEventListener("click", function() {
//   let  math  = Math.floor(Math.random() * tableauDeCitations.length);
//   citations.textContent = tableauDeCitations[math]
// })