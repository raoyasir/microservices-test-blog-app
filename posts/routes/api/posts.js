import { Router } from "express";
import { randomBytes } from 'crypto';

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
router.post('/', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id, title
    }
    
    res.status(201).send(posts[id]);
});

export default router;