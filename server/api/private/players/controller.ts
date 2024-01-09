import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';
import type { PlayerCreateInput, PlayerUpdateInput } from '$/api/@types';

export default defineController(() => ({
  post: async ({ body }) => {
    const player = await prismaClient.user.create({
      data: {
        email: body.email,
        name: body.name
      }
    });
    return { status: 201, body: player };
  }
}));
