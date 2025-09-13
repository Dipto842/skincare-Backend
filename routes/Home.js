
import  express  from  "express" ;
const route =express.Router()

route.get('/', async(req, res) => {

res.json('survar is runn')});

export default route;