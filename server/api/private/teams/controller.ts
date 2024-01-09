import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const team = await prismaClient.team.create({
      data: {
        name: body.name,
      },
    });
    return { status: 201, body: team };
  },
}));
