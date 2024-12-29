import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from './env/env.module';
import { ProtoV1Module } from './proto-v1/proto-v1.module';

import { ActionsModule } from './actions/actions.module';
import { ActionsService } from './actions/actions.service';
import { HelloModule } from './hello/hello.module';
import { LocalstoreModule } from './localstore/localstore.module';
import { LocalStoreService } from './localstore/localstore.service';
import { HelloService } from './hello/hello.service.js';
import { ProtoV1Service } from './proto-v1/proto-v1.service';

@Module({
  imports: [   
     EnvModule.forRoot(),
     ProtoV1Module, 
     ActionsModule, HelloModule, LocalstoreModule,
  ],
  controllers: [AppController],
  providers: [ActionsService,LocalStoreService,HelloService,ProtoV1Service],
})
export class AppModule {}
