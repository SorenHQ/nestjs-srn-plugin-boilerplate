import { Module } from '@nestjs/common';
import { ProtoV1Controller } from './proto-v1.controller';
import { ActionsService } from 'src/actions/actions.service';
import { LocalStoreService } from 'src/localstore/localstore.service';
import { HelloService } from 'src/hello/hello.service';
import { ProtoV1Service } from './proto-v1.service';

@Module({
  controllers: [ProtoV1Controller],
  providers:[ActionsService,LocalStoreService,HelloService, ProtoV1Service],
})
export class ProtoV1Module {}
