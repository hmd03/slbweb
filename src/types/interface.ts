export interface User {
    id: string;
    name: string;
    isSupervisor: boolean;
    accessToken: string;
    effects_UNSTABLE?: any[];
}