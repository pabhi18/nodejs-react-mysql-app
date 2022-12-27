import express from 'express';
import cors from 'cors';
// import apicache from 'apicache';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';

const app = express();
// const cache = apicache.middleware;

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
// app.use(cache('5 minutes'));
app.use('/api', userRoutes);

app.listen(8800);
