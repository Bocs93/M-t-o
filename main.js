// const bouton = document.getElementById("monBouton");
// const image = document.getElementById("monImage");
// const message = document.getElementById("message");


// bouton.addEventListener("click", () => {
//   message.textContent = "Vous avez cliqué sur un bouton";
// });


// image.addEventListener("click", () => {
//   message.textContent = "Vous avez cliqué sur une image";
// });

// const lien = document.querySelector("a");
// const sur = document.querySelector("#sure")

// lien.addEventListener("click", (event) => {
// event.preventDefault();
// sur.textContent = "etes vous sure ?";
// });

// length[]
// let form = document.querySelector("form")

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
       
//     let champ = form.elements["texte"].value;
//     const affiche = document.querySelector(".champ")
    

//     }
  

    

// })


// const textarea = document.getElementById('textarea');
//     const counter = document.getElementById('compteur');
// vider.addEventListener("click")
//     textarea.addEventListener('input', function () {
//    incrementBtn.addEventListener('click', () => {
//   count++;
//   counterDisplay.textContent = count;
// });

// decrementBtn.addEventListener('click', () => {
//   count--;
//   counterDisplay.textContent = count;
//   ajouter.addEventListener("click")
// });
//     });

// function validerMotDePasse() {
//     const nom = document.getElementById("nom");
//     const mail = document.getElementById("mail")
//     const message = document.getElementById("message");

//     const estLongAssez = motdepasse.length >= 8;
//     const contientChiffre = /\d/.test(motdepasse);
//     const contientMajuscule = /[A-Z]/.test(motdepasse);

//     if (!estLongAssez || !contientChiffre || !contientMajuscule) {
//       message.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.";
//       return false; // empêche l'envoi du formulaire
//     }

//     message.textContent = ""; // efface le message si tout est OK
//     return true;


//   }

// class Produit {
//     constructor(nom,price) {
//     this.nom = nom;
//     this.price = price;
//     }
//     display() {
//     console.log("le prix de " + this.nom + "est de " + this.price) ;
// //     }}

// //     let saucisson = new Produit("saucisson","200€")
// //     saucisson.display()

// //     let  nature = new Produit("yaourt", "3€");
//     nature.display()


// class Employe {
//     constructor(name) {
//     this.name = name;
//     }
//     diriger() {
//     console.log(`${this.name} taf.`);
//     }
//     }
//     class Manager extends Employe {
//     constructor(name) {
//     super(name); 
//     }
//     talk() {
//     console.log(`${this.name} taf.`);
//     }
//     }
//     const myEmploye = new Manager ("Bocar");
//     myEmploye.diriger();

// class Livre {
//     constructor (titre, auteur) {
//         this.titre = titre;
//         this.auteur = auteur;
//     }
//     afficher() {
//         console.log(`${this.titre} afficher.`);
        
//     }
//     }
    // class Bibliothèque {
    //     constructor () {
    //         this.Livre = []
    //     }
 
    //     afficherTous() {
    //         this.livres.forEach(livre => {
    //             livre.afficher(); 
    //         });
    //     }
//     }

//     }
//     seDeconnecter() {
    
//     }

// }
// class Admin extends Utilisateur {
    
//     constructor(nom,mail,role) {
    // super(nom,mail)
    // this.role = role
    //     }
//     supprimerCompte() { 
// console.log("compte supprimé"+ this.nom);

//     }
// }

// let admin = new Admin ("Bocar","b@gmail.com","Admin")
// admin.seConnecter()

// class Produit {
//     constructor(nom,prix) {
//         this.nom = nom
//         this.prix = prix

// class Panier { 
//     constructor() {
//      this.liste = []

//     ajouterProduit ()
//     afficherTotal ()
//     videPanier()



//     } 
    
//     }

//    }
// }        

// class Produit {
//     constructor(nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// class Panier {
//     constructor() {
//         this.liste = [];
//     }

//     ajouterProduit(produit) {
//         this.liste.push(produit);
//     }

//     afficherTotal() {
//         const total = this.liste.reduce((somme, produit) => somme + produit.prix, 0);
//         console.log(`Total panier : ${total} €`);
//     }

