import { KeystoneContext } from '@keystone-6/core/types';

export const someCustomService = async (context: KeystoneContext) => {
  const userId = context.session?.data?.id;
  if (!userId) return null;

  try {
    const currentUser = await context.query.User.findOne({
      query: 'id username email',
      where: { id: userId },
    });

    return currentUser;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
};
