# Mexican-Airline Project

## Overview

This project is a comprehensive web application for a fictional Mexican airline, demonstrating a full-stack development approach using React for the frontend and PHP with MySQL for the backend. It showcases various features typical in an airline booking system, including flight search, reservations, user accounts, and flight management.

## Key Features

- User authentication and account management
- Flight search and booking system
- Reservation management (view, modify, cancel)
- Admin panel for flight and user management
- Responsive design for mobile and desktop views

## Technologies Used

- Frontend:
  - React.js
  - Tailwind CSS for styling
  - Axios for API requests
- Backend:
  - PHP
  - MySQL database
- Development Environment:
  - Laragon (for local development)

## Project Structure

The project is structured as follows:

```
mexican-airline/
│
├── src/                 # React frontend source files
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components (Account, Details, etc.)
│   ├── styles/          # CSS files
│   └── App.js           # Main React component
│
├── api/                 # PHP backend files
│   ├── config/          # Database configuration
│   └── *.php            # API endpoints (account.php, details.php, etc.)
│
├── database/            # SQL scripts for database setup
│
├── public/              # Public assets
│
└── README.md            # Project documentation
```

## Setup and Installation

1. Clone the repository
2. Set up Laragon with PHP and MySQL
3. Import the database schema using the SQL scripts in the `database/` directory
4. Configure the database connection in `api/config/database.php`
5. Install frontend dependencies:
   ```
   cd mexican-airline
   npm install
   ```
6. Start the React development server:
   ```
   npm start
   ```
7. Access the application at `http://localhost:3000`

## Key Learnings

This project demonstrates:

1. Integration of a React frontend with a PHP backend
2. RESTful API design and implementation
3. State management in React using hooks
4. Database design for a complex system like airline reservations
5. User authentication and session management
6. Responsive web design principles

## Future Enhancements

- Implement real-time flight tracking
- Add a payment gateway for ticket purchases
- Enhance the admin panel with more detailed analytics
- Implement a loyalty program for frequent flyers

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your proposed changes.

## License

This project is open-source and available under the MIT License.
### Made by:
**Bryan GP**
