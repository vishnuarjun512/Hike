# Hike - Social Media Application

Hike is a social media platform built with **Express.js** and **SQL (AWS RDS)** that allows users to create, authenticate, and manage their profiles. This backend provides basic CRUD operations for users and authentication.

## Features
- User authentication (Sign Up, Login, Logout)
- CRUD operations for user profiles
- Database integration with AWS RDS (SQL)
- Token-based authentication with JWT

## Technologies Used
- Node.js
- Express.js
- PostgreSQL (Hosted on AWS RDS)
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/hike.git
   cd hike
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a **.env** file and add your database credentials:
   ```env
   DB_HOST=your-aws-rds-host
   DB_USER=your-db-username
   DB_PASSWORD=your-db-password
   DB_NAME=your-database-name
   DB_PORT=5432
   JWT_SECRET=your-jwt-secret
   ```

4. Run the application:
   ```sh
   npm start
   ```


## License
This project is licensed under the MIT License.

## Author
- **Your Name**
- GitHub: [your-username](https://github.com/your-username)

