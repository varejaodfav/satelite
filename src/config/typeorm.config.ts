import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';

// Utils
import checkPort from '@shared/utils/validatePort.util';

const typeormConfig: ConnectionOptions = {
  type: 'postgres',

  host: process.env.POSTGRES_HOST,
  port: checkPort('(DATABASE)', +!process.env.POSTGRES_PORT, 5432),

  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB || 'satelite',

  synchronize: false,
  migrationsRun: true,

  entities: ['src/modules/**/infra/typeorm/entities/**/*.ts'],
  migrations: ['src/shared/infra/database/typeorm/migrations/**/*.ts'],
  subscribers: ['src/shared/infra/database/typeorm/subscribers/**/*.ts'],

  cli: {
    migrationsDir: 'src/shared/infra/database/typeorm/migrations',
    subscribersDir: 'src/shared/infra/database/typeorm/subscribers',
  },

  logging: false,
};

export default typeormConfig;
