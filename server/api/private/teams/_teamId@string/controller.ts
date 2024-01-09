import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';
import type { TeamUpdateInput } from '$/api/@types';

export default defineController(() => ({
  put: async ({ params, body }) => {
    const team = await prismaClient.team.update({
      where: { id: params.teamId },
      data: {
        name: body.name
      }
    });
    return { status: 200, body: team };
  },
  delete: async ({ params }) => {
    await prismaClient.team.delete({
      where: { id: params.teamId }
    });
    return { status: 204 };
  }
}));
