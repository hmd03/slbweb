import { atom } from 'recoil';

export type User = {
  nickname: string;
};

export const UserState = atom<User | null>({
  key: 'UserState',
  default: {
    nickname: '',
  },
});
