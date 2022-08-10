# e-Commerce Challenge IT CROWD

## General information

- This project simulate an e-commerce
- The application loads products a SQLite3 database and displays them.
- The style of the page is made by TaildwindCSS framework

## Technolgies used in the project

- [NodeJS](https://nodejs.org/es/)
- [ExpressJS](https://expressjs.com/es/starter/installing.html)
- [React: 17.0.2](https://reactjs.org/)
- [ReactHooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)
- [React-router-dom: 6.3.0](https://https://reactrouter.com/docs/en/v6)
- [Lodash](https://github.com/lodash/lodash)

## Features

- Users can select to display products in a single category
- Users can click on any product to get more information
- /admin you can Add, Edit or delete the products that the database provides


## Getting Started
To get started you can simply clone this `ecommerce` repository and install the dependencies.

Clone the `ITCrowdChallenge` repository using git:

```bash
git clone https://github.com/EscFranco/ITCrowdChallenge
```

Install dependencies with this command for the frontend:
```bash
cd frontend
npm install
```

Install dependencies with this command for the backend:
```bash
cd backend
npm install
```

Run the application you have to run the frontend and backend at the same time:
You should open two terminals
```bash
cd frontend
npm run start 
``` 
```bash
cd backend
node src/index.js
```

Once the commands are execute you will see the list of the products that you can get from http://localhost:8080/productos and this will be render in your Frontend