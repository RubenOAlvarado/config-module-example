import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port', { infer: true }) as number;
  const nodeEnv = configService.get<string>('app.nodeEnv', {
    infer: true,
  }) as string;
  if (nodeEnv === 'development') {
    console.log(`Application is running in ${nodeEnv} mode`);
    console.log(`Listening on port ${port}`);
  }
  await app.listen(port);
}
void bootstrap();
