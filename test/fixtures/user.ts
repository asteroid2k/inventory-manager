import { faker } from "@faker-js/faker";

export const password: string = faker.internet.password(8);

export const validUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email().toLocaleLowerCase(),
  password: faker.internet.password(8),
};
export const invalidUser = {
  firstName: faker.random.alpha(1),
  lastName: faker.random.alpha(1),
  email: faker.random.alpha(5),
  password: faker.internet.password(3),
};
