import { Repository, EntityRepository } from 'typeorm'
import { Contacts } from '../entities/Contacts'

@EntityRepository(Contacts)
class ContactsRepositories extends Repository<Contacts> { }

export { ContactsRepositories }