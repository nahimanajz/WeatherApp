import express from 'express';
import routes from './routes/weather';
import env from 'dotenv'
env.config();
const app = express();
const PORT = process.env.PORT || 2000
app.use('/api/v1/regions', routes);

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT} port!`);
});
