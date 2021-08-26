

import { Request, Response } from 'express'
import { UpdateContactsService } from '../services/UpdateContactsService';

class UpdateContactsController {
    async handle(request: Request, response: Response) {
        const updateContactsService = new UpdateContactsService();
        try {
            const { id } = request.params;
            const { name, last_name, name1, last_name1} = request.body;
            const updateUSers = await updateContactsService.execute({
                id,
                name,
                last_name,
                name1,
                last_name1,
                

            })

            return response.json(updateUSers)
        } catch (err) {
            return response.status(400).json({
                errr: err.message
            })
        }

    }



}

export { UpdateContactsController }