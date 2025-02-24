declare module 'js-cookie' {
    interface Cookies {
        set(name: string, value: string, options?: { 
            expires?: number | Date; 
            path?: string; 
            domain?: string; 
            secure?: boolean; 
            sameSite?: 'Lax' | 'Strict' | 'None'; 
            httpOnly?: boolean;
        }): void;
        get(name: string): string | undefined;
        remove(name: string, options?: { path?: string; domain?: string }): void;
    }

    const Cookies: Cookies;
    export default Cookies;
}
