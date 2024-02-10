import express, {json} from 'express';
import comments from './routes/api/comments.js';
import cors from 'cors';

const app = express();

app.use(json({extended:false}));
app.use(cors());

app.use('/posts',comments);

if(process.env.NODE_ENV === 'production'){
    // Put production related config here
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));