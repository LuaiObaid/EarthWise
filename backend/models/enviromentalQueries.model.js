import mongoose from "mongoose";

const environmentalQuerySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    query: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String
    }]
});

const EnvironmentalQuery = mongoose.model('EnvironmentalQuery', environmentalQuerySchema);

export default EnvironmentalQuery;
