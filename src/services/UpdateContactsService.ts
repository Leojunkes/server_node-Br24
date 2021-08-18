

import { ContactsRepositories } from "../repositories/ContactsRepositories"
import { getCustomRepository } from 'typeorm'


interface IContactsRequest {
    id: string
    

}
class UpdateContactsService {
    async execute({ id }: IContactsRequest) {
        const contactsRepository = getCustomRepository(ContactsRepositories);

        const contacts = contactsRepository.update(id,{
            id,
            
            

        })

        if (!id) {
            throw new Error("id incorreto!!");

        }

        // await contactsRepository.update()
        return (contacts)
    }
}
export { UpdateContactsService }