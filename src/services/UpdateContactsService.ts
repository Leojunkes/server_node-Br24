

import { ContactsRepositories } from "../repositories/ContactsRepositories"
import { getCustomRepository } from 'typeorm'
import { Contacts } from "../entities/Contacts";


interface IContactsRequest {
    last_name1: string
    name1: string
    name: string
    last_name: string
    id: string



}
class UpdateContactsService {
    async execute({ id, name, last_name, name1, last_name1 }: IContactsRequest) {
        const contactsRepository = getCustomRepository(ContactsRepositories);



        const contacts = contactsRepository.update(id, {
            id,
            name,
            last_name,
            name1,
            last_name1,



        })

        await contactsRepository.update(+contacts, { id });
        return (contacts)
    }
}
export { UpdateContactsService }