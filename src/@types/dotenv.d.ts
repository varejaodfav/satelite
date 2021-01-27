declare namespace NodeJS {
  export interface ProcessEnv { // eslint-disable-line
    // Server Configurations
    NODE_ENV: 'production' | 'development';

    API_PORT: number;
    API_URL: string;
    API_AUTH_KEY: string;
    API_AUTH_EXPIRES: string;

    MAX_UPLOAD_SIZE: number;

    // Solr Configurations
    SOLR_HOST: string;
    SOLR_PORT: number;
    SOLR_API_ID: string;
    SOLR_API_KEY: string;
    SOLR_ENABLED: boolean;
    SOLR_MAX_RETRIES: number;
    SOLR_REQUEST_TMOUT: number;

    // TypeORM Configurations
    POSTGRES_DB: string;
    POSTGRES_PORT: number;
    POSTGRES_SCHEMA: string;
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
  }
}
