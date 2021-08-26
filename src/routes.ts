import { Router } from 'express'
import { CreateCompaniesController } from './controllers/CreateCompaniesController';
import { CreateContactsController } from './controllers/CreateContactsController'
import { DeleteContactsController } from './controllers/DeleteContactsController';
import { UpdateContactsController } from './controllers/UpdateContactsController'
import { ListCompanyController } from './controllers/ListCompanyController';
import { ListContactsController } from './controllers/ListContactController';
import { DeleteCompanyController } from './controllers/DeleteCompanyController';
import {UpdateCompaniesController} from './controllers/UpdateCompanyController'
const router = Router();

const createCompaniesController = new CreateCompaniesController()
const createContactsController = new CreateContactsController()

const listCompanyController = new ListCompanyController()
const listContactsController = new ListContactsController()
const deleteContactsController = new DeleteContactsController()
const deleteCompanyController = new DeleteCompanyController()
const updateContactController = new UpdateContactsController()
const updatecompanyController=new UpdateCompaniesController()



router.post('/companies', createCompaniesController.handle)
router.post('/contacts', createContactsController.handle)


router.get("/companies", listCompanyController.handle)
router.get("/users", listContactsController.handle)

router.delete("/users/:id", deleteContactsController.handle)
router.delete("/companies/:id",deleteCompanyController.handle)

router.put("/putUsers/:id", updateContactController.handle)
router.put("/putCompanies/:id",updatecompanyController.handle)




export { router };