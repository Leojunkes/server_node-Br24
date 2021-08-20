

import { ContactsRepositories } from "../repositories/ContactsRepositories"
import { getCustomRepository } from 'typeorm'


interface IContactsRequest {

    name: string
    last_name: string
    name1: string
    last_name1: string
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

        await contactsRepository.update(+contacts, {})
        return (contacts)
    }
}
export { UpdateContactsService }