import * as fs from 'fs';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";

import swaggerUi from 'swagger-ui-express'

// init express
const app = express();

// use swagger
const swaggerDocument = JSON.parse(fs.readFileSync('./docs/swagger.json'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors
app.use(cors());

// use router
app.use(router);


app.get('/', function(req, res){
    res.json({ message: 'Welcome to restaurant api' });
});

// PORT
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});