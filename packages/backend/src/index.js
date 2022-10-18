import express from 'express';
import dotenv from 'dotenv';
import router from './shared/router.js';

dotenv.config();

const app = express();

app.use('/api', router);

const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`Backend currently listening on http://localhost:${PORT}`);
});
