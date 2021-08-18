

import { Request, Response } from 'express'
import { UpdateContactsService } from '../services/UpdateContactsService';

class UpdateContactsController {
    async handle(request: Request, response: Response) {
        const updateContactsService = new UpdateContactsService();
        try {
            const { id } = request.params;
            const updateUSers = await updateContactsService.execute({
                id
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