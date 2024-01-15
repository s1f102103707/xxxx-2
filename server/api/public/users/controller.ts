import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => {
    const users = await prismaClient.user.findMany();
    return { status: 200, body: users };
  }
}));
