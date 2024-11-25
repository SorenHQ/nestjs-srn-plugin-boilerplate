import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService) {}

  get(key: string) {
    return this.configService.get(key, { infer: true });
  }
  set(key:string,value:any){
    this.configService.set(key,value)
  }
}
