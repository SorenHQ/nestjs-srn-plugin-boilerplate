import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { GithubService } from 'src/github/github.service';
import { LocalStoreService } from 'src/localstore/localstore.service';

@Module({
  controllers: [ActionsController],
  providers: [ActionsService,LocalStoreService,GithubService],

})
export class ActionsModule {}
