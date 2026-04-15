# Angular 21 Tutorial

Une application pédagogique complète pour apprendre Angular 21 avec des exemples pratiques et interactifs.

## Description du Projet

Ce projet est un tutoriel interactif Angular 21 qui démontre les concepts fondamentaux et avancés du framework Angular à travers des exemples pratiques. L'application utilise une interface avec un menu latéral pour naviguer entre les différents modules d'apprentissage.

## Technologies Utilisées

- **Angular 21.2.5** - Framework principal
- **TypeScript 5.9.2** - Langage de développement
- **TailwindCSS 4.1.12** - Framework CSS pour le style
- **Vitest 4.0.8** - Framework de test unitaire
- **Angular CLI 21.2.5** - Outils de développement

## Fonctionnalités

### Modules d'Apprentissage

1. **Variables** - Démonstration des types de données TypeScript
   - Chaînes de caractères, nombres, booléens
   - Dates, tableaux et objets
   - Collections d'objets complexes

2. **Data Binding** - Techniques de liaison de données
   - Interpolation `{{ }}`
   - Property Binding `[ ]`
   - Event Binding `( )`
   - Two-way Binding `[( )]`

3. **Signals** - Gestion réactive de l'état avec les signaux Angular 21

4. **Control Flux** - Structures de contrôle dans les templates
   - `*@if`, `*@for`, 

5. **Dynamic CSS Class** - Classes CSS dynamiques et conditionnelles

6. **Users** - Gestion des utilisateurs avec composants

7. **Reactive Users** - Approche réactive avec RxJS

8. **Get API** - Intégration avec API externes (JSONPlaceholder)ar  intégration avec json server

9. **Service Test** - Utilisation des services Angular

10. **Data User** - Manipulation avancée des données utilisateur

11. **Employee CRUD** - Opérations CRUD complètes sur les employés
   - Création, lecture, mise à jour et suppression d'employés
   - Utilisation des signaux Angular 21 pour la gestion réactive
   - Interface avec API REST (localhost:3000/employees)

### Services

- **TodoService** - Service démontrant l'injection de dépendances et les appels HTTP
  - Méthode `ConcatStrings()` pour la manipulation de chaînes
  - Méthode `getTodos()` pour les appels API avec HttpClient
  - Injection de dépendances avec `inject()`
  - Connexion à l'API localhost:3000/todos

## Structure du Projet

```
src/
  app/
    components/          # Composants pédagogiques
      variables/
      data-binding/
      signal/
      controlflux/
      dynamic-css-class/
      user-master/
      reactive-user/
      get-api/
      service-test/
      data-user/
      employee-crud/
      notfound/
    services/           # Services Angular
      todo-service.ts
    app.config.ts       # Configuration de l'application
    app.routes.ts       # Configuration des routes
    app.html           # Template principal avec menu latéral
  main.ts              # Point d'entrée
  styles.css           # Styles globaux
```

## Installation et Démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone https://github.com/yourusername/angular21-tutorial.git

# Installer les dépendances
npm install
```

### Démarrage

```bash
# Démarrer le serveur de développement
npm start
# ou
ng serve
```

L'application sera accessible à `http://localhost:4200/`

### Build de Production

```bash
# Compiler pour la production
npm run build
# ou
ng build
```

### Tests

```bash
# Lancer les tests unitaires
npm test
# ou
ng test
```

## Navigation

L'application dispose d'un menu latéral avec les sections suivantes :
- Variables (page par défaut)
- Data Binding
- Signal
- Control Flux
- Dynamic CSS Class
- Users
- Reactive users
- Get API
- Service Test
- Data User
- Employee CRUD

## Configuration

### TailwindCSS

Le projet utilise TailwindCSS pour le styling avec une configuration PostCSS personnalisée dans `.postcssrc.json`.

### Routes

Les routes sont configurées dans `src/app/app.routes.ts` avec :
- Route par défaut redirigeant vers `/variables`
- Routes pour chaque composant pédagogique
- Route catch-all (`**`) pour les pages non trouvées

### API Backend

Le projet utilise **JSON Server** pour simuler une API REST :
- **Todos API** : `http://localhost:3000/todos`
- **Employees API** : `http://localhost:3000/employees`
- Fichier de configuration : `db.json`
- Pour démarrer le serveur API : `npx json-server --watch db.json`

## Scripts Disponibles

- `npm start` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run watch` - Build en mode watch
- `npm test` - Lance les tests unitaires
- `npm run api` - Démarre le serveur JSON Server pour l'API backend

## Ressources Additionnelles

- [Documentation Angular](https://angular.dev/)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Ressources youtubes 

- [Tech Stack Angular 21 Tutorial](https://www.youtube.com/watch?v=BPbuGlbNwhY&list=PLFb6Ksc_8i0BsvjSwrOeKFE2f0iUTzewp)
- [ Learning Partner Angular 21 Tutorial](https://www.youtube.com/watch?v=PO_OdN6JTU4&list=PL7JmcZV0UQtU12drXHGDswOGNhEdXA4RO)

## Contribution

Ce projet est conçu comme un support pédagogique. N'hésitez pas à proposer des améliorations ou de nouveaux exemples pour enrichir le tutoriel.
