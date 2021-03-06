# Calendar-App

รzel Anahtar Kodu: mGGGGGHoSK3ae4TbnD82AIzadqYzF-AjyLqfyZopl0szE_CZHq0S3bYHlOeHbY9FPXyLaQbRBydQ4JBtD6Ueg-PATBFqV7c0E9trlzJL_NQZP6WPDgRGQSQB76g6mqQlI7L5dgfQ1aSeHlQ-PUD4suEkQXFPGWOOxArUCEjY8Mg4CGBlR9UUu5tWwXnlepa3D9amecMcwbZRevbFS-H2PORFiPfJlouXbOUscxOAij3R2mhkqiOaaK4=

_Be aware of that is incomplete documentation!_

![](https://img.shields.io/badge/Under%20Development!-red.svg)
![](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Express.js-404D59)
![](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
![](https://img.shields.io/github/license/femresirvan/node.js-starter-template)
![](https://img.shields.io/badge/React-white?logo=react&logoColor=blue)

### Table of Contents

- [Introduction](#-introduction)
- [Features](#features)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Project Structure](#-project-structure)
- [Dependencies](#dependencies)
- [Review]()
- [Installation](#prerequisite)
  - [Prerequisite](#prerequisite)
  - [Installation](#-installation)
- [Contributes & Donates](#-contributesdonates)

### ๐ Introduction

Calendar app that allows you add,update or delete new things(events) by dates.

### Features

- Service design (Web Api Service, Calendar Service, Account Service) and all of these services communicates themselves with HTTP.
- User system with JWT.
- Time service that allows see you what time is it?
- You can see the whole years in calendar(table) and you can use CRUD operations to your calendar events.
- Denormalized mongodb user database includes users and calendar events.
- Logout and blacklist the JWT token with redis.
- Easy integration with Docker.
- Unit, integration test cases with Jest.

### ๐ Review

https://user-images.githubusercontent.com/60824063/161398348-0db17115-6757-4df5-b500-0273b372a5de.mp4

https://user-images.githubusercontent.com/60824063/164236385-868785a0-bb55-4421-a981-c497efc56f8c.mp4

### Diagrams

![seq_general](https://user-images.githubusercontent.com/60824063/160240053-7bad826a-bd7d-4f86-8431-754ad0850b39.jpg)

![state_web_api](https://user-images.githubusercontent.com/60824063/160241936-617687e6-9ef1-4e22-88f5-0b2f75d319b9.jpg)

### ๐ฃ๏ธ Roadmap

- [x] Research requierements, Create MERN stack, some github docs, diagrams.
- [x] Develop node.js template for all microservices.
- [x] Develop account api service.
- [x] Develop Web api and use `--axios` (HTTP request) to communicate between client and account service.
- [x] Develop Calendar Api Service and implement with Web API.
- [x] Use react to develop the interface.
- [x] Best part! style with sass.
- [x] Use docker.
- [ ] Request validation with Joi
- [x] Register client part.
- [x] Visual Logout on only frontend.
- [ ] Make error states.
- [ ] Use redis to logout.
- [ ] Use swagger to present the api.
- [ ] Do some integration/unit tests with Jest.
- [ ] Clean react codes or rewrite the whole react layout.

### ๐ข Project Structure

**For Node.js**

| Directory                | Explanation                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| โฅ ~../service_name       | Service files (Account service, Calendar service, Web API Service)                         |
| โฅ ~./configs             | Config files for node.js server (mongodb driver configs, server conn configs etc.)         |
| โฅ ~./middlewares         | Middleware files.                                                                          |
| โฅ ~./controllers         | MVC                                                                                        |
| โฅ ~./models              | MVC                                                                                        |
| โฅ ~./routers             | Makes routing to middlewares and (/or) controllers.                                        |
| โฅ ~./utils               | Utility functions, classes etc. (JWT functions, time functions, helper array functions...) |
| โฅ ~./app.js              | Main server file.                                                                          |
| โฅ ~./generate_keypair.js | generates keypair for jwt.                                                                 |

**For React**

| Directory           | Explanation                                    |
| ------------------- | ---------------------------------------------- |
| โฅ ~./src/components | Includes dumb and functional react components. |
| โฅ ~./src/styles     | SCSS files for every components                |

### Dependencies

- Node.js
- MongoDB & Mongoose
- Express & Passport
- Docker
- React
- Redis
- Jest
- Eslint
- Prettier

**For React**

- sass
- react-calendar
- axios

**For Node.js**

- axios
- joi
- mongoose
- helmet
- chalk
- morgan
- jsonwebtoken
- passport.js
- express
- dotenv
- cors
- swaggerui
- redis
- crypto
- bcrypt
- yamljs

## Prerequisite

- [Node.js & NPM](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/)
- [Docker & Docker-Compose]()

### ๐จโ๐ป Installation

Clone repository

```bash
$ git clone https://github.com/femresirvan/Calendar-App.git
$ cd Calendar-App
```

Setup with docker

```bash
$ sudo docker-compose up --build
```

### Web API Routes

#### **Auth**

- POST /auth/login (to login)
  ```json
  "Headers": { "Content-type" : "application/json" },
  "Body": { "username": "femresirvan", "password": "147852369Fee" }
  ```
- POST /auth/register (to register)
  ```json
  "Headers": { "Content-type" : "application/json" },
  "Body": { "name": "Fฤฑrat Emre ลฤฐRVAN", "username": "femresirvan", "password": "147852369Fee" }
  ```
- GET /auth/logout (to logout) /_TODO_/
  /_ you can detect user with specific token. Token stores encrypted user id data. _/
  ```json
  "Headers": { "Authorization": "Bearer <token>" }
  ```

#### **API**

- GET /api/events (to get events on spesific user)
  ```json
  "Headers": { "Authorization": "Bearer <token>" }
  ```
- POST /api/events (to create event on spesific user)
  ```json
  "Headers": { "Authorization": "Bearer <token>", "Content-type": "application/json" }
  "Body" : {
   "events":{
  	 "desc":"Title",
  	 "extra_desc":"Description",
     		 "date_year":2022,
  	 "date_day":26,
  	 "date_month":3
           }
         }
  ```
- PUT /api/events/:eventid (to update events on spesific user) /_TODO_/
  ```json
  "Headers": { "Authorization": "Bearer <token>", "Content-type": "application/json"}
  "Body" : {
    "events":{
  	  "desc":"Title",
  	  "extra_desc":"Description",
      		  "date_year":2022,
  	  "date_day":26,
  	  "date_month":3
            }
          }
  ```
- DELETE /api/events/:eventid (to get events on spesific user)
  ```json
  "Headers": { "Authorization": "Bearer <token>" }
  ```

### Some Notes:

- Due to my exams and short time, i couldn't make most of spesific diagrams (ER, Activity, Sequence..), test cases and i coded very bad on react include so much antipatterns. Sorry for that, you can pull request also!

### ๐ค Contributes&Donates

> ๐ Give me any advice by sending email!
>
> Email: femresirvan@gmail.com
