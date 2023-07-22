// This stores js code for the login/signup functions with mysql

const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();const port = 3000;

// Config for db
const dbConfig = {
  host: 'localhost',
  email: 'your_mysql_email',
  password: 'your_mysql_password',
  database: 'Accountdb',
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

//parses request body as JSON
app.use(express.json());

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Hash the password before storing
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Insert the user data into the database
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    pool.query(sql, [email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: 'email already exists' });
        }
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.status(201).json({ message: 'Signup successful' });
    });
  });
});

// Endpoint for the login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

// Retrieves user data from the database based on the username
  const sql = 'SELECT id, username, password FROM users WHERE username = ?';
  pool.query(sql, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result[0];

// Compare the provided password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, passwordMatch) => {
      if (err || !passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // can create a session or use tokens for authentication here
      // For simplicity,it just returns a success message
      return res.status(200).json({ message: 'Login successful' });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
