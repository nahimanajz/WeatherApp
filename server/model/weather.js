import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
    degrees:{
        type: Number,
        required:true
    },
    region:{
        type: String,
         required:true,
         unique:true
        },
    measure:{
        type: String,
        required:false
    }
}, {
    timestamps: true
});
 const WeatherModal = mongoose.model('Weathers', weatherSchema)
 export default WeatherModal ;