const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');
const slapp = express();

slapp.use(cors());
slapp.use(express.json());
slapp.use(routes);

slapp.listen(3333);