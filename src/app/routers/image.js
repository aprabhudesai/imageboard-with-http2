import path from 'path';
import Express from 'express';

const imageRouter = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../assets/' + req.params.imageName));
}

export default imageRouter;