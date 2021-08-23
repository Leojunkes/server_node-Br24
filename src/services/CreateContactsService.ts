import { ContactsRepositories } from "../repositories/ContactsRepositories"
import { getCustomRepository } from 'typeorm'


interface IContactsRequest {
    id: string;
    name: string;
    last_name: string;
    companiesId: string;
    name1: string;
    last_name1: string;
    

}
class CreateContactsService {
    async execute({ id, companiesId, name, last_name, name1, last_name1 }: IContactsRequest) {
        const contactsRepository = getCustomRepository(ContactsRepositories);

        if (!name) {
            throw new Error("Name User incorrect")
        }

        const contactsExists = await contactsRepository.findOne({
            name
        })
        if (contactsExists) {
            throw new Error("User already exists")
        }


        const contacts = contactsRepository.create({
            last_name1,
            name1,
            name,
            last_name,
            companiesId,
            id

        })

        const users = await contactsRepository.find({ relations: ["companies"] })


        await contactsRepository.save(users)


        await contactsRepository.save(contacts)
        return (contacts)
    }
}
export { CreateContactsService }