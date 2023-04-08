const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://MINDSPACE:harsh7177@cluster0.wsmytdj.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})