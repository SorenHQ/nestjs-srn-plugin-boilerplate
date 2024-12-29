import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ActionsService } from './actions/actions.service';
const fs = require('node:fs');

@Controller()
export class AppController {
  constructor(
    private readonly actions: ActionsService,

  ) {}

  @Get("ping")
  ping(): string {
    return "pong";
  }
    /*
        `vesion` , Based On Soren v1 Protocol
    */
        @Get("version")
        implVersion() {
            try {
              const passport = fs.readFileSync('srn.passport.json', 'utf8');
              const plugin = JSON.parse(passport)
                    return plugin
            } catch (e) {
                throw new HttpException("error occurred", HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }

}


