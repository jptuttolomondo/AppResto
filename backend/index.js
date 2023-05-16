const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const mongoose =require ('mongoose');   
const { PORT,MONGODB_URI } = process.env;
require("dotenv").config() 
// mongoose.connect(process.env.MONGODB_URI).then(()=>{  
//     console.log('conectada a mongo db');   
// });
conn.sync({ force: false}).then(() => {  

server.listen(process.env.PORT, () => {console.log('Server: 3001 port');  });});
