import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from './env/env.module';
import { ProtoV1Module } from './proto-v1/proto-v1.module';

import { ActionsModule } from './actions/actions.module';
import { ActionsService } from './actions/actions.service';
import { GithubModule } from './github/github.module';
import { LocalstoreModule } from './localstore/localstore.module';
import { LocalStoreService } from './localstore/localstore.service';
import { GithubService } from './github/github.service.js';

@Module({
  imports: [   
     EnvModule.forRoot(),
     ProtoV1Module, 
     ActionsModule, GithubModule, LocalstoreModule,
  ],
  controllers: [AppController],
  providers: [ActionsService,LocalStoreService,GithubService],
})
export class AppModule {}
