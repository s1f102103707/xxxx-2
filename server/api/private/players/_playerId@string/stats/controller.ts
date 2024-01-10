import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const playerStats = await prismaClient.playerStats.findUniqueOrThrow({
      where: { userId: params.playerId },
    });
    return { status: 200, body: playerStats };
  },
}));
