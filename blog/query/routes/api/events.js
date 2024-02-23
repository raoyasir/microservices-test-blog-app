import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    console.log('query events');
})

export default router;