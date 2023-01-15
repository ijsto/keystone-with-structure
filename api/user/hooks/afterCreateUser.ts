import { BaseItem, KeystoneContext } from '@keystone-6/core/types';

// You can use this in your list hooks to run code after a mutation.
// To use this, add it to your list hooks in api/user/User.ts:
export const afterCreateUser = async ({
  context,
  item: createdUser,
}: {
  context: KeystoneContext;
  item: BaseItem;
}) => {
  if (!createdUser) throw new Error('Failed to create User createdUser.');

  // .. do something after creating a user
};
