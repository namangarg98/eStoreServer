const express = require('express');
const cors = require('cors');

const app = express();
const productCategories = require('./Routes/product.js');

app.use(cors());
app.use("/",productCategories);

const PORT = 5001;
const server = app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})