import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service.js';
import { LocalStoreService } from 'src/localstore/localstore.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService,LocalStoreService],

})
export class HelloModule {}
