const express = require('express');
 //for posting the body
require('./src/db/mongoose')
const objectiveRouter = require('./src/routers/objectiveAPI')



const app = express();
const PORT = process.env.PORT || 3000;


app.use(objectiveRouter);

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));