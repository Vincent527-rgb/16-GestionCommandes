🧱 Contexte :
Vous allez développer une mini-application de gestion de commandes dans laquelle l'utilisateur peut saisir :
- un nom d'article
- un prix
- une quantité

Chaque commande sera enregistrée dans un tableau d’objets.
À chaque ajout, la commande s’affiche, et un total général est mis à jour dynamiquement.

🛠️ Contraintes techniques :
- Utiliser une classe Commande avec les propriétés suivantes : name, price, quantity.
- Ajouter une méthode totalPrice() à cette class pour calculer le prix total d’une commande.
- Toutes les commandes doivent être stockées dans un tableau global.
- Afficher chaque commande à l’ajout.
- Mettre à jour un total général (somme de toutes les commandes).
- Utiliser addEventListener sur un bouton pour valider l’ajout.

📐 Structure HTML attendue :
Prévoir :
- Trois champs d’input (nom, prix, quantité)
- Un bouton pour ajouter une commande
- Un conteneur pour afficher les commandes
- Un élément pour afficher le total global

🧠 Bonus possibles :
- Gérer les cas où un champ est vide.
- Ajouter un bouton pour supprimer une commande.
- Afficher un message si aucune commande n’a été ajoutée.
- Ajouter une date ou un horodatage à chaque commande.

🧠 Compétences visées :
- Créer une classe JavaScript avec un constructeur et des méthodes.
- Instancier des objets à partir d'une classe.
- Manipuler le DOM pour afficher dynamiquement des données.
- Gérer les événements utilisateur (clic).
- Utiliser des tableaux pour stocker des objets.
- Utiliser reduce() pour calculer un total global.
