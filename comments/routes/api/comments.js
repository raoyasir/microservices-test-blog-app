import { Router } from "express";
import {randomBytes} from 'crypto';

const router = Router();
const commentsByPostId = {};

router.get('/comments/:id', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

router.post('/comments/:id', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content});
    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

export default router;