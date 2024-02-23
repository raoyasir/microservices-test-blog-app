import express, {json} from 'express';
import cors from 'cors';
import posts from './routes/api/posts.js';
import events from './routes/api/events.js';

const app = express();

app.use(json({extended:false}));
app.use(cors());

app.use('/posts', posts);
app.use('/events', events);


if(process.env.NODE_ENV === 'production'){
    // Put production related config here
}

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));