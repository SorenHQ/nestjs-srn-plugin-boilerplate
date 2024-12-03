import { Module } from '@nestjs/common';
import { ProtoV1Controller } from './proto-v1.controller';
import { ActionsService } from 'src/actions/actions.service';
import { LocalStoreService } from 'src/localstore/localstore.service';
import { ActionsModule } from 'src/actions/actions.module';
import { GithubService } from 'src/github/github.service';

@Module({
  controllers: [ProtoV1Controller],
  providers:[ActionsService,LocalStoreService,GithubService],
})
export class ProtoV1Module {}
