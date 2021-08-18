import { CompaniesRepositories } from "../repositories/CompaniesRepositories"
import { getCustomRepository } from 'typeorm'
interface ICompaniesRequest {
    title: string;
}
class CreateCompaniesService {
    async execute({ title }: ICompaniesRequest) {
        const companiesRepository = getCustomRepository(CompaniesRepositories)

         if (!title) {
             throw new Error("Name Companies incorrect")
        }

        const companiesExists = await companiesRepository.findOne({
            title
        })
        if (companiesExists) {
            throw new Error("Empresa ja cadastrada")
        }
        const companies = companiesRepository.create({
            title
        })


        // const empresas = await companiesRepository.find({ relations: ["contacts"] })
        // await companiesRepository.save(empresas)
        
        await companiesRepository.save(companies)
        return companies
    }
}
export { CreateCompaniesService }