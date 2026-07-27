# Mon Stock

Application de gestion de stock pour petite boutique — projet d'apprentissage React + Symfony + Docker.

## Stack technique

| Composant | Technologie |
|---|---|
| Backend | Symfony 7.4 (PHP 8.2) |
| Frontend | React 19 + Vite |
| Base de données | PostgreSQL 16 |
| Conteneurisation | Docker + Docker Compose |

## Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé
- Git

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/Baazizahmed/mon-stock.git
cd mon-stock
```

Lancer les conteneurs :

```bash
docker compose up --build
```

Installer les dépendances backend (première fois uniquement) :

```bash
docker compose exec php composer install
```

## Accès à l'application

| Service | URL |
|---|---|
| Frontend React | http://localhost:3000 |
| API Symfony | http://localhost:8000 |
| Route de test API | http://localhost:8000/api/test |

## Structure du projet
mon-stock/
├── backend/ # API Symfony
├── frontend/ # Application React
├── documentation/ # Journal de développement
├── docker-compose.yml
└── README.md

text

## Commandes utiles

```bash
# Lancer les conteneurs
docker compose up --build

# Arrêter les conteneurs
docker compose down

# Exécuter une commande Symfony
docker compose exec php php bin/console mmande>

# Installer un paquet Composer
docker compose exec php composer require <paquet>

# Installer un paquet npm côté frontend
docker compose exec frontend npm install <paquet>
```

## Workflow Git

Ce projet suit une convention de branches par sprint/ticket :
sprintX-ticketY-type/nom-du-ticket

text

Types utilisés : `add/`, `feat/`, `fix/`, `refactor/`

Voir [`documentation/JOURNAL.md`](documentation/JOURNAL.md) pour l'historique complet du développement.

## Licence

Projet personnel d'apprentissage.