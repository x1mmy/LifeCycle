import express from 'express';
import { ProductRouter } from './Router/Router';

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () =>{
    console.log('Server running at http://localhost:3000. To close the port Ctrl + C');
})

process.on('SIGINT', () => {
    console.log('Closing server...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

app.use("/product", ProductRouter)

export {app};