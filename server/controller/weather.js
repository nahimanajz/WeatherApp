import Validate from "../util/Validator";
import WeatherModal from '../model/weather';

class Weather {
    async store(req, res){
        const { region, degrees, measure } = req.body
        const newModal = new WeatherModal({region, degrees, measure });
        const savedRes = await newModal.save().then(resp=>{
            return res
                .send({
                message:'new response is saved',
                data: resp
            })
        }).catch(error => res.send(error))

    }
    async getOne(req, res) {
        const weather = await WeatherModal.findOne({region: req.params.region})
        return weather? res.status(200).send({weather}) : res.status(404).send({message: 'City not found'})

    }
}
export default new  Weather;