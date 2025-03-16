# To-Do List Application

This project is a full-stack to-do list application with separate frontend and backend components.

## Project Structure

```
To-Do-List-main/
├── FRONTEND/   # React.js frontend
├── BACKEND/    # Node.js + Express.js backend
└── README.md   # Project documentation
```

---

# Backend Setup

## Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Navigate to the backend folder:
   ```sh
   cd BACKEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- Cors
- Dotenv

---

# Frontend Setup

## Prerequisites

- Install [Node.js](https://nodejs.org/)

## Installation

1. Navigate to the frontend folder:
   ```sh
   cd FRONTEND
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

## Technologies Used

- React.js
- React Router
- Axios (for API calls)

---

# Running the Application

1. Start the backend server (`npm start` in `BACKEND` folder).
2. Start the frontend server (`npm start` in `FRONTEND` folder).
3. Open [http://localhost:3000](http://localhost:3000) in a browser to use the application.

---

# API Endpoints (Backend)

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| GET    | /tasks      | Get all tasks  |
| POST   | /tasks      | Add a new task |
| PUT    | /tasks/\:id | Update a task  |
| DELETE | /tasks/\:id | Delete a task  |

---

# Deployment

You can view the live preview here : https://task-1-mocha.vercel.app/

