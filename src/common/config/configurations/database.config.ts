import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from 'src/common/types/database.types';

export default registerAs(
  'database',
  (): DatabaseConfig => ({
    url: process.env.DATABASE_URL || '',
  }),
);
