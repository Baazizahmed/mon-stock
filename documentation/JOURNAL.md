text
# Journal de développement — mon-stock

Projet d'apprentissage : gestionnaire de stock avec React + Symfony + Docker.

## Stack technique
- **Backend** : Symfony 7.4 (PHP 8.2)
- **Frontend** : React 19 + Vite
- **Base de données** : PostgreSQL 16 (à venir)
- **Conteneurisation** : Docker + Docker Compose
- **Versioning** : Git + GitHub, workflow par branches sprint/ticket

## Convention Git
- Toujours utiliser `git switch`, jamais `git checkout`
- Nom de branche : `sprintX-ticketY-type/nom-du-ticket`
- Types : `add/`, `feat/`, `fix/`, `refactor/`
- Chaque ticket = 1 branche = 1 Pull Request mergée dans `main`

## Convention de structure Symfony
src/
├── Command/
├── Controller/
│ ├── Admin/NomRessource/NomRessourceController.php
│ ├── Api/NomRessource/NomRessourceApiController.php
│ └── Visitor/NomFonctionnalite/NomController.php
├── DataFixtures/
├── Entity/
├── EventSubscriber/
├── Form/
├── Repository/
├── Security/
├── Service/
└── Kernel.php

text

---

## Sprint 1 — Setup initial

### Ticket 1 : Symfony + Docker
- Création du projet Symfony 7.4 via `composer create-project symfony/skeleton:"7.4.x-dev"`
- `backend/Dockerfile` : image `php:8.2-cli`, ajout de `unzip` et `git` pour Composer
- Serveur PHP intégré exposé sur le port 8000
- Validation : page d'accueil Symfony accessible sur `http://localhost:8000`

### Ticket 2 : Route API de test
- Création de `src/Controller/Api/Test/ApiTestController.php`
- Route `/api/test` retournant `{"message":"ok"}` en JSON
- Validation : réponse JSON correcte dans le navigateur

### Ticket 3 : React + Docker
- Génération du projet avec `npm create vite@latest frontend -- --template react`
- `frontend/Dockerfile` : image `node:20`, serveur dev exposé sur `0.0.0.0:3000`
- Configuration `vite.config.js` avec `host: '0.0.0.0'` et `port: 3000`
- Validation : page d'accueil Vite + React accessible sur `http://localhost:3000`

### Ticket 4 : Connexion React → Symfony
- Installation de `nelmio/cors-bundle` pour autoriser les requêtes cross-origin
- Configuration CORS : origine `http://localhost:3000` autorisée sur `/api/`
- Création de `frontend/src/services/api.js` (appel `fetch` centralisé)
- Modification de `App.jsx` pour afficher la réponse de l'API
- Nettoyage : `backend/var/` et `backend/vendor/` retirés du suivi Git (untrack)
- Validation : "Réponse de l'API Symfony : ok" affiché sur `localhost:3000`

## Sécurité — gestion des secrets
- `APP_SECRET` exposé accidentellement dans `.env.dev` lors du commit initial
- Corrigé : valeur vidée dans `.env.dev` (versionné), vraie valeur régénérée et déplacée dans `.env.dev.local` (non versionné, ignoré via `.gitignore`)

---

## Sprint 2 — Base de données (en cours)

### Ticket 1 : PostgreSQL + Doctrine
- À venir : ajout du service `database` (PostgreSQL 16) dans `docker-compose.yml`
- À venir : installation de `symfony/orm-pack` et `symfony/maker-bundle`
- À venir : configuration de `DATABASE_URL` dans `.env.dev.local`