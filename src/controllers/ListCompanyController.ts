
import { Request, Response } from 'express';
import { ListCompanyService } from '../services/ListCompanyService';


class ListCompanyController {
    async handle(request: Request, response: Response) {
        const listCompanyservice = new ListCompanyService()
        const companies = await listCompanyservice.execute()
        return response.json(companies)
    }
}
export { ListCompanyController }