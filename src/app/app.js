import path from 'path';
import Express from 'express';
import router from './routes';
import spdy from 'spdy';
import fs from 'fs';

const app = Express();
const port = 3000;

const options = {
    key: fs.readFileSync(path.join(__dirname,'../../server.key')),
    cert:  fs.readFileSync(path.join(__dirname, '../../server.crt'))
}

app.use(Express.static('dist'));
app.use('/', router);

spdy.createServer(options, app)
    .listen(port, (error) => {
      if (error) {
        console.error(error);
        return process.exit(1);
      }

      console.log('Listening on port: ' + port + '.');
    });