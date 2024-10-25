import express from 'express';
import queryRoute from './routes/queries.routes.js';
import morgan from 'morgan';

const port = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(queryRoute);

app.get('/', (req, res) => {
    res.send("Hello Wolrd")
});


app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
