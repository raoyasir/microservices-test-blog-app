import { Router } from "express";
import { randomBytes } from 'crypto';
import axios from 'axios';

const router = Router();
const posts = {};

/**
 * @route  GET api/posts/
 * @desc   Get all posts from app
 * @access Public
 */
router.get('/', (req, res) => {
    res.send(posts);
});

/**
 * @route  GET api/posts/
 * @desc   Insert a post in app
 * @access Public
 */
router.post('/', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }

    // Emit an event to Post request to Event Bus
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await axios.post('http://localhost:5005/events', {
        type: 'PostCreated',
        data: {
            id,
            title
        }
    }, config);
    
    res.status(201).send(posts[id]);
});

router.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.status(200).send({});
});

export default router;