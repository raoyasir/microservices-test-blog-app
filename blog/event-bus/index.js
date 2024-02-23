import express, {json} from "express";
import eventHandler from './routes/api/eventHandler.js';
// import {cors} from 'cors';

const app = express();

app.use(json({extended: false}));
// app.use(cors());
app.use('/events', eventHandler);

if(process.env.NODE_ENV === 'production'){
    // Put Production Related Code here
}

const PORT = process.env.PORT || 5005
app.listen(PORT, () => console.log(`Server Listening on Post ${PORT}`));