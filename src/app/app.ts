import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import UsersRouter from './routes/users';

class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(cors());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    let router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Users API up and running!'
      });
    });
    this.express.use('/', router);
    this.express.use('/v1/users', UsersRouter);
  }

}

export default new App().express;