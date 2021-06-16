1 Mettre en place votre environement de travail.

2 - Recoder les fonctionnalités en jQuery

Vous venez de mettre en place votre environnement de travail en ajoutant au projet la librairie jQuery. Vous êtes prêt à la manipuler, let’s go! 💥


L'objectif de cette 2ème étape : 

Vous vous souvenez de toutes les fonctionnalités que vous venez de développer : suppression d’un message, mise à jour d’un compteur, ajout d’un nouveau message..? On va tout recommencer!

Mais cette fois, on utilise la librairie jQuery. L’avantage c’est que vous n'aurez pas à refaire l'intégration HTML mais simplement la partie JS… Soulagés ? 😉


Instructions


2.1 Recoder le compteur de messages


👉Récupérez le nombre de messages grâce à une instruction jQuery. Mettez à jour la partie HTML faisant référence au compteur avec le nombre total de messages que vous venez de récupérer.

2.2 Recoder la suppression de messages

👉 Captez les clics de chaque picto poubelle et recodez ensuite ce qui va se déclencher à chaque clic et qui supprime l'intégralité du message.

Pensez également à la mise à jour du compteur!



2.3 Recoder l’ajout d’un nouveau message

👉 Captez le clic sur le bouton add et recodez ensuite la partie qui va permettre d’ajouter un nouveau message.

Vous vous souvenez du nombre de lignes qu’il a fallu écrire pour créer un bloc message ? Et bien si vous vous débrouillez bien avec jQuery vous pouvez le faire en une seule instruction! Nice, non ? 😎


2.4 Réinitialiser le champ de saisie

👉 Recodez les instructions permettant la réinitialisation du champ de saisie une fois que le nouveau message a été inséré dans l’application



2.5 Recoder la suppression des nouveaux messages

Rappelez-vous, un nouveau message créé ne possède pas naturellement la mécanique de suppression. Il a fallu l'ajouter après coup.

jQuery propose une méthode assez intéressante : permettre de capter les clics des messages initiaux mais également des prochains créés.

Ce qui permet d’éviter d’ajouter deux fois le même bloc de code. 😉


👉Modifier la mécanique de suppression des messages en utilisant la méthode une méthode alternative au .click : la méthode .on



3 - Ajouter un moteur de recherche

Vous venez de recoder intégralement toutes les fonctionnalités en utilisant la librairie jQuery. Votre code est normalement beaucoup plus court. 😎


Vous voyez maintenant le potentiel de jQuery? Il a fait gagner de nombreuses lignes de code à pas mal de développeurs. 😉


L'objectif de cette 3ème étape : 

Vous allez devoir apporter une dernière fonctionnalité au projet : un moteur de recherche par nom d’utilisateur.


Instructions


3.1 Mettre en place la partie HTML représentant la recherche

Qui dit nouvelle fonctionnalité dit souvent intégration HTML.


👉  Ajoutez le champ de saisie ainsi que le bouton à côté du compteur de message.

Le champ de saisie et le bouton de validation auront les mêmes styles que sur la maquette.



3.2  Capter le clic de l’utilisateur

👉 Grâce à la notion d'événement, apposez un écouteur sur le bouton search afin de détecter les clics de l'utilisateur.



3.3 Mettre en place l'algorithme de recherche

👉  Lorsque le clic sur le bouton search est capté, récupérez la valeur du champ input pour filtrer les messages et afficher uniquement ceux qui correspondent aux nom et prénom saisis.



3.4 Réinitialiser le champ de recherche

Comme pour l’ajout d’un nouveau message, lorsque la recherche est exécutée, le texte est toujours présent dans le champ de saisie.


👉 Réinitialisez ce champ à chaque fois que la recherche est exécutée pour éviter de devoir le supprimer manuellement



3.5 Améliorer l'algorithme

Après avoir testé plusieurs scénarios, vous êtes peut-être tombé sur un cas de figure un peu déroutant. Lorsque vous faites une recherche plusieurs fois, par exemple Elise Watson puis Zoé Millot, le message de Zoé Millot ne s'affiche pas.

C’est normal! Vous avez bien stipulé au message de disparaître si celui-ci ne correspondait pas au critère de recherche mais il n’y a aucune instruction qui lui indique de réapparaître.


👉 A vous de jouer! Changez le comportement de l’application pour que, lors de la 2ème recherche, les messages précédemment masqués puissent apparaître de nouveau si la recherche correspond.



4. Bonus: Mettre le projet sur Github !


