import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/weather';
import env from 'dotenv'
env.config();
const app = express();
const PORT = process.env.PORT || 2000
app.use(express.json());
app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json({limit: '500mb'}))

app.use('/api/v1/regions', routes);

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT} port!`);
});
