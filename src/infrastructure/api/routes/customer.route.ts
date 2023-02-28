import { Request, Response, Router } from 'express';
import CreateCustomerController from '../../../adapters/controllers/customers/create/create.customer.controller';
// import CreateCustomerUseCases from '../../../usecases/customer/create/create.customer.usecases';
// import CustomerMapper from '../../customer/sequelize/mapper/customer-mapper';
// import CustomerMapperImplementation from '../../customer/sequelize/mapper/customer-mapper-implementation';
// import CustomerRepository from '../../customer/sequelize/repository/customer.repository';

 const customerRoute = Router();

const createCustomerController = new CreateCustomerController();

customerRoute.post('/', createCustomerController.handle);

// customerRoute.post('/', async (request: Request, response: Response) => {
//   const { name, address } = request.body;
//   const { street, number, zip, city } = address;

//   const mapper: CustomerMapper = new CustomerMapperImplementation();
//   const customerRepository = new CustomerRepository(mapper);
//   const createCustomerUseCase = new CreateCustomerUseCases(customerRepository);

//   try {
//     const output = await createCustomerUseCase.execute({
//       name,
//       address: {
//         street,
//         number,
//         zip,
//         city,
//       },
//     });

//     response.send(output);

//   } catch (err) {
//     response.status(500).send(err);
//   }
// });

export { customerRoute }