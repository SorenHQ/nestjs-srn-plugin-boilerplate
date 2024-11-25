import { DynamicModule, Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      envFilePath: [`.env${process.env.NODE_ENV?'.'+process.env.NODE_ENV:""}`],
      isGlobal: true,
    }),
  ],
})
export class EnvModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: EnvModule,
      providers: [EnvService],
      exports: [EnvService],
    };
  }
}
