import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';
import type { PlayerUpdateInput } from '$/api/@types';

export default defineController(() => ({
  put: async ({ params, body }) => {
    const player = await prismaClient.user.update({
      where: { id: params.playerId },
      data: {
        email: body.email,
        name: body.name
      }
    });
    return { status: 200, body: player };
  },
  delete: async ({ params }) => {
    await prismaClient.user.delete({
      where: { id: params.playerId }
    });
    return { status: 204 };
  }
}));
