Mobilicis Assignment

Prerequisites
Before you start, you need to have the MongoDB server running on your local machine.

Getting Started
To get started, follow these steps:

Clone the repository.
Open the terminal and cd into the client and server folder.
Run npm install to install the required dependencies.
Run npm start to start the client and server.

Frontend
The frontend of the project is built using React inside the client folder. It contains a single webpage with 5 different tables that display the data fetched from the database according to the given 5 queries.

Concepts and Technologies Used
React components, hooks, and props.
MUI for pre-built table components.
Axios for making HTTP requests to the server.

Backend
The backend of the project is built using Node.js inside the server folder. It contains the code that loads the database only when it is empty, which only happens the first time. The express server sends the data to the client whenever a GET request is made by the client from the database.

Concepts and Technologies Used
Node.js and Express for the server.
MongoDB: the database.
Mongoose package to connect the application to the database and query the data from it according to the given conditions.
Contact
If you have any questions or suggestions, feel free to contact me at aditya.agarwal1311@gmail.com.