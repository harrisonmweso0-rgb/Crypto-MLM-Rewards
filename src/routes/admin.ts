import express from 'express';
const router = express.Router();

router.get('/activations/pending', (req, res) => {
    res.json({ message: 'Pending activation requests', data: [] });
});

router.post('/activations/:id/approve', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Activation request approved', id });
});

router.post('/activations/:id/reject', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Activation request rejected', id });
});

router.get('/withdrawals/pending', (req, res) => {
    res.json({ message: 'Pending withdrawal requests', data: [] });
});

router.post('/withdrawals/:id/approve', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Withdrawal request approved', id });
});

router.post('/withdrawals/:id/reject', (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Withdrawal request rejected', id });
});

router.get('/statistics', (req, res) => {
    res.json({ message: 'Platform statistics', totalUsers: 0, totalActivations: 0, totalWithdrawals: 0, totalCommissions: 0 });
});

export default router;