import { Schema, model } from 'mongoose';

// User model schema for MLM platform
const userSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    referralLink: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    activationStatus: {
        type: Boolean,
        default: false
    }
});

const User = model('User', userSchema);

export default User;