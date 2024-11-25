import { Module } from '@nestjs/common';
import { ProtoV1Controller } from './proto-v1.controller';
import { ActionsService } from 'src/actions/actions.service';

@Module({
  controllers: [ProtoV1Controller],
  providers:[ActionsService]
})
export class ProtoV1Module {}
