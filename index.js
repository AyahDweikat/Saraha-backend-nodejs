import express from 'express';
import initApp from './src/app.router.js';
import { sendEmail } from './src/services/sendEmail.js';
const app = express();
const PORT = process.env.PORT;


initApp(app, express)




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


