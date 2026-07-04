# Python Explorateurs

Formation Python progressive pour des élèves de 9 à 12 ans.

Le projet est un site web statique et un ebook consultable en ligne. Il peut être publié gratuitement sur GitHub Pages et ne nécessite aucun backend.

## Objectif pédagogique

La formation aide les élèves à :

- comprendre qu'un programme est une suite d'instructions précises ;
- apprendre Python progressivement, des bases jusqu'à une introduction à la programmation orientée objet ;
- développer le raisonnement algorithmique avant d'écrire du code ;
- utiliser une IA générative comme un coach d'apprentissage, sans lui déléguer toute la réflexion.

L'introduction insiste sur trois idées :

- programmer, ce n'est pas seulement écrire du code, c'est résoudre un problème étape par étape ;
- Python est un langage accessible pour débuter ;
- l'IA peut expliquer, corriger et donner des indices, mais l'élève doit tester, vérifier et comprendre.

## Architecture

```text
.
├── index.html
├── modules.html
├── exercices.html
├── projets.html
├── ia.html
├── ressources.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── app.js
│       └── content.js
└── README.md
```

Choix technique : HTML, CSS et JavaScript statiques.

Raisons :

- compatible directement avec GitHub Pages ;
- aucune installation obligatoire pour consulter le site ;
- contenu facile à modifier ;
- pas de dépendance externe ;
- impression PDF possible grâce à la feuille de style `@media print`.

## Lancer le site en local

Option simple : ouvrir `index.html` dans un navigateur.

Option recommandée avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Publier sur GitHub Pages

1. Créer un dépôt GitHub.
2. Envoyer ces fichiers dans le dépôt.
3. Aller dans `Settings` > `Pages`.
4. Dans `Build and deployment`, choisir `Deploy from a branch`.
5. Sélectionner la branche `main` et le dossier `/root`.
6. Enregistrer.

Le site sera publié à une adresse du type :

```text
https://votre-compte.github.io/nom-du-depot/
```

## Modifier ou ajouter une leçon

Le contenu des modules se trouve dans :

```text
assets/js/content.js
```

Chaque module suit cette structure :

- `id`
- `title`
- `subtitle`
- `objectives`
- `analogy`
- `explanation`
- `code`
- `activity`
- `exercises`
- `mistakes`
- `summary`
- `miniChallenge`

Pour modifier une leçon, changer les textes du module concerné.

Pour ajouter un exercice, ajouter un objet dans `exercises` :

```js
{
  level: "Niveau 1 : je découvre",
  title: "Titre de l'exercice",
  prompt: "Énoncé",
  hints: ["Indice 1", "Indice 2"],
  solution: "Correction expliquée.",
  variant: "Variante plus difficile."
}
```

Les corrigés sont automatiquement affichés dans un bloc masqué.

## Adapter le contenu pour un enseignant

Suggestions :

- utiliser les activités sans ordinateur avant les exemples Python ;
- faire travailler les élèves par binômes sur les exercices de niveau 2 ;
- réserver le niveau 3 aux élèves plus rapides ou aux séances de défi ;
- demander aux élèves de tenir un journal de bord : objectif, essai, erreur, correction, prochaine étape ;
- imprimer certaines leçons en PDF depuis le navigateur ;
- utiliser la page `ia.html` comme charte de classe pour l'usage de l'IA.

## Progression des modules

- Module 0 : bienvenue dans le monde du code
- Module 1 : installer et utiliser ses outils
- Module 2 : afficher et recevoir des informations
- Module 3 : variables et types
- Module 4 : conditions et décisions
- Module 5 : boucles
- Module 6 : fonctions
- Module 7 : structures de données simples
- Module 8 : raisonnement algorithmique
- Module 9 : algorithmes de tri et de recherche
- Module 10 : mini-projets guidés
- Module 11 : introduction à la programmation orientée objet
- Module 12 : projets finaux

## Notes de maintenance

- `assets/js/content.js` contient les textes pédagogiques.
- `assets/js/app.js` contient le rendu des pages et les interactions.
- `assets/css/styles.css` contient le style écran et impression.
- La progression est enregistrée dans `localStorage`, donc uniquement dans le navigateur de l'élève.
- Aucune donnée n'est envoyée à un serveur.
