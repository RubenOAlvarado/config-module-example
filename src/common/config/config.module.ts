import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import appConfig from './configurations/app.config';
import databaseConfig from './configurations/database.config';
import { appValidationSchema } from './validations/app.schema';
import { databaseValidationSchema } from './validations/database.schema';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validationSchema: appValidationSchema.concat(databaseValidationSchema),
      envFilePath: [
        `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`,
      ],
      cache: true,
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
