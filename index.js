import express  from 'express';
import {PORT} from './confin.js'

const app = express();
app.listen(PORT)
console.log(`Server is the port ${PORT}`)