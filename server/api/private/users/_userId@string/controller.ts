import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await prismaClient.user.findUniqueOrThrow({
      where: { id: params.userId },
    });
    return { status: 200, body: user };
  },
  put: async ({ params, body }) => {
    const updatedUser = await prismaClient.user.update({
      where: { id: params.userId },
      data: body,
    });
    return { status: 200, body: updatedUser };
  },
  delete: async ({ params }) => {
    await prismaClient.user.delete({
      where: { id: params.userId },
    });
    return { status: 204 };
  },
}));
