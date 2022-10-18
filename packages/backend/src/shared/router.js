import {Router} from 'express';

const mainRouter = Router();

mainRouter.get('/render', (req, res) => {
    res.send('Hello world!');
});

export default mainRouter;
