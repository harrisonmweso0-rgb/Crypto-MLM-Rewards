import express from 'express';
import { Client } from 'pg';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// PostgreSQL Database Connection
const client = new Client({
    user: 'your_username', // replace with your PostgreSQL username
    host: 'your_host',     // replace with your PostgreSQL host
    database: 'your_database', // replace with your database name
    password: 'your_password', // replace with your database password
    port: 5432, // PostgreSQL port
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
