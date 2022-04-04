import { faker } from "@faker-js/faker";

export const password: string = faker.internet.password(8);

export const seedUser = {
  firstName: "root",
  lastName: "root",
  email: "rootGuy@mail.com",
  phoneNumber: faker.phone.phoneNumber(),
  password:
    "$argon2i$v=19$m=4096,t=3,p=1$SDXDlCp0mOeam1/fw+BPCg$EYi+nRUB9S+3roDfC3H+BfUyd7nxv91e+vE0Dz+p778",
  salt: "$2a$10$vl84D1P5e8uDheX7xhxRju"
};
export const validUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email().toLocaleLowerCase(),
  phoneNumber: Math.random().toString().substring(8),
  password: faker.internet.password(8)
};
export const invalidUser = {
  firstName: faker.random.alpha(1),
  lastName: faker.random.alpha(1),
  email: faker.random.alpha(5),
  password: faker.internet.password(3)
};
