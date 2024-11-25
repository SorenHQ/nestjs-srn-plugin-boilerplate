import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from './env/env.module';

@Module({
  imports: [   
     EnvModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
