# Crypto MLM Rewards

## Overview
The Crypto MLM Rewards platform is designed to facilitate multi-level marketing (MLM) operations using cryptocurrency as a reward mechanism. This README explains how to set up the platform, its features, the database connection with Neon, and how to run the project.

## Setup Instructions
1. **Clone the Repository**  
   Run the following command in your terminal:
   ```bash
   git clone https://github.com/harrisonmweso0-rgb/Crypto-MLM-Rewards.git
   cd Crypto-MLM-Rewards
   ```

2. **Install Dependencies**  
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add the following variables:
   ```env
   DATABASE_URL=<Your Neon Database URL>
   SECRET_KEY=<Your Secret Key>
   ```

## Features
- **User Registration and Authentication**: Users can register and log in to the system securely.
- **Multi-Level Marketing Tools**: Users can manage their referrals and track earnings through various levels.
- **Cryptocurrency Integration**: Supports transactions using popular cryptocurrencies.
- **Dashboard**: An intuitive dashboard for users to track their performance and earnings.

## Database Connection with Neon
The platform uses Neon as a cloud database solution.
- **Connection String**: The `DATABASE_URL` variable in your `.env` file should contain the connection string provided by Neon.

## Running the Project
Once the setup is complete, you can run the project by executing:
```bash
npm start
```

The server will start on `http://localhost:3000`.

## Conclusion
You are now set up to begin using the Crypto MLM Rewards platform. For further documentation or contributions, check out the project's GitHub repository.