import { Request, Response } from 'express'
import { CreateCompaniesService } from '../services/CreateConpaniesService';
import { CreateContactsService } from '../services/CreateContactsService';

class CreateContactsController {
    async handle(request: Request, response: Response) {
        try {
            const {id,companiesId, name, last_name, name1, last_name1 } = request.body;
            

            const createContactsService = new CreateContactsService();

            const contacts = await createContactsService.execute({
                name,
                last_name,
                companiesId,
                name1,
                last_name1,
                id


            });
            return response.json(contacts)
        } catch (err) {
            return response.status(400).json({
                err: err.message
            })
        }

    }
}
export { CreateContactsController }