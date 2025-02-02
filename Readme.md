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
   git clone <repository-url>
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
   Fill in the required environment variables in `.env`.

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
| GET    | /faqs         | Get all FAQs            |
| GET    | /faqs/:id     | Get FAQ by ID           |
| POST   | /faqs         | Create a new FAQ        |
| PUT    | /faqs/:id     | Update an existing FAQ  |
| DELETE | /faqs/:id     | Delete an FAQ           |

### **Cache Management**
| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| DELETE | /cache/flush  | Clear all cache         |

## Environment Variables
The following environment variables should be configured in the `.env` file:

```sh
POSTGRES_USER=<your-db-user>
POSTGRES_PASSWORD=<your-db-password>
POSTGRES_DB=<your-db-name>
REDIS_HOST=<your-redis-host>
REDIS_PORT=<your-redis-port>
PORT=3000
```

## Deployment
To deploy using Docker:
```sh
docker build -t faq-backend .
docker run -p 3000:3000 --env-file .env faq-backend
```

## License
This project is licensed under the MIT License.

