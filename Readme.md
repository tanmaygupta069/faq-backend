# FAQ Backend

## Overview
This project is a backend service for managing FAQs, built using Node.js, Express.js, PostgreSQL, and Redis for caching. The backend provides CRUD operations for FAQs, supports translations, and optimizes performance with caching.

## Features
- CRUD operations for FAQs
- Multi-language support (English, Hindi, Bengali)
- Redis caching to improve performance
- Automatic cache invalidation on data updates
- PostgreSQL as the primary database
- Dockerized setup for easy deployment

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL with Sequelize ORM
- **Cache:** Redis
- **Containerization:** Docker, Docker Compose
- **Environment Management:** dotenv

## Installation

### Prerequisites
- Node.js (>=16.x)
- Docker & Docker Compose

### Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/tanmaygupta069/faq-backend
   cd faq-backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file**
   ```sh
   cp .env.example .env
   ```
   Fill in the required environment variables from `test.env` in `.env` file in your local environment.

4. **Start the database and Redis using Docker Compose**
   ```sh
   docker-compose up -d
   ```

5. **Run database migrations**
   ```sh
   npm run migrate
   ```

6. **Start the server**
   ```sh
   npm run start
   ```

## API Endpoints

### **FAQ Management**
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| GET    | /api/faqs     | Get all FAQs            |
| POST   | /api/admin/faq| Create a new FAQ        |
| GET    | /health       | Check health of server  |
| GET    | /test         | Check status of server  |
| DELETE | /faqs/?id     | Delete an FAQ by id     |

### **Cache Management**
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| DELETE | /cache/flush  | Clear all cache         |

## Environment Variables
The  environment variables in the `test.env` file should be configured in your `.env` file

## Deployment
To deploy using Docker:
```sh
docker build -t faq-backend .
docker run -p 3000:3000 --env-file .env faq-backend
```

