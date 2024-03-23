import mongoose from "mongoose";

const storyNodeSchema = new mongoose.Schema({
    storyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    decisions: [{
        text: String,
        nextNodeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StoryNode'
        }
    }]
});

const StoryNode = mongoose.model('StoryNode', storyNodeSchema);

export default StoryNode;
