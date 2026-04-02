// Commission Model for Tracking Referral Earnings

class Commission {
    constructor(referrer) {
        this.referrer = referrer;
        this.earnings = {
            level1: 5,
            level2: 2.5,
            level3: 1.25
        };
    }

    calculateEarnings(level) {
        switch (level) {
            case 1:
                return this.earnings.level1;
            case 2:
                return this.earnings.level2;
            case 3:
                return this.earnings.level3;
            default:
                throw new Error('Invalid level');
        }
    }
}

module.exports = Commission;