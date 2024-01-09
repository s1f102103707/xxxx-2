import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';
import type { TeamCreateInput } from '$/api/@types';

export default defineController(() => ({
  post: async ({ body }) => {
    const team = await prismaClient.team.create({
      data: {
        name: body.name
      }
    });
    return { status: 201, body: team };
  }
}));
