// You can use this in your list hooks to run code before a mutation.
// To use this, add it to your list hooks in api/user/User.ts:
export const beforeCreateUser = async () => {
  console.log('About to create user');
};
