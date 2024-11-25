# energy-analytics
Energy Analytics is a full-stack application designed to monitor, analyze, and log energy data. This project includes a frontend built with React and a backend powered by Node.js and MongoDB.

## 🔗 Hosted link: [energy-analytics]()


## ✨Features
### Frontend:

- User authentication (Login/Register)
- Energy data visualization using Recharts
- Access log management
- Date range filtering
- Responsive design with Tailwind CSS

### Backend:

- Secure API with JWT authentication
- MongoDB for data storage
- Middleware for access control
- RESTful API for energy data and access logs

## Tech Stack 

### Frontend:
- React
- Vite
- Tailwind CSS
- Recharts
- Axios

### Backend:
- Node.js
- Express
- MongoDB
- JWT for authentication
- Bcrypt.js for password hashing

## 🛠️Getting Started

### Installation

## Frontend
1. Clone the repository:
git clone https://github.com/AniketMujbaile/energy-analytics.git

```bash
cd frontend
```

2. Install dependencies:
```bash
npm install @vitejs/plugin-react vite
npm install react-router-dom axios recharts
npm install @headlessui/react @heroicons/react
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/forms dayjs
```

3. Run the Client:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

1. Clone the Repository

```bash
cd backend
```

2. Install Dependencies

```bash
npm install express mongoose dotenv cors
npm install jsonwebtoken bcryptjs
npm install express-validator
npm install morgan nodemon --save-dev
```

3. Set Up Environment Variables

Create a .env file in the root directory and add the following variables:
 
 ```bash
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. Run the Server

```bash
npm start
```

 