import path from 'path';
import Express from 'express';
import homeRouter from './routers/home';
import imageRouter from './routers/image';
import fs from 'fs';

const router = Express.Router();
const testpic1 = fs.readFileSync(path.join(__dirname, '../../assets/testpic1.png'));
const testpic2 = fs.readFileSync(path.join(__dirname, '../../assets/testpic2.png'));

const IMG_ASSETS_DIR = path.join(__dirname, '../../assets/');

// Read all Image files in assets directory
function readImages (dirname, onError, onSuccess) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach((filename) => {
      fs.readFile(dirname + filename, (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onSuccess(filename, content);
      });
    });
  })
}

const imageDataMap = new Map();

readImages(IMG_ASSETS_DIR, (err) => {
  console.error('Error reading file contents', err);
}, (filename, fileContent) => {
  imageDataMap.set(filename, fileContent);
});

router.use((req, res, next) => {

  // Approach #1: H2 Push
  imageDataMap.forEach((value, key) => {
    const stream = res.push('/image/' + key, {
      status: 200,
      method: 'GET',
      request: {
        'accept': '*/*'
      },
      response: {
        'content-type': 'image/png'
      }
    });

    stream.on('error', (err) => {
      console.error('Error:', err.message);
      stream.removeAllListeners();
    });

    stream.end(value);
  });

  // Approach #2: Preload Link Header
  // let linkHeader = [];
  // imageDataMap.forEach((value, key) => {
  //   linkHeader.push(`</image/${key}>; rel=preload; as=image`);
  // });

  // res.setHeader('Link', linkHeader.join(','));

  next();
});

router.get('/', homeRouter);
router.get('/image/:imageName', imageRouter);

export default router;