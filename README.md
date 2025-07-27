#  IPO Web Application
A full-stack web application to manage, add, edit and track IPO listings. Built using React.js for the frontend and Node.js + Express + PostgreSQL for the backend. The project includes real time CRUD operations and data visualization using Chart.js.

#  Live Demo
Frontend: https://Sandesh2k22.github.io/ipo
Backend API: https://ipo-backend-2ra9.onrender.com


#  Features

-  Add new IPO
-  Edit IPO details
-  Delete IPO
-  View IPO details
-  Filter IPOs by status (Upcoming, Open, Closed)
-  Pie chart visualization using Chart.js
-  Fully integrated with PostgreSQL database

#  Tech Stack

-  Frontend: React.js, Axios, React Router, Chart.js
-  Backend: Node.js, Express.js, CORS
-  Database: PostgreSQL (Hosted on Render)
-  Deployment: GitHub Pages (Frontend), Render (Backend)
-  Version Control: Git & GitHub

#  Folder Structure (Frontend)
src/
|-components/
|   |-IPOChart.js
|   |-IPOList.js
|   |-IPOSummary.js
|   |-Navbar.js
|   |-Sidebar.js
|-pages/
|   |-AddIPO.js
|   |-Dashboard.js
|   |-EditIPO.js
|   |-IPODetails.js
|-utils/
|   |-ipoStorage.js
|--App.js
|--index.js


#  How to Run

1. Install dependencies:
   
   npm install

2. Start the development server:

    npm start

3. Open your browser and navigate to:

    http://localhost:3000

4. Make changes and see live updates in development mode.

#  API Endpoints

    https://ipo-backend-2ra9.onrender.com/api/ipos

#  How to Run Locally

1. Clone the repository

    git clone https://github.com/Sandesh2k22/ipo.git
    cd ipo

2. Install dependencies

    npm install

3. Start development server

    npm start

4. Backend Setup

    Navigate to backend folder:

        cd backend
        npm install
        npm run dev

#  Learnings
During this project, I learned:

- How to build a full-stack application using React, Node.js, and PostgreSQL.

- How to design and consume REST APIs for CRUD operations.

- How to deploy a frontend on GitHub Pages and backend on Render.

- Working with Axios for API calls and React Hooks for state management.

- Implementing dynamic charts using Chart.js in React.

- Handling CORS issues and securing environment variables.

- Connecting a live database with cloud-hosted apps.

#  Screenshots

![Dashboard image](image.png)
![Add New IPO image](img.png)
![Edit IPO image](img2.png)
---

#  Author

- **Sandesh Kandalkar** — [GitHub](https://github.com/Sandesh2k22)

 [Live Repository on GitHub](https://github.com/Sandesh2k22/ipo)
