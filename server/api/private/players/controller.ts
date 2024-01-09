import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const player = await prismaClient.user.create({
      data: {
        email: body.email,
        name: body.name,
        createdAt: new Date()
      },
    });
    return { status: 201, body: player };
  },
}));
