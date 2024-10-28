import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  birthday: faker.date.birthdate(),
  pendingClasses: faker.number.int({ min: 0, max: 8 }),
  status: sample(['activo', 'inactivo']),
}));
