import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
    queryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EnvironmentalQuery',
        required: true
    },
    response: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;
