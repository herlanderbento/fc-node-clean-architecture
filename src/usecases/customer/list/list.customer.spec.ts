import CustomerFactory from '../../../domain/customer/factory/customer.factory';
import Address from '../../../domain/customer/value-object/address';
import ListCustomerUseCases from './list.customer.usecases';

const customer1 = CustomerFactory.createWithAddress(
  'Antonio Gabriel',
  new Address('Street 1', 1, '123', 'City')
);

const customer2 = CustomerFactory.createWithAddress(
  'Paulo Estêvão',
  new Address('Street 2', 2, '1234', 'City2')
);

const customer3 = CustomerFactory.createWithAddress(
  'Marcia Gaieta',
  new Address('Street 3', 3, '12345', 'City3')
);

const customer4 = CustomerFactory.createWithAddress(
  'Jorge Neto',
  new Address('Street 4', 4, '1234', 'City4')
);

const customer5 = CustomerFactory.createWithAddress(
  'Wilson',
  new Address('Street 5', 5, '1234', 'City5')
);

const MockRepository = () => {
  return {
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest
      .fn()
      .mockReturnValue(
        Promise.resolve([customer1, customer2])
      ),
  };
};

describe('Unit test for listing customer usecases', () => {
  it('should list a customer', async () => {
    const customerRepository = MockRepository();
    const listCustomerUseCases = new ListCustomerUseCases(customerRepository);

    const output = await listCustomerUseCases.execute();

    expect(output.customers.length).toBe(2)

    expect(output.customers[0].id).toBe(customer1.id)
    expect(output.customers[0].name).toBe(customer1.name)
    expect(output.customers[0].address.street).toBe(customer1.Address.street)

    expect(output.customers[1].id).toBe(customer2.id)
    expect(output.customers[1].name).toBe(customer2.name)
    expect(output.customers[1].address.street).toBe(customer2.Address.street)

  });
});
