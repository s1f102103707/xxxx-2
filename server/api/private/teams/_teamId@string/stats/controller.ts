import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const teamStats = await prismaClient.teamStats.findUniqueOrThrow({
      where: { teamId: params.teamId },
    });
    return { status: 200, body: teamStats };
  },
}));
