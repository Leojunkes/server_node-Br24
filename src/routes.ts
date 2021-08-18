import { Router } from 'express'
import { CreateCompaniesController } from './controllers/CreateCompaniesController';
import { CreateContactsController } from './controllers/CreateContactsController'
import { DeleteContactsController } from './controllers/DeleteContactsController';
import {UpdateContactsController} from './controllers/UpdateContactsController'
import { ListCompanyController } from './controllers/ListCompanyController';
import { ListContactsController } from './controllers/ListContactController';

const router = Router();

const createCompaniesController = new CreateCompaniesController()
const createContactsController = new CreateContactsController()

const listCompanyController = new ListCompanyController()
const listContactsController = new ListContactsController()
const deleteContactsController = new DeleteContactsController()
const updateContactController = new UpdateContactsController()



router.post('/companies', createCompaniesController.handle)
router.post('/contacts', createContactsController.handle)


router.get("/companies", listCompanyController.handle)
router.get("/users", listContactsController.handle)

router.delete("/users/:id", deleteContactsController.handle)
router.put("/users/:id", updateContactController.handle)  




export { router };