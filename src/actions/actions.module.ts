import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { HelloService } from 'src/hello/hello.service';
import { LocalStoreService } from 'src/localstore/localstore.service';
import { ProtoV1Service } from 'src/proto-v1/proto-v1.service';

@Module({
  controllers: [ActionsController],
  providers: [ActionsService,LocalStoreService,HelloService,ProtoV1Service],

})
export class ActionsModule {}
