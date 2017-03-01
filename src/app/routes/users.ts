import {Router, Request, Response} from 'express';
import {db} from '../database';

interface User {
  _id: string,
  firstName: string,
  lastName: string,
  age: number,
  email: string
  profilePictureUrl: string
}

class UsersRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
    db.loadDatabase();
  }

  private getAll(req: Request, res: Response) {
    let data = db.getAllData();
    res.json(data);
  }

  private create(req: Request, res: Response) {
    let data = db.getAllData();
    let newUser: any = req.body;
    db.insert(newUser, (error, result) => {
      if(error) {
        return res.status(500).send('There was an error');
      }
      res.status(201).json(result);
    });
  }

  private update(req: Request, res: Response) {
    let userId = req.params.userId;
    let values = {$set: req.body};

    console.log('PATCH users request for userId ',userId,' with JSON Body containing \n',req.body);

    db.update({_id: userId}, values, {}, (error, numAffected) => {
      if(error || numAffected > 1) {
        return res.status(500).send('There was a server error');
      } else {
        if(numAffected !== 1) {
          return res.status(404).json({reason: 'That user does not exist'});
        } else {
          return res.status(204).send();
        }
      }
    });

  }

  private delete(req: Request, res: Response) {
    let userId = req.params.userId;

    console.log('DELETE users request for userId', userId);

    db.remove({_id:userId}, (error, numRemoved) => {
      if(error || numRemoved > 1) {
        return res.status(500).send('There was a server error');
      } else {
        if(numRemoved !== 1) {
          return res.status(404).json({reason: 'That user does not exist'});
        } else {
          return res.status(204).send();
        }
      }
    });
  }

  public init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.create);
    this.router.patch('/:userId', this.update);
    this.router.delete('/:userId', this.delete);
  }
}

const usersRoutes: UsersRouter = new UsersRouter();
usersRoutes.init();

export default usersRoutes.router;