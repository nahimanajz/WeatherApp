import Validate from "../util/Validator";
import WeatherModal from "../model/weather";

class Weather {
  async store(req, res) {
    const { region, degrees, measure } = req.body;
    const newModal = new WeatherModal({ region, degrees, measure });
    const savedRes = await newModal
      .save()
      .then((resp) => {
        return res.send({
          message: "new response is saved",
          data: resp,
        });
      })
      .catch((error) => res.send(error));
  }
  async getOne(req, res) {
    const weather = await WeatherModal.findOne({ region: req.params.region });
    return weather
      ? res.status(200).send({ weather })
      : res.status(404).send({ message: "City not found" });
  }
  async update(req, res) {
      try {
        const updateWeather = await WeatherModal.findOneAndUpdate(
            { _id: req.params.id },
            req.body
          );
          if (updateWeather) {
            return res.status(200).send({ message: "Weather info is updated", weather: updateWeather });
          }
          return res.status(404).send({ message: "Provided region is not found" });
      } catch (error) {
          console.log(error);
        return res.status(500).send({ message: "Error updating weather" });
          
      }
    
  }
}
export default new Weather();
