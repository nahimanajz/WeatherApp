import Validate from "../util/Validator";
import db from '../config/DBConnector';

class Weather {
    async store(req, res) {
        console.log(req.body)
        const { error } = Validate.weatherInfo(req.body);
        if (error) {
            console.log(JSON.stringify(error));
            return res.send({
                status: 400,
                error: error.details[0].message
            });
        }
        try {
            const isRegionExist = await dbc.query('SELECT * FROM weathers WHERE region=$1', [req.body.region]);
            if (isRegionExist.rowCount > 0) {
                return res.send({
                    status:403,
                    message: 'Region must be recorded only once'
                });
            }
            const query = "INSERT INTO weathers(region, degree, measure) VALUES($1, $2, $3, )";
            const { region, degree, measure } = req.body
            const values = [region, degree, measure]
            const weather = await dbc.query(query, values)
            return weath && res.send({ status: 201, message: 'New weather is recorded', weather })
        } catch (error) {
            return res.status(400).send({
                status: 400,
                error: error,

            });
        }

    }
    async getOne(req, res) {
        const weather = await db.query('SELECT * FROM weathers WHERE region=$1', [req.body.region])
        return res.status(200).send({weather})

    }
    async getAll(req, res) {
        try {
            const weathers = await dbc.query('SELECT * FROM weathers');
            return res.status(200).send({weathers})

        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error
            });

        }

    }
    async delete(req, res) {
        try {
            const weather = await dbc.query('DELETE FROM weathers WHERE id=$1', [req.params.id]);
            return res.status(200).json({
                status: 200,
                data: 'specified region is deleted'
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error
            });
        }

    }
}
export default new  Weather;