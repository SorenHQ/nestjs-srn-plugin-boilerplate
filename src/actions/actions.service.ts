import { Injectable, Logger } from '@nestjs/common';
import { PluginDefinition } from 'src/proto-v1/proto-v1.models';
const fs = require('node:fs');

@Injectable()
export class ActionsService {
    private readonly logger = new Logger(ActionsService.name);


    actionsList():any{
        return [
   

        ]
    }

   passportFileRead():PluginDefinition{
        const data = fs.readFileSync('srn.passport.json', 'utf8');
        return JSON.parse(data)
    }
}
