import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';


class ListContactsController {
    async handle(request: Request, response: Response) {
        const listUsersservice = new ListUsersService()
        const users = await listUsersservice.execute()
        return response.json(users)
    }
}
export { ListContactsController }