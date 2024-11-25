import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from './env/env.module';
import { ProtoV1Module } from './proto-v1/proto-v1.module';

import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [   
     EnvModule.forRoot(),
     ProtoV1Module, 
     ActionsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
