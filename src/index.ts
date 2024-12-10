import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "RutvikBhuvaa",
      password: "123123",
      age: 21,
      city: "Bhavnagar",
    },
  });
}

createUser();
