import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSubscriber(email: string) {
  return prisma.subscriber.create({
    data: {
      email,
    },
  });
}
