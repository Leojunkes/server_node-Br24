import { Request, Response } from 'express'
import { UpdateCompaniesService } from '../services/UpdateCompanyService';

class UpdateCompaniesController {
    async handle(request: Request, response: Response) {
        const updatecompaniesService = new UpdateCompaniesService();
        try {
            const { id } = request.params;
            const { title, email } = request.body;
            const updateUSers = await updatecompaniesService.execute({
                id,
                title,
                email,

            })

            return response.json(updateUSers)
        } catch (err) {
            return response.status(400).json({
                errr: err.message
            })
        }

    }



}

export { UpdateCompaniesController }