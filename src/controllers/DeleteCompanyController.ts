import { Request, Response } from 'express'
import {  DeleteCompanyService} from '../services/DeleteCompanyService';

class DeleteCompanyController {
    async handle(request: Request, response: Response) {
        const deleteCompaniesService = new DeleteCompanyService();
        try {
            const { id } = request.params;
            const deleteUSers = await deleteCompaniesService.execute({
                id
            })

            return response.json(deleteUSers)
        } catch (err) {
            return response.status(400).json({
                errr: err.message
            })
        }

    }



}

export { DeleteCompanyController }