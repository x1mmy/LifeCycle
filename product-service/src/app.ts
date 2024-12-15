import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req:Request, res:Response) => {
    const life = 5;
    res.send(life.toString());
})

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

export {app};