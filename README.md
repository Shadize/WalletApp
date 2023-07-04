
DESCRIPTION

Ce projet est une application web de gestion de ressources humaines d'entreprises. Il offre plusieurs modules pour gérer de manière centralisée des aspects divers tels que la gestion des employés, des contrats, des documents, des timesheets, des flottes de véhicules, des salaires et des compétences des employés.
Il s'agit d'un projet collaboratif dans le cadre d'un cours de développement web dans un Bachelier en informatique de gestion. 

Le Front-end de l'application à été créer avec Angular Framework
Le Back-end de l'application à été créer avec Srping boot. 

Dans ce projet collaboratif je me suis occuper des modules Document et Salary. Accessoirement dans le Front-end je me suis aussi occuper du Login, Register et Logout
Veuillez aussi noter que dans l'application finale tous les modules n'ont pas été fait à cause de notre limitation de 2 modules par personnes.

#

LANCEMENT DE L'APPLICATION
- Avant toute choses, exécuté la commande "npm install" dans un terminal afin d'obtenir et mettre à jour toutes les dépnedances et packages
- Le back-end s'exécute avec le bouton d'exécution lorsque vous vous trouver dans "WalletApplication.java". Se trouve facilement sur IntelliJ. Pour VS Code il faudrait installer le Extension Pack for Java et le Spring boot Extension pack pour le voir. Il vous faudra aussi lier votre éditeur avec une base de données (PostgreSQL dans notre cas) avec votre editeur ou avec Intellij (Avec DataGrip par exemple)
- Le front-end s'exécute ensuite avec la commande "ng serve"
#



TABLE DES MATIÈRES

DEMANDE INITIALE

SERVICE À DÉVELOPPER

CONTRAINTE CLIENT

CAHIER DES CHARGES

MODULE 1 : GESTION DES ENTREPRISES

MODULE 2 : GESTION DES EMPLOYÉS

MODULE 3 : GESTION DES CONTRATS

MODULE 4 : GESTION DES DOCUMENTS

MODULE 5 : GESTION DES TIMESHEETS

MODULE 6 : GESTION DES FLEETS

MODULE 7 : GESTION DES SALAIRES

MODULE 8 : GESTION DES SKILLS DE L’EMPLOYÉS

#
DEMANDE INITIALE

Le client souhaite une application permettant la gestion des entreprises qui souscrivent à leurs services. Le service devra permettre de gérer l’entreprise, les employés, les contrats des différents consultants, les compagnies liées à l’entreprise ainsi que la gestion des documents.
#


SERVICE À DÉVELOPPER

Le nouveau service que le client souhaite mettre en place devra répondre aux fonctionnalités suivantes:


Module 1: gestion complète d’une entreprise (création, modification, suppression)

Module 2: gestion complète des employés

Module 3: gestion complète des contrats

Module 4: gestion complète des documents

Module 5: gestion complète des timesheets

Module 6: gestion complète des fleets

Module 7: gestion complète des salaires

Module 8: gestion complète des skills des employés

#

CONTRAINTE CLIENT

Développement d'une solution web design et moderne, les écrans devront avoir une cohérence entre eux.

Les listes, les formulaires et les écrans de détail doivent se ressembler.

#
CAHIER DES CHARGES

Afin de vous aider, voici un début de cahier des charges. Pour ne pas vous cadenasser, je n’ai mis que très peu de règles de gestion. Vous n’aurez aucune consigne sur le design de l’application si ce n’est qu’elle doit être moderne et cohérente.


#
Remarques très importantes:


Vous ne devez pas vous limiter à l'énoncé. J'attends de vous de la créativité. Vous devez imaginer et concevoir cette application comme si c'était une application réelle.

Vous devez être autonome. Je suis disponible pour vous aider, mais il est important que vous fassiez le travail de recherche au préalable.

Pas de push sur la branche "main". Les chefs d'équipes devront créer une branche "dev".

Des push réguliers sur le repo Git tous les jours de travail.

Des branches par personne/fonctionnalité.


#
MODULE 1 : GESTION DES ENTREPRISES

Description

L'application étant une application centralisée, celle-ci devra permettre de gérer plusieurs entreprises. Cela signifie donc que toute l'application devra filtrer les données en fonction de l'entreprise choisie. Un champ spécifique permettra de définir si l'entreprise est gérée ou non par le client.



Règles de gestion

Une entreprise pourra posséder un ensemble d'organisations, par exemple RH / MAINT / SEARCH.

Une entreprise pourra avoir plusieurs employés.

Une entreprise pourra être liée à plusieurs contrats.

Éléments techniques à développer


Vous devrez développer les opérations CRUD pour les entités suivantes :


Company

Organization

Vous devrez également implémenter des écrans permettant de les lier.


#
MODULE 2 : GESTION DES EMPLOYÉS

Description

Pour chaque entreprise, le client aimerait pouvoir gérer les employés. Les employés devront donc être filtrés en fonction de l'entreprise. Ce module sera assez court, cependant il est crucial qu'il soit développé rapidement afin de permettre la création des autres modules.



Règles de gestion

Un employé doit appartenir à une et une seule entreprise.

Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :



Employee

Par la suite, au travers des différents modules, vous lierez les différentes entités. Il serait intéressant de développer depuis l'écran détail les différents liens (pouvoir naviguer vers les autres détails, par exemple un contrat ou autre).


#
MODULE 3 : GESTION DES CONTRATS

Description

Le client gère principalement des entreprises de consulting, il faut donc pouvoir gérer les contrats/missions des consultants.



Règles de gestion

Un contrat lie deux entreprises.

Un contrat est lié à un seul employé.

Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :


Contract


#
MODULE 4 : GESTION DES DOCUMENTS

Description

Le client aimerait pouvoir gérer les documents liés à une entreprise. Un document peut être, par exemple, une facture, une fiche de paie, une note de frais, etc.



Règles de gestion

Un document est lié à une organisation.

Un document peut être lié à un employé.

Un document peut être lié à un contrat.

Éléments techniques à développer


Vous devrez développer les opérations CRUD pour l'entité suivante :


Document

Idéalement, il faudrait pouvoir générer une sorte d'explorateur de fichiers.

#

MODULE 5 : GESTION DES TIMESHEETS

Description

Le client aimerait pouvoir gérer les horaires des consultants, permettre de définir sur quelle mission ils ont travaillé et obtenir des graphiques.



Règles de gestion

Un élément de la timesheet est obligatoirement lié à un employé et à un contrat.



Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :


Timesheet

Il faut générer un agenda pour chaque employé sur lequel on afficherait les prestations effectuées par l'employé.

#

MODULE 6 : GESTION DES FLEETS

Description

Les consultants ont généralement droit à une voiture de fonction, il est donc important de pouvoir gérer cela.



Règles de gestion

Un fleet est attribué à un employé.

Un fleet peut ne pas être attribué à un employé.

Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :


Fleet

#
MODULE 7 : GESTION DES SALAIRES

Description

Dans l'application, il est nécessaire de lier les salaires aux employés.



Règles de gestion

Un salaire est lié à un employé.

Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :


Salary

#
MODULE 8 : GESTION DES SKILLS DES EMPLOYÉS

Description

Dans l'application, il est nécessaire de lier les compétences aux employés.



Règles de gestion

Un skill n'est pas limité à un employé.

Éléments techniques à développer

Vous devrez développer les opérations CRUD pour l'entité suivante :


Skill

Il est important ici de développer un écran permettant d'ajouter/éditer/supprimer des compétences. Il est également important de lier les employés aux compétences.
