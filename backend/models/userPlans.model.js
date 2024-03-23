import mongoose from "mongoose";

const userPlanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Reference to Users collection
    },
    plans: [{
        activityId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Activity' // Reference to Activities collection
        },
        details: {
            type: String
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserPlan = mongoose.model('UserPlan', userPlanSchema);

export default UserPlan;
