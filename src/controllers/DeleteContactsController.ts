import { Request, Response } from 'express'
import { DeleteContactsService } from '../services/DeleteContactsService';

class DeleteContactsController {
    async handle(request: Request, response: Response) {
        const deleteCompaniesService = new DeleteContactsService();
        try {
            const { id } = request.params;
            const deleteUSers = await deleteCompaniesService.execute({
                id
            })

            return response.json(deleteUSers)
        } catch (err) {
            return response.status(400).json({
                err: err.message
            })
        }

    }

    // try {
    //     const { title } = request.body;

    // const createCompaniesService = new CreateCompaniesService();

    // const companies = await createCompaniesService.execute({
    //     title
    // });
    // return response.json(companies)
    // } catch (err) {
    //     return response.status(400).json({ 
    //         errr:err.message
    //     })
    // }

}

export { DeleteContactsController }