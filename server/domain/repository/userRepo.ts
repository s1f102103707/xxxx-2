import type { UserModel } from '$/api/@types';
import type { Prisma, User } from '@prisma/client';

const toModel = (prismaUser: User): UserModel => ({
  id: prismaUser.id,
  email: prismaUser.email,
  name: prismaUser.name,
  createdAt: prismaUser.createdAt,
});

export const userRepo = {
  save: async (tx: Prisma.TransactionClient, user: UserModel) => {
    return tx.user.upsert({
      where: { id: user.id },
      update: { email: user.email, name: user.name },
      create: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
      },
    });
  },
  findById: (tx: Prisma.TransactionClient, userId: string): Promise<UserModel | null> =>
    tx.user
      .findUnique({ where: { id: userId } })
      .then((user) => (user !== null ? toModel(user) : null)),
};
