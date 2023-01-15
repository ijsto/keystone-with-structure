import type { Lists } from '.keystone/types';

// Import all the lists you want to expose to the GraphQL API
import { User } from './api/user/User';

export const lists: Lists = {
  // Add the imported lists here
  User,
};
