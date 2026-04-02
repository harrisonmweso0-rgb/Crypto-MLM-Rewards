import express from 'express';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import activationRoutes from './routes/activation';
import commissionRoutes from './routes/commissions';
import withdrawalRoutes from './routes/withdrawals';
import adminRoutes from './routes/admin';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/activation', activationRoutes);
app.use('/api/commissions', commissionRoutes);
app.use('/api/withdrawals', withdrawalRoutes);
app.use('/api/admin', adminRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Crypto MLM Rewards Platform', version: '1.0.0', endpoints: { auth: '/api/auth', users: '/api/users', activation: '/api/activation', commissions: '/api/commissions', withdrawals: '/api/withdrawals', admin: '/api/admin' }});
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;