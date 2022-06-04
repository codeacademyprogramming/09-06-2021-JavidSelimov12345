import  express,{Request, Response} from 'express';
import mongoose from 'mongoose'
import { ROUTES } from './routes';
import cors from 'cors';
export const app = express();
const port = 8003; // default port to listen
const uri="mongodb+srv://javid:javid12345@cluster0.yzlqo.mongodb.net/test"

mongoose.connect(uri, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true,
    });

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', ()=> console.log("mangoosa goshuldun"));

app.use(cors());
app.use(express.json())

// define a route handler for the default home page
ROUTES.forEach(({path,router})=>{
   app.use(path,router)
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );