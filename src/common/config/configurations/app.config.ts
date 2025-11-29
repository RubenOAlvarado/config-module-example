import { registerAs } from '@nestjs/config';
import { AppConfig } from 'src/common/types/app.types';

export default registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: (process.env.NODE_ENV || 'development') as
      | 'development'
      | 'production'
      | 'test'
      | 'staging',
  }),
);
