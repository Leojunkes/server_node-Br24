import { ContactsRepositories } from "../repositories/ContactsRepositories"
import { getCustomRepository } from 'typeorm'


interface IContactsRequest {
    id: string

}
class DeleteContactsService {
    async execute({ id }: IContactsRequest) {
        const contactsRepository = getCustomRepository(ContactsRepositories);

        const contacts = contactsRepository.delete({
            id

        })

        if(!id){
            throw new Error("id incorreto!!");
            
        }

        await contactsRepository.delete(+contacts)
        return (contacts)
    }
}
        export { DeleteContactsService }