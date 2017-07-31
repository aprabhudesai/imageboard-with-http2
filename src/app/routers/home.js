import path from 'path';
import Express from 'express';

const homeRouter = (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
}

export default homeRouter;