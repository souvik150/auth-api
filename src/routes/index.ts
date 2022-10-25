import express from 'express';

const router = express.Router()

router.get('/healthcheck', (_,res) => {
        res.send(
            "Hello World",
        )
})

export default router;