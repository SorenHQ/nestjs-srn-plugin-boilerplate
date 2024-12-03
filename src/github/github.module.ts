import { Module } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.service.js';
import { LocalStoreService } from 'src/localstore/localstore.service';

@Module({
  controllers: [GithubController],
  providers: [GithubService,LocalStoreService],

})
export class GithubModule {}
