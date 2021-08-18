import { EntityRepository, Repository } from 'typeorm'
import { Companies } from '../entities/Companies'

@EntityRepository(Companies)
class CompaniesRepositories extends Repository<Companies>{

}
export { CompaniesRepositories }