import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => {
    const teams = await prismaClient.team.findMany();
    return { status: 200, body: teams };
  },
}));
