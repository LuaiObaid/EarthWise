import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    storyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
        required: true
    },
    currentNodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StoryNode'
    },
    pathTaken: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StoryNode'
    }]
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

export default UserProgress;
