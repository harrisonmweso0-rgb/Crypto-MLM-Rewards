import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

// User model placeholder. Replace with actual user model.
const User = {
    findOne: async (criteria) => { /* logic to find user */ },
    create: async (data) => { /* logic to create user */ }
};

// Registration endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, password: hashedPassword });
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).send('User not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

// Authentication endpoint
router.get('/auth', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ user });
    });
});

export default router;