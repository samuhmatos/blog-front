namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE: string;
    NEXT_PUBLIC_API_URL: string;

    APP_PROTOCOL: string;
    APP_DOMAIN: string;
    APP_PORT: number;
    NEXT_PUBLIC_APP_URL: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
