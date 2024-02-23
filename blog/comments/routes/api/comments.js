import { Router } from "express";
import {randomBytes} from 'crypto';
import axios from 'axios';

const router = Router();
const commentsByPostId = {};

router.get('/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

router.post('/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content});
    commentsByPostId[req.params.id] = comments;

    // Emit an event to Event Bus
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await axios.post('http://localhost:5005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            data: content,
            postId: req.params.id
        }
    }, config);

    res.status(201).send(comments);
});

router.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.status(200).send({});
});

export default router;