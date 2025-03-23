declare module 'js-cookie' {
    interface Cookies {
      set(name: string, value: string, options?: { expires?: number | Date; path?: string; [key: string]: any }): void;
      get(name: string): string | undefined;
      remove(name: string, options?: { path?: string }): void;
    }
  
    const cookies: Cookies;
    export default cookies;
  }
  