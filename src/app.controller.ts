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
                const plugin = this.actions.passportFileRead()
                return {
                    plugin_name: plugin.name,
                    plugin_version: plugin.version,
                    soren_proto: plugin.proto,
                    schema_version: "srn-schema-v1"
                }
            } catch (e) {
                throw new HttpException("error occurred", HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
  @Get()
  Descibe():any{
    try {
      const data = fs.readFileSync('srn.passport.json', 'utf8');
      return JSON.parse(data)
    } catch (err) {
      return err
    }
  }
}
