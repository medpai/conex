# CONEX - Connecter l'Expérience Étudiante

## Description du Projet
CONEX est une plateforme web innovante conçue pour enrichir la vie étudiante en facilitant la découverte d'événements, l'engagement dans des clubs et la création de liens entre étudiants. Notre objectif est de créer une communauté universitaire plus connectée et inclusive, particulièrement bénéfique pour les nouveaux arrivants.

## Objectifs Principaux
- Centraliser l'information sur les événements étudiants
- Faciliter l'intégration des nouveaux étudiants
- Promouvoir l'engagement dans la vie associative
- Créer des opportunités de networking entre étudiants

## Références et Inspiration
- [Discord](https://discord.com) - Pour l'aspect communautaire et l'interface utilisateur
- [Meetup](https://www.meetup.com) - Pour la gestion des événements
- [LinkedIn](https://www.linkedin.com) - Pour les aspects de networking
- [Student Life at MIT](https://studentlife.mit.edu) - Pour le contenu et l'organisation

## Palette de Couleurs
### Couleurs Principales
- **Primaire**: #4A90E2 (Bleu royal) - Représente le professionnalisme et la confiance
- **Secondaire**: #50C878 (Vert émeraude) - Symbolise la croissance et le dynamisme
- **Accent**: #FF6B6B (Corail) - Pour les actions importantes et les notifications

### Couleurs Secondaires
- **Fond clair**: #F5F7FA
- **Texte principal**: #2C3E50
- **Gris neutre**: #8492A6

## Wireframes et Interface Utilisateur

### Page d'Accueil
```
+------------------+
|    HEADER        |
|  Logo   Menu     |
+------------------+
|                  |
|  HERO SECTION    |
|  Call-to-Action  |
+------------------+
|   ÉVÉNEMENTS     |
|   À VENIR        |
| [Cards Grid]     |
+------------------+
|    CLUBS         |
|  POPULAIRES      |
| [Horizontal      |
|  Scroll]         |
+------------------+
```

### Espace Événements
```
+------------------+
|   FILTRES        |
| Date | Catégorie |
+------------------+
|                  |
|   LISTE DES      |
|   ÉVÉNEMENTS     |
|                  |
|  [Event Cards]   |
+------------------+
```

### Profil Étudiant
```
+------------------+
|   PHOTO          |
|   INFO PROFIL    |
+------------------+
|   INTÉRÊTS       |
|   CLUBS          |
+------------------+
|   ÉVÉNEMENTS     |
|   PASSÉS         |
+------------------+
```

## Technologies Envisagées
- **Frontend**: React.js avec Material-UI
- **Backend**: Node.js avec Express
- **Base de données**: MongoDB
- **Real-time**: Socket.io pour les notifications

## Fonctionnalités Prioritaires (MVP)
1. Authentification étudiante
2. Création et découverte d'événements
3. Profils personnalisés
4. Système de notification
5. Recherche et filtrage d'événements