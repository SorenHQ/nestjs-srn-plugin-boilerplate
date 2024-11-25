import { Controller, Get } from '@nestjs/common';
const fs = require('node:fs');

@Controller()
export class AppController {
  constructor() {}

  @Get("ping")
  ping(): string {
    return "pong";
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
