import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client as a singleton
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;