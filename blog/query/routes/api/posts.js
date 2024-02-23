import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('query post');
})

export default router;