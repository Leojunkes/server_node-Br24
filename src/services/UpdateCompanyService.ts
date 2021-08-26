import { CompaniesRepositories } from "../repositories/CompaniesRepositories"
import { getCustomRepository } from 'typeorm'



interface ICompaniesRequest {
    title: string
    email: string
    id: string


}
class UpdateCompaniesService {
    async execute({ title, email, id }: ICompaniesRequest) {
        const companiesRepository = getCustomRepository(CompaniesRepositories);



        const contacts = companiesRepository.update(id, {

            title,
            email,


        })

        await companiesRepository.update(+contacts, { id });
        return (contacts)
    }
}
export { UpdateCompaniesService }