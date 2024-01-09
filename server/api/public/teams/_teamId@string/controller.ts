import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const team = await prismaClient.team.findUniqueOrThrow({
      where: { id: params.teamId }
    });
    return { status: 200, body: team };
  }
}));
