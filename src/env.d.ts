/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_APIKEY: string
}

interface ImportMeta {
  env: ImportMetaEnv
}
