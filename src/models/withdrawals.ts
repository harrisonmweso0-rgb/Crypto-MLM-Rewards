import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Withdrawal extends Model {}

Withdrawal.init({
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 7 // Minimum amount of 7 USDT
        }
    },
    trc20_wallet_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^T[A-Za-z0-9]{33}$/ // Basic validation for TRC20 wallet address
        }
    },
    admin_approval_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Default to false (not approved)
    }
}, {
    sequelize,
    modelName: 'Withdrawal',
    tableName: 'withdrawals',
    timestamps: true,
});

export default Withdrawal;