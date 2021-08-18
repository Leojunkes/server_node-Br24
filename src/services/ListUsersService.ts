import { getCustomRepository } from 'typeorm';
import { ContactsRepositories } from '../repositories/ContactsRepositories';



class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(ContactsRepositories)
        const users = await usersRepositories.find()
        return users
    }
}
export { ListUsersService }