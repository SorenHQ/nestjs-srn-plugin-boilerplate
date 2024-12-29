import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { HelloService } from 'src/hello/hello.service';
import { LocalStoreService } from 'src/localstore/localstore.service';

@Module({
  controllers: [ActionsController],
  providers: [ActionsService,LocalStoreService,HelloService],

})
export class ActionsModule {}
