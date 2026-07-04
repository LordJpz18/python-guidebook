window.COURSE = {
  goodPrompts: [
    "Explique-moi cette erreur avec des mots simples.",
    "Donne-moi un indice, mais pas la solution.",
    "Pose-moi une question pour m'aider à trouver la réponse.",
    "Voici mon code, aide-moi à comprendre pourquoi il ne marche pas.",
    "Peux-tu me proposer un test pour vérifier mon programme ?",
    "Explique-moi ce concept avec une analogie."
  ],
  badPrompts: [
    "Fais tout l'exercice à ma place.",
    "Donne-moi directement le code complet.",
    "Corrige sans m'expliquer.",
    "Je veux juste la réponse."
  ],
  modules: [
    {
      id: 0,
      title: "Bienvenue dans le monde du code",
      subtitle: "Programmer, c'est résoudre un problème étape par étape.",
      objectives: ["Comprendre ce qu'est un programme.", "Différencier humain, ordinateur et instruction.", "Découvrir Python et le raisonnement algorithmique."],
      analogy: "Un programme ressemble à une recette. Si la recette dit simplement 'prépare un goûter', chacun imagine autre chose. Si elle dit 'prends deux tranches de pain, ajoute de la confiture, referme', l'action devient claire.",
      explanation: "Un ordinateur ne devine pas. Il suit des instructions précises, dans l'ordre. Programmer, ce n'est donc pas seulement écrire du code. C'est apprendre à découper un problème, choisir des étapes, les tester, puis corriger ce qui ne marche pas. Python est un langage accessible pour débuter, car beaucoup de commandes se lisent presque comme de l'anglais simple.",
      code: "print('Bonjour, je commence Python !')",
      activity: "Sans ordinateur, écris les instructions pour guider un robot imaginaire de la porte jusqu'à une chaise. Un camarade joue le robot et suit seulement ce que tu dis.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Recette-algorithme",
          prompt: "Écris une recette de tartine en 6 étapes très précises.",
          hints: ["Commence par le matériel.", "Vérifie que chaque action est petite et claire."],
          solution: "Une solution possible : 1. Prendre une assiette. 2. Poser une tranche de pain. 3. Ouvrir le pot. 4. Prendre un peu de confiture avec un couteau. 5. Étaler la confiture. 6. Refermer le pot. L'idée importante est la précision.",
          variant: "Ajoute un test : que faire si le pot est vide ?"
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Robot dans la pièce",
          prompt: "Écris un algorithme pour aller d'une table à une porte en utilisant seulement : avancer, tourner à gauche, tourner à droite.",
          hints: ["Dessine d'abord la pièce.", "Compte les pas avant d'écrire."],
          solution: "Il faut d'abord représenter le chemin, puis transformer le dessin en actions. Exemple : avancer 3 pas, tourner à droite, avancer 2 pas. Une erreur fréquente est de dire 'va à la porte', ce qui n'est pas assez précis pour un robot.",
          variant: "Ajoute un obstacle à contourner."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Programme humain",
          prompt: "Invente un mini-langage avec 4 commandes et fais exécuter un dessin simple par un camarade.",
          hints: ["Choisis peu de commandes.", "Teste ton langage sur un dessin très simple."],
          solution: "Un bon mini-langage peut contenir : haut, bas, gauche, droite. Pour dessiner un carré sur quadrillage, répète : droite, droite, bas, bas, gauche, gauche, haut, haut. L'étape essentielle est de tester si les commandes suffisent.",
          variant: "Ajoute une commande 'répète 3 fois'."
        }
      ],
      mistakes: ["Donner une consigne trop vague.", "Oublier l'ordre des étapes.", "Changer plusieurs choses en même temps pendant la correction."],
      summary: "Un programme est une suite d'instructions. Un algorithme est la méthode avant le code. Python va nous aider à transformer nos idées en programmes testables.",
      miniChallenge: "Écris l'algorithme papier d'un distributeur de boisson : choisir, payer, recevoir, vérifier."
    },
    {
      id: 1,
      title: "Installer et utiliser ses outils",
      subtitle: "Découvrir l'endroit où l'on écrit, lance et corrige son code.",
      objectives: ["Comprendre ce qu'est un IDE.", "Utiliser un fichier .py, le bouton Run et la console.", "Lire les erreurs comme des messages d'aide."],
      analogy: "Un IDE est un atelier. Il y a une table pour écrire le code, un bouton pour lancer la machine, et une zone de messages pour voir ce qui se passe.",
      explanation: "Pour écrire du Python, tu peux utiliser Thonny, VS Code ou Replit. Un fichier Python se termine souvent par .py. Le bouton Run lance le programme. Le terminal ou la console affiche les résultats et les messages d'erreur. Une erreur n'est pas une punition : c'est un indice pour trouver ce que Python n'a pas compris.",
      code: "# mon_premier_programme.py\nprint('Programme lancé !')",
      activity: "Ouvre ton outil Python, crée un fichier bonjour.py, sauvegarde-le, puis lance-le. Change ensuite le texte affiché.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Premier fichier",
          prompt: "Crée un fichier salut.py qui affiche une phrase de bienvenue.",
          hints: ["Le nom finit par .py.", "Utilise print()."],
          solution: "On crée un fichier nommé salut.py, puis on écrit print('Bienvenue !'). On sauvegarde avant de lancer. Si rien ne s'affiche, vérifie que tu exécutes le bon fichier.",
          variant: "Affiche deux lignes."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Lire une erreur",
          prompt: "Écris volontairement print('Bonjour) puis observe le message d'erreur.",
          hints: ["Regarde la ligne indiquée.", "Cherche ce qui est ouvert mais pas fermé."],
          solution: "Python signale une chaîne de caractères mal fermée. Il manque une apostrophe avant la parenthèse. La correction est print('Bonjour'). L'idée est de lire le message avant de paniquer.",
          variant: "Provoque puis corrige une erreur de parenthèse."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Indentation détective",
          prompt: "Teste un petit if avec une ligne mal indentée, puis corrige-le.",
          hints: ["Les blocs Python utilisent des espaces au début des lignes.", "Les lignes dans le bloc doivent être alignées."],
          solution: "Après if, Python attend un bloc indenté. Exemple correct :\nif True:\n    print('oui')\nSi print commence tout au bord, Python ne sait pas ce qui appartient au if.",
          variant: "Ajoute une deuxième ligne dans le bloc."
        }
      ],
      mistakes: ["Oublier de sauvegarder.", "Lancer un autre fichier que celui modifié.", "Effacer les espaces d'indentation.", "Ne lire que la dernière ligne d'une erreur."],
      summary: "Un outil de code sert à écrire, sauvegarder, lancer et corriger. Les messages d'erreur sont des indices utiles.",
      miniChallenge: "Prépare un dossier Python avec trois fichiers : bonjour.py, test_erreur.py et notes.txt."
    },
    {
      id: 2,
      title: "Afficher et recevoir des informations",
      subtitle: "Faire parler un programme et lui poser des questions.",
      objectives: ["Utiliser print().", "Écrire des chaînes de caractères.", "Ajouter des commentaires.", "Utiliser input()."],
      analogy: "print() est comme une bulle de BD : le programme parle. input() est comme un micro : le programme attend ta réponse.",
      explanation: "Une chaîne de caractères est du texte entre guillemets ou apostrophes. Un commentaire commence par # : Python l'ignore, mais il aide les humains à comprendre. input() demande une réponse à l'utilisateur et récupère toujours du texte.",
      code: "# Le robot demande un prénom\nprenom = input('Quel est ton prénom ? ')\nprint('Bonjour ' + prenom + ' !')",
      activity: "Crée un robot qui pose deux questions et répond avec une phrase personnalisée.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Phrase affichée",
          prompt: "Affiche la phrase : J'apprends Python.",
          hints: ["Utilise print().", "Le texte doit être entre guillemets."],
          solution: "Code possible : print(\"J'apprends Python.\"). Les guillemets doubles sont pratiques quand le texte contient une apostrophe.",
          variant: "Affiche aussi ton animal préféré."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Carte d'identité",
          prompt: "Demande le prénom, l'âge et la ville, puis affiche une mini carte d'identité.",
          hints: ["Utilise trois input().", "Affiche chaque information sur une ligne."],
          solution: "On stocke chaque réponse dans une variable : prenom, age, ville. Puis on affiche : print('Prénom : ' + prenom). Ici l'âge reste du texte, ce qui suffit pour l'afficher.",
          variant: "Ajoute une question sur le loisir préféré."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Petit robot bavard",
          prompt: "Le robot demande ton prénom et ton humeur, puis répond différemment selon les mots, sans utiliser if pour le moment.",
          hints: ["Tu peux fabriquer une phrase avec les réponses.", "Le robot n'a pas encore besoin de décider."],
          solution: "Exemple : print('Bonjour ' + prenom + ', tu dis que tu es ' + humeur + '. Je note cela !'). L'objectif est de combiner du texte et les réponses.",
          variant: "Ajoute une phrase de fin différente écrite par toi."
        }
      ],
      mistakes: ["Oublier les guillemets autour du texte.", "Confondre le texte 'prenom' et la variable prenom.", "Essayer de calculer avec input() avant de convertir."],
      summary: "print() affiche. input() demande. Les commentaires expliquent le code aux humains.",
      miniChallenge: "Crée un mini-dialogue de 5 lignes entre toi et un robot."
    },
    {
      id: 3,
      title: "Variables et types",
      subtitle: "Ranger des informations dans des boîtes bien étiquetées.",
      objectives: ["Comprendre les variables.", "Découvrir int, float, str et bool.", "Convertir avec int(), float() et str()."],
      analogy: "Une variable est une boîte avec une étiquette. Le type décrit ce qu'il y a dedans : nombre entier, nombre à virgule, texte ou vrai/faux.",
      explanation: "Une variable garde une valeur pour la réutiliser. Python peut additionner des nombres, coller des textes, ou tester des booléens. input() donne du texte : pour calculer, il faut souvent convertir avec int() ou float().",
      code: "age = int(input('Quel âge as-tu ? '))\nage_dans_10_ans = age + 10\nprint('Dans 10 ans, tu auras ' + str(age_dans_10_ans) + ' ans.')",
      activity: "Dessine trois boîtes : score, pseudo, a_gagne. Mets une valeur dans chaque boîte et indique son type.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Âge dans 10 ans",
          prompt: "Demande un âge et affiche l'âge dans 10 ans.",
          hints: ["Convertis la réponse avec int().", "Convertis le résultat en str() pour l'ajouter à du texte."],
          solution: "On écrit age = int(input(...)), puis futur = age + 10. Pour afficher avec une phrase, on peut faire print('Tu auras ' + str(futur) + ' ans'). Sans int(), Python collerait du texte au lieu de calculer.",
          variant: "Calcule aussi l'âge dans 20 ans."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Addition de scores",
          prompt: "Demande deux scores et affiche le total.",
          hints: ["Deux input().", "Deux conversions en int()."],
          solution: "score1 = int(input('Score 1 ? ')); score2 = int(input('Score 2 ? ')); total = score1 + score2. Une erreur possible est d'obtenir '1020' au lieu de 30 si les valeurs restent du texte.",
          variant: "Affiche aussi la différence entre les deux scores."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Prix avec décimales",
          prompt: "Demande un prix et une quantité, puis affiche le prix total.",
          hints: ["Le prix peut utiliser float().", "La quantité peut utiliser int()."],
          solution: "prix = float(input('Prix ? ')); quantite = int(input('Quantité ? ')); total = prix * quantite. Le type float sert pour les nombres décimaux.",
          variant: "Ajoute une réduction de 10%."
        }
      ],
      mistakes: ["Choisir des noms de variables flous comme x pour tout.", "Oublier que input() renvoie du texte.", "Utiliser une virgule française dans un float : Python attend souvent 3.5, pas 3,5."],
      summary: "Les variables mémorisent des valeurs. Les types aident Python à savoir quoi faire avec ces valeurs.",
      miniChallenge: "Crée un convertisseur minutes vers secondes."
    },
    {
      id: 4,
      title: "Conditions et décisions",
      subtitle: "Apprendre au programme à choisir.",
      objectives: ["Utiliser if, elif et else.", "Comparer des valeurs.", "Combiner avec and, or et not."],
      analogy: "Une condition ressemble à un panneau de décision : s'il pleut, prends un manteau ; sinon, prends une casquette.",
      explanation: "Une condition teste si une phrase est vraie ou fausse. Python exécute le bloc indenté quand le test est vrai. elif permet d'essayer une autre possibilité. else sert quand aucune condition précédente n'est vraie.",
      code: "age = int(input('Âge ? '))\nif age >= 10:\n    print('Tu peux essayer le défi.')\nelse:\n    print('Commence par l'entraînement.')",
      activity: "Écris sur papier trois décisions de la journée sous la forme : si..., sinon...",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Vérifier un âge",
          prompt: "Demande un âge. Si l'âge est au moins 12, affiche 'niveau expert', sinon 'niveau découverte'.",
          hints: ["Utilise >=.", "N'oublie pas les deux-points après if et else."],
          solution: "age = int(input('Âge ? ')) puis if age >= 12: print('niveau expert') else: print('niveau découverte'). Le bloc après if doit être indenté.",
          variant: "Ajoute un message spécial pour exactement 11 ans."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Mini quiz",
          prompt: "Pose une question de calcul. Si la réponse est correcte, affiche bravo.",
          hints: ["Convertis la réponse en int().", "Compare avec ==."],
          solution: "Pour 7 + 5, on teste if reponse == 12. Attention : = affecte une valeur, == compare deux valeurs.",
          variant: "Ajoute une deuxième question."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Météo et vêtements",
          prompt: "Demande s'il pleut et s'il fait froid. Propose une tenue avec and et or.",
          hints: ["Les réponses peuvent être 'oui' ou 'non'.", "Teste deux conditions ensemble."],
          solution: "if pluie == 'oui' and froid == 'oui': print('manteau imperméable'). Avec or, une seule condition vraie suffit. Il faut choisir des règles simples et les tester.",
          variant: "Ajoute le cas 'il y a du vent'."
        }
      ],
      mistakes: ["Utiliser = au lieu de ==.", "Oublier l'indentation.", "Mettre trop de conditions compliquées avant d'avoir testé les cas simples."],
      summary: "Les conditions permettent de prendre des décisions. Les comparaisons produisent vrai ou faux.",
      miniChallenge: "Crée un jeu qui demande un mot secret et affiche gagné ou perdu."
    },
    {
      id: 5,
      title: "Boucles",
      subtitle: "Répéter sans recopier cent fois.",
      objectives: ["Utiliser while et for.", "Comprendre range().", "Éviter les boucles infinies."],
      analogy: "Une boucle est comme une chanson avec un refrain. Au lieu de réécrire le refrain à chaque fois, on dit combien de fois il revient.",
      explanation: "for sert souvent quand on connaît le nombre de répétitions. while sert quand on répète tant qu'une condition est vraie. Une boucle infinie arrive quand la condition ne devient jamais fausse.",
      code: "for nombre in range(1, 11):\n    print(nombre)\n\nmot = ''\nwhile mot != 'python':\n    mot = input('Mot de passe ? ')\nprint('Bienvenue !')",
      activity: "Sur papier, écris les valeurs prises par un compteur de 1 à 5.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Compter",
          prompt: "Affiche les nombres de 1 à 10 avec une boucle for.",
          hints: ["range(1, 11) s'arrête avant 11.", "La ligne print est indentée."],
          solution: "for i in range(1, 11): print(i). range(1, 11) produit 1, 2, ..., 10. Le nom i est souvent utilisé pour un compteur.",
          variant: "Compte de 2 en 2."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Table de multiplication",
          prompt: "Demande un nombre et affiche sa table de 1 à 10.",
          hints: ["Utilise int(input()).", "Dans la boucle, calcule nombre * i."],
          solution: "On demande nombre, puis for i in range(1, 11): print(nombre * i). On peut afficher une phrase complète avec str() ou avec une f-string.",
          variant: "Affiche aussi '3 x 4 = 12'."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Mot de passe",
          prompt: "Demande un mot de passe jusqu'à ce qu'il soit correct.",
          hints: ["while reponse != secret.", "Change reponse dans la boucle."],
          solution: "secret = 'dragon'; reponse = ''; while reponse != secret: reponse = input('Mot de passe ? '). Si on oublie de redemander la réponse dans la boucle, elle peut devenir infinie.",
          variant: "Compte le nombre d'essais."
        }
      ],
      mistakes: ["Oublier de modifier la variable testée dans while.", "Penser que range(10) va jusqu'à 10 inclus.", "Mettre une instruction hors de la boucle par erreur d'indentation."],
      summary: "Les boucles répètent des actions. for est idéal pour compter, while pour attendre qu'une condition change.",
      miniChallenge: "Dessine un escalier de # avec 5 lignes."
    },
    {
      id: 6,
      title: "Fonctions",
      subtitle: "Fabriquer ses propres outils.",
      objectives: ["Créer une fonction.", "Utiliser des paramètres.", "Renvoyer une valeur avec return.", "Découper un problème."],
      analogy: "Une fonction est une petite machine. Tu lui donnes parfois des ingrédients, elle fait son travail, puis elle peut te rendre un résultat.",
      explanation: "Une fonction évite de recopier le même code. Elle aide aussi à découper un grand problème en petites parties. print() affiche, mais return renvoie une valeur que le programme peut réutiliser.",
      code: "def additionner(a, b):\n    return a + b\n\nresultat = additionner(4, 7)\nprint(resultat)",
      activity: "Choisis une action de la vie quotidienne et transforme-la en fonction : nom, ingrédients, résultat.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Saluer",
          prompt: "Crée une fonction saluer(prenom) qui affiche Bonjour suivi du prénom.",
          hints: ["Commence par def saluer(prenom):", "La ligne print est indentée."],
          solution: "def saluer(prenom): print('Bonjour ' + prenom). Ensuite, saluer('Nina') appelle la fonction. Le paramètre prenom reçoit la valeur donnée.",
          variant: "Ajoute un paramètre heure."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Calculer une moyenne",
          prompt: "Crée une fonction moyenne(a, b, c) qui renvoie la moyenne de trois notes.",
          hints: ["Additionne les trois nombres.", "Divise par 3.", "Utilise return."],
          solution: "def moyenne(a, b, c): return (a + b + c) / 3. On met des parenthèses pour additionner avant de diviser.",
          variant: "Demande les trois notes avec input()."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Nombre pair",
          prompt: "Crée une fonction est_pair(nombre) qui renvoie True si le nombre est pair.",
          hints: ["Utilise le reste de division %.", "Un nombre est pair si nombre % 2 == 0."],
          solution: "def est_pair(nombre): return nombre % 2 == 0. La fonction renvoie directement un booléen. On peut ensuite écrire if est_pair(8): print('pair').",
          variant: "Crée est_impair(nombre)."
        }
      ],
      mistakes: ["Confondre print et return.", "Oublier d'appeler la fonction.", "Créer une fonction trop grande qui fait tout."],
      summary: "Les fonctions rendent le code plus clair, réutilisable et facile à tester.",
      miniChallenge: "Découpe un calculateur de prix en deux fonctions : calculer_total et afficher_ticket."
    },
    {
      id: 7,
      title: "Structures de données simples",
      subtitle: "Garder plusieurs informations ensemble.",
      objectives: ["Utiliser les listes.", "Lire et modifier avec les indices.", "Découvrir tuples et dictionnaires.", "Parcourir une collection."],
      analogy: "Une liste est une étagère avec des cases numérotées. Un dictionnaire est un carnet : chaque mot-clé mène à une information.",
      explanation: "Une liste garde plusieurs valeurs dans un ordre. Les indices commencent à 0. On peut ajouter avec append(), supprimer avec remove(), modifier avec une affectation. Un tuple ressemble à une liste qu'on ne modifie pas. Un dictionnaire associe une clé à une valeur.",
      code: "courses = ['pommes', 'pain', 'lait']\ncourses.append('riz')\nprint(courses[0])\n\nages = {'Lina': 10, 'Noé': 11}\nprint(ages['Lina'])",
      activity: "Écris une liste de 5 objets de ton cartable. Indique l'objet à l'indice 0 et celui à l'indice 3.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Liste de courses",
          prompt: "Crée une liste de courses, ajoute un élément, puis affiche toute la liste.",
          hints: ["Utilise des crochets [].", "append() ajoute à la fin."],
          solution: "courses = ['pain', 'eau']; courses.append('fromage'); print(courses). La liste garde l'ordre des éléments.",
          variant: "Supprime un élément avec remove()."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Carnet de notes",
          prompt: "Crée une liste de notes et calcule la moyenne avec une boucle.",
          hints: ["Crée une variable total.", "Parcours la liste avec for note in notes."],
          solution: "total = 0; for note in notes: total += note; moyenne = total / len(notes). len() donne le nombre d'éléments.",
          variant: "Affiche la meilleure note avec max()."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Dictionnaire prénom vers âge",
          prompt: "Crée un dictionnaire de trois prénoms et affiche l'âge demandé par l'utilisateur.",
          hints: ["La clé est le prénom.", "Vérifie si la clé existe avec in."],
          solution: "ages = {'Maya': 9, 'Tom': 11}; prenom = input('Prénom ? '); if prenom in ages: print(ages[prenom]). Cela évite une erreur si le prénom n'existe pas.",
          variant: "Ajoute un nouveau prénom saisi par l'utilisateur."
        }
      ],
      mistakes: ["Oublier que le premier indice est 0.", "Modifier une liste pendant qu'on la parcourt sans réfléchir.", "Chercher une clé absente dans un dictionnaire."],
      summary: "Les listes et dictionnaires permettent de manipuler des groupes de données.",
      miniChallenge: "Crée un inventaire de jeu vidéo avec objets et quantités."
    },
    {
      id: 8,
      title: "Raisonnement algorithmique",
      subtitle: "Le coeur du cours : penser avant de coder.",
      objectives: ["Décomposer un problème.", "Écrire du pseudo-code.", "Repérer entrées, traitements et sorties.", "Tester avec de petits exemples.", "Corriger étape par étape."],
      analogy: "Avant de construire une cabane, on fait un plan. Avant d'écrire Python, on peut faire le plan de la solution avec des mots simples.",
      explanation: "Un bon programme commence souvent par trois questions : quelles sont les entrées ? Quel traitement faut-il faire ? Quelles sorties veut-on obtenir ? Ensuite, on teste sur un petit exemple à la main. Le pseudo-code sert à écrire l'idée sans se battre tout de suite avec la syntaxe Python.",
      code: "# Problème : trouver le plus grand nombre\nnombres = [4, 9, 2, 7]\nplus_grand = nombres[0]\nfor nombre in nombres:\n    if nombre > plus_grand:\n        plus_grand = nombre\nprint(plus_grand)",
      activity: "Prends la liste [3, 8, 1, 8]. Sur papier, suis la variable plus_grand après chaque élément.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Entrées, traitement, sortie",
          prompt: "Pour un programme qui calcule une moyenne, écris les entrées, le traitement et la sortie.",
          hints: ["Les entrées sont les notes.", "Le traitement est un calcul."],
          solution: "Entrées : plusieurs notes. Traitement : additionner les notes puis diviser par le nombre de notes. Sortie : la moyenne. Cette étape aide à éviter de coder au hasard.",
          variant: "Fais la même chose pour un programme de mot de passe."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Trouver le plus grand",
          prompt: "Écris le pseudo-code puis le Python pour trouver le plus grand nombre d'une liste.",
          hints: ["Commence avec le premier nombre.", "Compare chaque nombre au plus grand connu."],
          solution: "Idée : garder le meilleur candidat. Code : plus_grand = nombres[0]; pour chaque nombre, si nombre > plus_grand, remplacer plus_grand. Erreur possible : commencer à 0 alors que la liste peut contenir seulement des nombres négatifs.",
          variant: "Trouve aussi le plus petit."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Compter un mot",
          prompt: "Compte combien de fois le mot 'chat' apparaît dans une liste de mots.",
          hints: ["Crée compteur = 0.", "Ajoute 1 quand le mot est trouvé."],
          solution: "compteur = 0; for mot in mots: if mot == 'chat': compteur += 1. On teste avec ['chat', 'chien', 'chat'] pour obtenir 2.",
          variant: "Demande le mot à chercher avec input()."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Chercher un élément",
          prompt: "Écris un algorithme qui dit si un prénom est dans une liste.",
          hints: ["Utilise un booléen trouve.", "Passe chaque prénom en revue."],
          solution: "trouve = False; for prenom in prenoms: if prenom == cible: trouve = True. À la fin, on affiche selon trouve. Python possède aussi 'in', mais l'exercice apprend la méthode.",
          variant: "Affiche la position du prénom."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Inverser une liste",
          prompt: "Crée une nouvelle liste contenant les éléments dans l'ordre inverse.",
          hints: ["Pars d'une liste vide.", "Parcours les indices de la fin vers le début."],
          solution: "inverse = []; for i in range(len(liste) - 1, -1, -1): inverse.append(liste[i]). On vérifie avec [1, 2, 3] qui devient [3, 2, 1].",
          variant: "Inverse une phrase mot par mot."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Filtrer des valeurs",
          prompt: "À partir d'une liste de scores, garde seulement les scores supérieurs ou égaux à 50.",
          hints: ["Crée une nouvelle liste.", "Ajoute seulement les scores qui réussissent le test."],
          solution: "valides = []; for score in scores: if score >= 50: valides.append(score). L'idée de filtrer est très utilisée dans les vrais programmes.",
          variant: "Garde les scores entre 50 et 100."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Transformer une liste",
          prompt: "Transforme une liste de prix en une liste de prix après réduction de 10%.",
          hints: ["N'écrase pas tout de suite l'ancienne liste.", "Nouveau prix = prix * 0.9."],
          solution: "reduits = []; for prix in prix_depart: reduits.append(prix * 0.9). On teste avec [10, 20] pour obtenir [9, 18].",
          variant: "Arrondis à deux décimales avec round()."
        }
      ],
      mistakes: ["Coder avant d'avoir compris les entrées et sorties.", "Tester seulement avec un exemple facile.", "Corriger plusieurs lignes à la fois.", "Oublier le cas d'une liste vide."],
      summary: "Raisonner, c'est préparer la solution : décomposer, écrire l'idée, tester à la main, coder petit à petit, puis vérifier.",
      miniChallenge: "Résous sur papier puis en Python : dans une liste de températures, compte les jours au-dessus de 25 degrés."
    },
    {
      id: 9,
      title: "Algorithmes de tri et de recherche",
      subtitle: "Ranger et retrouver plus facilement.",
      objectives: ["Comprendre la recherche linéaire.", "Découvrir l'idée du tri.", "Simuler le tri par sélection et le tri à bulles.", "Comparer les méthodes avec des objets réels."],
      analogy: "Chercher un prénom dans une liste non rangée, c'est regarder chaque carte une par une. Trier, c'est ranger les cartes pour mieux lire, comparer et retrouver.",
      explanation: "La recherche linéaire inspecte les éléments dans l'ordre jusqu'à trouver la cible. Trier met des valeurs dans un ordre choisi. Le tri par sélection cherche le plus petit élément restant et le place au bon endroit. Le tri à bulles compare des voisins et échange ceux qui sont dans le mauvais ordre.",
      code: "scores = [42, 15, 90, 63]\nfor i in range(len(scores)):\n    indice_min = i\n    for j in range(i + 1, len(scores)):\n        if scores[j] < scores[indice_min]:\n            indice_min = j\n    scores[i], scores[indice_min] = scores[indice_min], scores[i]\nprint(scores)",
      activity: "Avec des cartes numérotées, simule un tri par sélection : à chaque tour, trouve la plus petite carte restante et place-la à gauche.",
      hasSortLab: true,
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Trier trois nombres à la main",
          prompt: "Range 8, 3, 5 du plus petit au plus grand et explique tes comparaisons.",
          hints: ["Cherche d'abord le plus petit.", "Place ensuite les deux restants."],
          solution: "Le plus petit est 3. Entre 8 et 5, le plus petit est 5. Résultat : 3, 5, 8. L'explication compte autant que le résultat.",
          variant: "Fais la même chose avec 4 nombres."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Trouver le plus petit",
          prompt: "Écris un programme qui trouve le plus petit nombre d'une liste.",
          hints: ["Commence avec le premier élément.", "Remplace si tu trouves plus petit."],
          solution: "plus_petit = nombres[0]; for n in nombres: if n < plus_petit: plus_petit = n. C'est la base du tri par sélection.",
          variant: "Trouve l'indice du plus petit."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Recherche linéaire",
          prompt: "Cherche un prénom dans une liste en regardant les éléments un par un.",
          hints: ["Utilise une boucle.", "Garde un booléen trouve."],
          solution: "On parcourt toute la liste jusqu'à trouver le prénom. Cette méthode est simple et fonctionne même si la liste n'est pas triée.",
          variant: "Compte combien de comparaisons sont nécessaires."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Simuler le tri à bulles",
          prompt: "Écris une version simple du tri à bulles pour classer des scores.",
          hints: ["Compare deux voisins.", "Échange-les s'ils sont dans le mauvais ordre.", "Répète plusieurs passages."],
          solution: "Deux boucles sont utiles. À chaque passage, on compare scores[i] et scores[i + 1]. Si le premier est plus grand, on échange. Erreur possible : dépasser la fin de la liste avec i + 1.",
          variant: "Affiche la liste après chaque passage."
        }
      ],
      mistakes: ["Confondre chercher et trier.", "Oublier que trier prend souvent plusieurs passages.", "Dépasser les indices de la liste.", "Penser qu'une méthode simple est mauvaise : elle est parfaite pour apprendre."],
      summary: "La recherche retrouve une information. Le tri organise les données. Ces idées servent pour des scores, des livres, des inventaires ou des prénoms.",
      miniChallenge: "Classe une liste de scores, puis affiche les trois meilleurs."
    },
    {
      id: 10,
      title: "Mini-projets guidés",
      subtitle: "Assembler les notions dans de petits programmes utiles ou amusants.",
      objectives: ["Construire par étapes.", "Réutiliser variables, conditions, boucles, fonctions et listes.", "Prévoir des améliorations."],
      analogy: "Un projet ressemble à une maquette. On commence par une version simple qui tient debout, puis on ajoute des détails.",
      explanation: "Pour chaque mini-projet, écris d'abord l'objectif, les données nécessaires, les actions principales, puis une première version très simple. Une fois qu'elle marche, ajoute une amélioration.",
      code: "import random\nsecret = random.randint(1, 20)\nessai = 0\nwhile essai != secret:\n    essai = int(input('Nombre ? '))\n    if essai < secret:\n        print('Plus grand')\n    elif essai > secret:\n        print('Plus petit')\nprint('Gagné !')",
      activity: "Choisis un projet et écris sa version 1 en trois phrases : l'utilisateur fait quoi, le programme calcule quoi, le programme affiche quoi.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Calculatrice simple",
          prompt: "Demande deux nombres et une opération + ou -, puis affiche le résultat.",
          hints: ["Convertis les nombres.", "Utilise if pour choisir l'opération."],
          solution: "On demande a, b et operation. Si operation == '+', on affiche a + b. Si operation == '-', on affiche a - b. Commence avec deux opérations avant d'ajouter * et /.",
          variant: "Ajoute la multiplication."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Quiz interactif",
          prompt: "Crée un quiz de 3 questions avec score.",
          hints: ["score commence à 0.", "Ajoute 1 quand la réponse est correcte."],
          solution: "Chaque question suit le même modèle : demander, comparer, modifier score. Une fonction poser_question peut éviter les répétitions.",
          variant: "Mets les questions dans une liste."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Mini chatbot à règles",
          prompt: "Crée un chatbot qui répond à quelques mots-clés comme bonjour, aide, au revoir.",
          hints: ["Utilise une boucle while.", "Teste si un mot est dans la phrase."],
          solution: "On lit message = input('> '). Si 'bonjour' in message, on répond. Le bot ne comprend pas vraiment : il suit des règles simples. C'est parfait pour apprendre les conditions.",
          variant: "Ajoute un dictionnaire de réponses."
        }
      ],
      mistakes: ["Vouloir tout construire en une fois.", "Ne pas tester la version de base.", "Ajouter des options avant que le coeur fonctionne."],
      summary: "Un projet réussi avance par petites versions testées.",
      miniChallenge: "Choisis entre générateur d'histoires, pierre-feuille-ciseaux, carnet de contacts ou gestionnaire de scores, puis écris le plan de la version 1."
    },
    {
      id: 11,
      title: "Introduction à la programmation orientée objet",
      subtitle: "Créer ses propres modèles.",
      objectives: ["Comprendre objet, classe, attribut et méthode.", "Créer des objets simples.", "Modifier des attributs."],
      analogy: "Une classe est un plan de maison. Un objet est une maison construite avec ce plan. Une fiche de personnage est aussi une classe possible : chaque personnage a un nom, une énergie et des actions.",
      explanation: "La programmation orientée objet permet de regrouper des données et des actions. Une classe décrit le modèle. Un attribut est une information de l'objet. Une méthode est une fonction placée dans la classe.",
      code: "class Personnage:\n    def __init__(self, nom, energie):\n        self.nom = nom\n        self.energie = energie\n\n    def saluer(self):\n        print('Je suis ' + self.nom)\n\nhero = Personnage('Mina', 100)\nhero.saluer()",
      activity: "Dessine une fiche de personnage avec trois attributs et deux actions possibles.",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Classe Chat",
          prompt: "Crée une classe Chat avec nom et couleur, puis une méthode miauler.",
          hints: ["Utilise __init__.", "La méthode reçoit self."],
          solution: "class Chat: def __init__(self, nom, couleur): self.nom = nom; self.couleur = couleur. Puis def miauler(self): print(self.nom + ' miaule'). self désigne l'objet actuel.",
          variant: "Ajoute un attribut age."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Classe Joueur",
          prompt: "Crée un Joueur avec pseudo et score. Ajoute une méthode ajouter_points.",
          hints: ["La méthode prend un paramètre points.", "Modifie self.score."],
          solution: "def ajouter_points(self, points): self.score += points. Cette méthode change l'état de l'objet. On teste avec un joueur qui commence à 0 puis gagne 10 points.",
          variant: "Ajoute une méthode afficher_score."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Classe Robot",
          prompt: "Crée un Robot avec nom, batterie et une méthode avancer qui baisse la batterie.",
          hints: ["Vérifie que la batterie est suffisante.", "Utilise if dans la méthode."],
          solution: "La méthode avancer peut tester if self.batterie > 0: self.batterie -= 1. Sinon, elle affiche que le robot doit se recharger. On retrouve variables, conditions et fonctions dans une classe.",
          variant: "Ajoute une méthode recharger."
        }
      ],
      mistakes: ["Oublier self dans les méthodes.", "Créer une classe quand une simple fonction suffit.", "Confondre la classe Personnage et un objet précis comme hero."],
      summary: "Une classe fabrique des objets. Les attributs gardent les informations, les méthodes décrivent les actions.",
      miniChallenge: "Crée une classe Livre avec titre, auteur, pages et une méthode decrire."
    },
    {
      id: 12,
      title: "Projets finaux",
      subtitle: "Construire un programme complet en restant maître de son raisonnement.",
      objectives: ["Choisir un projet adapté.", "Planifier les fonctionnalités.", "Utiliser l'IA correctement pendant un projet."],
      analogy: "Le projet final est comme une exposition : tu montres ce que tu sais faire, mais tu dois pouvoir expliquer chaque choix.",
      explanation: "Choisis un projet qui te motive. Commence par une version de base. Écris un plan, découpe en petites fonctions, teste souvent, puis ajoute des extensions. L'IA peut donner des indices, proposer des tests ou expliquer une erreur, mais tu dois comprendre et réexpliquer ton code.",
      code: "# Exemple de plan de projet\n# 1. afficher le menu\n# 2. demander une action\n# 3. modifier les données\n# 4. sauvegarder dans une liste ou un dictionnaire\n# 5. afficher le résultat",
      activity: "Choisis deux projets dans la page Projets et compare : lequel est le plus simple pour toi ? lequel te motive le plus ?",
      exercises: [
        {
          level: "Niveau 1 : je découvre",
          title: "Plan de version 1",
          prompt: "Écris les 5 premières fonctionnalités de ton projet final.",
          hints: ["Commence petit.", "Chaque fonctionnalité doit être testable."],
          solution: "Un bon plan de version 1 est concret : afficher un menu, ajouter une donnée, afficher les données, quitter, tester une erreur simple. Les décorations viennent après.",
          variant: "Transforme chaque fonctionnalité en fonction Python."
        },
        {
          level: "Niveau 2 : je m'entraîne",
          title: "Tests papier",
          prompt: "Prépare trois tests pour vérifier ton projet avant de coder.",
          hints: ["Un test normal.", "Un test avec une donnée bizarre.", "Un test avec une erreur d'utilisateur."],
          solution: "Pour un quiz : réponse correcte, réponse fausse, réponse vide. Les tests aident à corriger sans deviner.",
          variant: "Demande à un camarade d'exécuter tes tests."
        },
        {
          level: "Niveau 3 : je relève un défi",
          title: "Présentation",
          prompt: "Prépare une présentation de 2 minutes : objectif, notions utilisées, difficulté rencontrée, amélioration future.",
          hints: ["Montre un exemple d'exécution.", "Explique une fonction importante."],
          solution: "La présentation prouve que tu comprends ton programme. Tu peux montrer une erreur que tu as corrigée : c'est souvent très intéressant.",
          variant: "Ajoute une diapositive avec ton pseudo-code."
        }
      ],
      mistakes: ["Choisir un projet trop grand au départ.", "Garder du code que l'on ne comprend pas.", "Demander à l'IA de produire tout le projet.", "Ne pas tester les cas simples."],
      summary: "Le projet final sert à assembler les notions et à montrer ta méthode de résolution.",
      miniChallenge: "Écris le journal de bord de ton premier jour de projet : objectif, réussite, blocage, prochain pas."
    }
  ],
  projects: [
    { title: "Jeu textuel d'aventure", difficulty: "Moyen", notions: "conditions, boucles, fonctions, dictionnaires", description: "Le joueur explore des lieux, choisit des actions et trouve un objet final.", features: ["Menu de déplacement", "Inventaire", "Deux fins possibles"], extensions: ["Carte plus grande", "Énigmes", "Points de vie"], ai: "Demander à l'IA de relire le plan des salles ou de proposer un test de chemin, pas d'écrire toute l'aventure." },
    { title: "Quiz avec score", difficulty: "Facile", notions: "input, conditions, score, listes", description: "Un quiz pose des questions, vérifie les réponses et affiche un score.", features: ["Au moins 5 questions", "Score final", "Message selon le résultat"], extensions: ["Questions aléatoires", "Niveaux", "Chronomètre papier"], ai: "Demander des idées de questions, puis vérifier soi-même les réponses." },
    { title: "Gestionnaire de bibliothèque", difficulty: "Moyen", notions: "listes, dictionnaires, fonctions", description: "Un programme garde les livres lus ou à lire.", features: ["Ajouter un livre", "Afficher la liste", "Chercher par titre"], extensions: ["Statut lu/non lu", "Note", "Tri par auteur"], ai: "Demander un indice pour organiser les données en dictionnaire." },
    { title: "Mini bestiaire imaginaire", difficulty: "Moyen", notions: "dictionnaires, classes en option", description: "Un carnet de créatures avec nom, élément, force et description.", features: ["Ajouter une créature", "Afficher une fiche", "Comparer deux forces"], extensions: ["Classe Creature", "Recherche par élément", "Classement"], ai: "Demander une analogie pour comprendre classe et objet." },
    { title: "Suivi d'habitudes", difficulty: "Moyen", notions: "listes, boucles, calculs", description: "L'élève suit des habitudes comme lecture, sport ou piano.", features: ["Ajouter une journée", "Compter les réussites", "Afficher une progression"], extensions: ["Objectif hebdomadaire", "Meilleure série", "Graphique texte"], ai: "Demander des exemples de tests avec plusieurs jours." },
    { title: "Simulation de magasin", difficulty: "Moyen", notions: "variables, calculs, dictionnaires", description: "Un client choisit des articles et le programme calcule le total.", features: ["Catalogue", "Panier", "Total"], extensions: ["Réductions", "Stock", "Ticket"], ai: "Demander à l'IA de vérifier une formule de réduction." },
    { title: "Devinette avancée", difficulty: "Facile", notions: "random, while, conditions", description: "Le joueur devine un nombre avec des indices.", features: ["Nombre secret", "Plus grand/plus petit", "Nombre d'essais"], extensions: ["Niveaux", "Score", "Rejouer"], ai: "Demander pourquoi une boucle devient infinie si cela arrive." },
    { title: "Carnet de personnages", difficulty: "Moyen", notions: "classes, listes, méthodes", description: "Créer et afficher des personnages de jeu.", features: ["Classe Personnage", "Ajouter un personnage", "Afficher les fiches"], extensions: ["Gagner expérience", "Combat simple", "Sauvegarde manuelle copiée"], ai: "Demander une explication de self avec ton propre code." },
    { title: "Tri et classement de scores", difficulty: "Difficile", notions: "listes, tri, recherche", description: "Classer des scores de joueurs du plus grand au plus petit.", features: ["Ajouter score", "Trier", "Afficher top 3"], extensions: ["Recherche d'un joueur", "Égalités", "Historique"], ai: "Demander un indice sur l'échange de deux valeurs." },
    { title: "Assistant personnel à règles", difficulty: "Difficile", notions: "conditions, boucles, dictionnaires, fonctions", description: "Un assistant répond à des commandes comme aide, météo fictive, devoirs, rappel.", features: ["Boucle de conversation", "Commandes", "Aide intégrée"], extensions: ["Synonymes", "Journal", "Mode humour"], ai: "Demander à l'IA de proposer des cas de test pour chaque commande." }
  ],
  resources: [
    { title: "Documentation officielle Python", url: "https://docs.python.org/fr/3/", note: "Référence pour les commandes, types et messages d'erreur." },
    { title: "Python Tutorial officiel", url: "https://docs.python.org/3/tutorial/", note: "Source d'inspiration pour la progression des notions, sans reprise de texte." },
    { title: "CS Unplugged", url: "https://www.csunplugged.org/", note: "Idées d'activités débranchées pour comprendre les algorithmes." },
    { title: "Hour of Code", url: "https://hourofcode.com/", note: "Approche ludique et progressive pour jeunes débutants." },
    { title: "Thonny", url: "https://thonny.org/", note: "IDE simple souvent utilisé pour débuter en Python." },
    { title: "Visual Studio Code", url: "https://code.visualstudio.com/", note: "Éditeur puissant pour les élèves plus autonomes." },
    { title: "Replit", url: "https://replit.com/", note: "Environnement en ligne pratique, à utiliser selon les règles de l'établissement." }
  ]
};
