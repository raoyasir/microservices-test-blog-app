import axios from "axios";
import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    const {body} = req;

    // Request to Post Service
    axios.post('http://localhost:5000/events', body);

    // Request to Comment Service
    axios.post('http://localhost:5001/events', body);

    // Request to Query Service
    // axios.post('http://localhost:5002', body);

    res.status(200).send('Ok');
});

export default router;