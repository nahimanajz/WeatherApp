import express from 'express';
import Weather from '../controller/weather';
const routes = express.Router();
routes.post('/store', Weather.store)
routes.get('/:region', Weather.getOne)
routes.put('/:id', Weather.update)
routes.get('/', Weather.all)

routes.get('/test', (req, res)=> res.send({message: 'route works '}))
export default routes