//     viderPanier() {
//         this.liste = [];
//         console.log("panier vidé.");
//     }
// }
// let produit1 = new Produit("café", 5);
// let produit2 = new Produit("Stylo", 3);

// let monPanier = new Panier();
// monPanier.ajouterProduit(produit1);
// monPanier.ajouterProduit(produit2);
// monPanier.afficherTotal();  
// monPanier.viderPanier();   

// Améliorer la classe Bibliothèque vue précédemment :
// ● Ajouter une méthode rechercherLivre(titre) qui affiche un message si le livre est présent
// ● Ajouter une méthode supprimerLivre(titre) pour retirer un livre du tableau
// ● Tester les cas d’un livre trouvé, d’un livre supprimé, d’un livre absent


// class Livre {
//     constructor(titre, auteur) {
//         this.titre = titre;
//         this.auteur = auteur;
//     }

//     afficher() {
//         console.log(`${this.titre} par ${this.auteur}`);
//     }
// }

// class Bibliotheque {
//     constructor() {
//         this.livres = [];
//     }

//     ajouterLivre(livre) {
//         this.livres.push(livre);
//     }

//     afficherTous() {
//         this.livres.forEach(livre => {
//             livre.afficher();
//         });
//     }

//     rechercherLivre(titre) {
//         const trouve = this.livres.find(livre => livre.titre === titre);
//         if (trouve) {
//             console.log("Livre disponible :");
//             trouve.afficher();
//         } else {
//             console.log("Livre non trouvé.");
//         }
//     }

//     supprimerLivre(titre) {
//         let index = this.livres.findIndex(livre => livre.titre === titre);
//         if (index !== -1) {
//             this.livres.splice(index, 1);
//             console.log(`Livre "${titre}" supprimé.`);
//         } else {
//             console.log("Livre non trouvé.");
//         }
//     }
// }

// const promesse = new Promise((resolve, reject) => {
// setTimeout ("1000")
  
//     promesse
//     .then(valeur => console.log());

