// Activation Request Model

interface ActivationRequest {
    user: string;
    amount: number;
    proofScreenshot: string;
    adminApproved: boolean;
}

export default ActivationRequest;