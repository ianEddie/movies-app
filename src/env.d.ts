/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_APIKEY: string
}

interface ImportMeta {
  env: ImportMetaEnv
}
