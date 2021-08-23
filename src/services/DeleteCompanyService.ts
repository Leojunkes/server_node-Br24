import { CompaniesRepositories } from "../repositories/CompaniesRepositories"
import { getCustomRepository } from 'typeorm'


interface IContactsRequest {
    id: string

}
class DeleteCompanyService {
    async execute({ id }: IContactsRequest) {
        const companiesRepository = getCustomRepository(CompaniesRepositories);

        const contacts = companiesRepository.delete({
            id

        })

        if(!id){
            throw new Error("id incorreto!!");
            
        }

        await companiesRepository.delete(+contacts)
        return (contacts)
    }
}
        export { DeleteCompanyService }