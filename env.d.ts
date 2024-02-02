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

    NEXT_PUBLIC_REVALIDATE_5_MINUTES: number;
    NEXT_PUBLIC_REVALIDATE_30_MINUTES: number;
    NEXT_PUBLIC_REVALIDATE_1_HOUR: number;
    NEXT_PUBLIC_REVALIDATE_2_HOURS: number;
  }
}
