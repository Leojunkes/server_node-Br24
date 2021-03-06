import { Request, Response } from 'express'
import { CreateCompaniesService } from '../services/CreateConpaniesService';

class CreateCompaniesController {
    async handle(request: Request, response: Response) {
        try {
            const { title, email } = request.body;

        const createCompaniesService = new CreateCompaniesService();

        const companies = await createCompaniesService.execute({
            title,
            email
        });
        return response.json(companies)
        } catch (err) {
            return response.status(400).json({ 
                errr:err.message
            })
        }
        
    }
}
export { CreateCompaniesController }