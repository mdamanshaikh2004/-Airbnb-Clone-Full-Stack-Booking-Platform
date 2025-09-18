Airbnb Clone — Full-Stack Booking Platform 🏡

A full-stack web app inspired by Airbnb using Node.js, Express, MySQL, MongoDB, EJS, HTML, CSS, JS. Browse listings, register/login, book stays, and leave reviews.

Features: User authentication, property listings (MongoDB), bookings (MySQL), reviews (MongoDB), responsive EJS views.

Tech Stack: HTML, CSS, JS, EJS, Node.js, Express.js, MySQL, MongoDB, bcrypt, dotenv, multer.

Project Structure:
server.js | package.json | .env.example | sql/schema.sql | db/ | models/ | routes/ | views/ | public/

Installation:
git clone https://github.com/your-username/airbnb-clone-fullstack.git
cd airbnb-clone-fullstack
npm install
Configure .env, setup MySQL: mysql -u root -p < sql/schema.sql
Start server: npm run dev, open http://localhost:3000

API Endpoints:
POST /register, POST /login, GET /logout
GET /listings/:id, POST /listings/create
POST /bookings/create, GET /bookings/my
