import express, {json} from 'express';
import posts from './routes/api/posts.js';
import cors from 'cors';

const app = express();
app.use(json({extended: false}));
app.use(cors());

app.use('/', posts);
app.use('/posts', posts);

if(process.env.NODE_ENV === 'production'){
// put production related environment handlings here
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
