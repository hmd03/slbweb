import { atom } from 'recoil';
import { User } from '../types/interface';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoadingState = atom({
    key: 'LoadingState',
    default: false,
});

export const defaultUser = {
    id: '',
    name: '',
    isSupervisor: false,
};

export const UserState = atom<User>({
    key: 'UserState',
    default: defaultUser,
    effects_UNSTABLE: [persistAtom],
});

export const siteSettingState = atom({
    key: 'siteSettingState',
    default: {
        name: '',
        title: '',
        description: '',
        privacyPolicy: '',
        termsOfService: '',
        keywords: '',
    },
});
