import { atom } from 'recoil';
import { User } from '../types/interface';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoadingState = atom({
  key: 'LoadingState',
  default: false,
});

export const UserState = atom<User>({
  key: 'UserState',
  default: {
    id: '',
    accessToken: '',
  },
  effects_UNSTABLE: [persistAtom],
});
