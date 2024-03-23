import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
    carbonFootprintCalculationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarbonFootprintCalculation',
        required: true
    },
    suggestions: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

export default Suggestion;