// function attenteAleatoire() {
//     const delai = Math.floor(Math.random() * 2000) + 1000;
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Attendu ${delai} ms`);
//       }, delai);
//     });
//   }
// Crée deux fonctions asynchrones (addition et multiplication),
//  enchaîne-les avec .then() et affiche le résultat final.

// function addition(valeur) {
//     return new Promise ((resolve) => {
//         setTimeout(() => resolve (valeur + 2) 1000);
//     });
    
// }
// function multiplication(valeur) {
//     return new Promise ((resolve)=> {
//         setTimeout (() => (valeur * 2) 1000);
//     })
// }
// doubler (2)
// .then ((result) => doubler (result)) 
// .then ((result) => console.log("résultat:", result));

// async function getData() {
//     try {
//     const result = await attendre(1000);
//     console.log("Donnée :", result);
//     } catch (e) {
//     console.error("Erreur :", e);
//     }
//     }
//     getData();

// function traitement() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const succes = true; // change à false pour tester un échec
//         if (succes) {
//           resolve("Traitement terminé avec succès.");
//         } else {
//           reject("Une erreur est survenue.");
//         }
//       }, 1500);
//     });
//   }
  
//   traitement()
//     .then(resultat => {
//       console.log(resultat);
//     })
//     .catch(erreur => {
//       console.error(erreur);
//     })
//     .finally(() => {
//       console.log("Fin du processus");
//     });
  

// Étapes demandées :
// 1. Crée une fonction attente(ms) qui retourne une promesse résolue après ms millisecondes.
// 2. Faire plusieurs appels à attente() en utilisant .then() et affiche des messages à chaque étape.
// 3. Modifie une des promesses pour qu’elle rejette après 2s avec un message d’erreur personnalisé.
// 4. Ajoute un .catch() global pour intercepter l’erreur.
// 5. Termine avec .finally() pour afficher "Processus terminé".

// function Attente(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(`Attendu ${ms} ms`), ms);
//     });
//   }
  
//   Attente(1000)
//   .then(message => {
//     console.log("Étape 1 ");
//     return Attente(1500);
//   })
//   .then(message => {
//     console.log("Étape 2 ");
//     return Attente(2000);
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject("Erreur à l'étape 3"), 2000);
//     });
//   })
//   .catch(erreur => {
//     console.error("Une erreur est survenue");
//   })
//   .finally(() => {
//     console.log("Processus terminé");
//   });

// `{
// "nom": "ballon",
// "prix": 15,
// "disponible": "oui"
// }`


// let objet =
// JSON.parse('{"nom":"ballon","prix":"15", "disponible":"oui"}');
// console.log(objet);

// fetch("https://jsonplaceholder.typicode.com/posts/1") // Envoie une requête GET
// .then((response) => {
// if (!response.ok) {
// throw new Error("Erreur réseau : " + response.status);
// }
// return response.json(); // Transforme la réponse JSON en objet JS
// })
// .then((data) => {
// console.log("Données reçues :", data); // Affiche les données reçues
// })
// .catch((error) => {
// console.error("Une erreur s'est produite :", error.message); // Gère les erreurs de réseau ou d'API
// });
  
// async function chargerUtilisateurs() {
//     try {
//       // Envoie la requête HTTP
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
//       // Vérifie si le statut HTTP est hors de la plage 200–299
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP : ${response.status}`);
//       }
  
//       // Transforme la réponse JSON en objet JavaScript
//       const data = await response.json();
  
//       // Affiche les données dans la console
//       console.log("Utilisateurs :", data);
  
//     } catch (error) {
//       // Gère les erreurs réseau ou les erreurs dans le code ci-dessus
//       console.error("Erreur API :", error.message);
//     }
//   }
  




// async function chargerUtilisateursEtPosts() {
//     const urlUsers = "https://jsonplaceholder.typicode.com/users";
//     const urlPosts = "https://jsonplaceholder.typicode.com/posts";
  
//     try {
//       const [responseUsers, responsePosts] = await Promise.all([
//         fetch(urlUsers),
//         fetch(urlPosts)
//       ]);
  
//       if (!responseUsers.ok || !responsePosts.ok) {
//         throw new Error(`Erreur HTTP : ${responseUsers.status} / ${responsePosts.status}`);
//       }
  
//       const users = await responseUsers.json();
//       const posts = await responsePosts.json();
  
//       console.log("Utilisateurs récupérés :");
//       users.forEach(user => {
//         console.log(`${user.name} (${user.email})`);
//       });
  
//       console.log(`Nombre total de posts : ${posts.length}`);
  
//       const ul = document.getElementById("liste-utilisateurs");
//       ul.innerHTML = "";
  
//       users.forEach(user => {
//         const nbPosts = posts.filter(p => p.userId === user.id).length;
//         const li = document.createElement("li");
//         li.textContent = `${user.name} - ${user.email} (${nbPosts} posts)`;
//         ul.appendChild(li);
//       });
  
//     } catch (err) {
//       console.error("Erreur affichage :", err);
  
//       const divErreur = document.getElementById("erreur-api");
//       if (divErreur) {
//         divErreur.textContent = "Erreur lors du chargement des données.";
//       }
//     }
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const bouton = document.getElementById("btn-charger");
//     bouton.addEventListener("click", chargerUtilisateursEtPosts);
//   });
  
// async function chargerPostAleatoire() {
//     try {
//       // Il y a 100 posts dans l'API : on choisit un id entre 1 et 100
//       const id = Math.floor(Math.random() * 10) + 1;
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP : ${response.status}`);
//       }
  
//       const post = await response.json();
//       const paragraphe = document.getElementById("titre-post");
//       paragraphe.textContent = `Titre du post ${post.id} : ${post.title}`;
//     } catch (err) {
//       console.error("Erreur lors du chargement du post :", err);
//       const paragraphe = document.getElementById("titre-post");
//       paragraphe.textContent = "Une erreur est survenue.";
//     }
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const bouton = document.getElementById("btn-charger-post");
//     bouton.addEventListener("click", chargerPostAleatoire);
//   });
  