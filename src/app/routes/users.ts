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
      res.json(result);
    });
  }

  private update(req: Request, res: Response) {
    res.json({someKey:'someProp'});
  }

  private delete(req: Request, res: Response) {
    let userId = req.params.userId;
    console.log(userId);
    db.remove({_id:userId}, (error, result) => {
      res.status(204).send();
    });
  }

  public init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.create);
    this.router.patch('/:userId', this.getAll);
    this.router.delete('/:userId', this.delete);
  }
}

const usersRoutes: UsersRouter = new UsersRouter();
usersRoutes.init();

export default usersRoutes.router;