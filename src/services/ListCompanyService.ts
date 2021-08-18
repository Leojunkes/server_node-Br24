
import { getCustomRepository } from 'typeorm';
import { CompaniesRepositories } from '../repositories/CompaniesRepositories';



class ListCompanyService {
    async execute() {
        const companiesRepositories = getCustomRepository(CompaniesRepositories)
        const companies = await companiesRepositories.find()
        return companies
    }
}
export { ListCompanyService }