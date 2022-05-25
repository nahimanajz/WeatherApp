import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/weather';
import env from 'dotenv'
import mongoose from 'mongoose'

env.config();
const app = express();
const PORT = process.env.PORT || 2000
app.use(express.json());
app.use(bodyParser.urlencoded({}))

 mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
 const con= mongoose.connection
try{
    con.on('open',() => console.log('db connected'))
} catch(error){
     console.log(error)
}

app.use('/api/v1/regions', routes);

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT} port!`);
});
