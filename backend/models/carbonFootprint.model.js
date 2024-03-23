import mongoose from "mongoose";

const carbonFootprintCalculationSchema = new mongoose.Schema({
    lifestyleInfoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LifestyleInfo',
        required: true
    },
    carbonFootprint: {
        type: Number,
        required: true
    },
    calculationDate: {
        type: Date,
        default: Date.now
    }
});

const CarbonFootprintCalculation = mongoose.model('CarbonFootprintCalculation', carbonFootprintCalculationSchema);

export default CarbonFootprintCalculation;
