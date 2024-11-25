interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_NOMBRE_APP: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}