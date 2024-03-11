import express from "express";
// The bodyParser comes with Express, and it allows us to take in the incoming POST request body.
import bodyParser from "body-parser";
import userRouters from './routers/users.js';

const app = express();
const PORT  = 6000;

// we specified that JSON data will be used in the application
app.use(bodyParser.json());
app.use('/users', userRouters);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))


// he method accepts two things: the PORT, which is where we would be listening for requests from our client side, and a callback function that will be triggered when our server is set up.
app.listen(PORT, () => console.log(`Server start working in port ${`http://localhost:${PORT}`}`))