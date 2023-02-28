import express, { Express } from 'express';
import { Sequelize } from 'sequelize-typescript';
import CustomerModel from '../customer/sequelize/model/customer.model';

import { router } from './routes';

export const app: Express = express();

app.use(express.json());
app.use(router);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  });

  sequelize.addModels([CustomerModel]);
  await sequelize.sync()
}

setupDb();
