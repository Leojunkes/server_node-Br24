import 'reflect-metadata';
import express from 'express';
var bodyParser = require('body-parser')
import cors from 'cors';
import { router } from './routes';
import 'express-async-errors'

import './database';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

// app.post('/companies', function (req:Request, res:Response, next:NextFunction) {
//     res.json({msg:"this is CORS-enabled for all origins"})
// })

app.use(router);



// app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//         return response.status(400).json({
//             error: err.message
//         })
//     }
//     return response.status(500).json({
//         status: 'error',
//         message: 'Internal Server Error'
//     })
// })


app.listen(3333, () => console.log('Server is running on port 3333'))