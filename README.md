# Calendar-App

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

### 🎀 Introduction

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

### 👀 Review

https://user-images.githubusercontent.com/60824063/160243457-59040d9a-eeb2-48cb-984d-8d303376fa43.mp4

### Diagrams

![seq_general](https://user-images.githubusercontent.com/60824063/160240053-7bad826a-bd7d-4f86-8431-754ad0850b39.jpg)

![state_web_api](https://user-images.githubusercontent.com/60824063/160241936-617687e6-9ef1-4e22-88f5-0b2f75d319b9.jpg)

### 🛣️ Roadmap

- [x] Research requierements, Create MERN stack, some github docs, diagrams.
- [x] Develop node.js template for all microservices.
- [x] Develop account api service.
- [x] Develop Web api and use `--axios` (HTTP request) to communicate between client and account service.
- [x] Develop Calendar Api Service and implement with Web API.
- [x] Use react to develop the interface.
- [x] Best part! style with sass.
- [ ] Use redis to logout.
- [ ] Use docker.
- [ ] Use swagger to present the api.
- [ ] Do some integration/unit tests.
- [ ] Clean react codes or rewrite the whole react layout.

### 🏢 Project Structure

** For Node.js**

| Directory                | Explanation                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| ➥ ~../service_name       | Service files (Account service, Calendar service, Web API Service)                         |
| ➥ ~./configs             | Config files for node.js server (mongodb driver configs, server conn configs etc.)         |
| ➥ ~./middlewares         | Middleware files.                                                                          |
| ➥ ~./controllers         | MVC                                                                                        |
| ➥ ~./models              | MVC                                                                                        |
| ➥ ~./routers             | Makes routing to middlewares and (/or) controllers.                                        |
| ➥ ~./utils               | Utility functions, classes etc. (JWT functions, time functions, helper array functions...) |
| ➥ ~./app.js              | Main server file.                                                                          |
| ➥ ~./generate_keypair.js | generates keypair for jwt.                                                                 |

**For React**

| Directory           | Explanation                                    |
| ------------------- | ---------------------------------------------- |
| ➥ ~./src/components | Includes dumb and functional react components. |
| ➥ ~./src/styles     | SCSS files for every components                |

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

### 👨‍💻 Installation

Clone repository

```bash
$ git clone reaplace it
$ cd replace it
```

Install dependencies

```bash
$ npm i
```

Configure .env

```bash
➥ ~./env
PORT=PORT_NUMBER
NODE_ENV='dev' #Not prepared yet.
MONGODB_URI="NOT COMPLETED"
GOOGLE_ID="NOT COMPLETED"
GOOGLE_SECRET="NOT COMPLETED"
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
  "Body": { "name": "Fırat Emre ŞİRVAN", "username": "femresirvan", "password": "147852369Fee" }
  ```
- GET /auth/logout (to logout) /*TODO*/
  /* you can detect user with specific token. Token stores encrypted user id data. */
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
- PUT /api/events/:eventid (to update events on spesific user) /*TODO*/
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

- Due to develop in a short time, i couldn't make most of spesific diagrams (ER, Activity, Sequence..), test cases and i coded very bad on react include so much antipatterns. Sorry for that, you can pull request also!

### 🤝 Contributes&Donates

> 😊 Give me any advice by sending email!
>
> Email: femresirvan@gmail.com
