import { Module } from '@nestjs/common';
import { LocalStoreService } from './localstore.service';

@Module({
  providers: [LocalStoreService]
})
export class LocalstoreModule {}
