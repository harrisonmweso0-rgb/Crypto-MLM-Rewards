import {Router, Request, Response} from 'express';

const router = Router();

// Endpoint for activation request submission
router.post('/request', (req: Request, res: Response) => {
    const {userId, requestData} = req.body;
    // Logic for handling the activation request submission
    // Save the request to the database, send notifications, etc.

    res.status(201).json({message: 'Activation request submitted successfully!', userId, requestData});
});

// Endpoint for admin approval of activation requests
router.post('/approve', (req: Request, res: Response) => {
    const {requestId, adminId} = req.body;
    // Logic for approving the activation request
    // Update the status in the database, send confirmation, etc.

    res.status(200).json({message: 'Activation request approved successfully!', requestId, adminId});
});

export default router;