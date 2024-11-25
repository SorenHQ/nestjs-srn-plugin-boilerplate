import { Injectable, Logger } from '@nestjs/common';
import { PluginDefinition, SorenActionModel } from 'src/proto-v1/proto-v1.models';
const fs = require('node:fs');

@Injectable()
export class ActionsService {
    private readonly logger = new Logger(ActionsService.name);


    actionsList(): any {
        return [
            "oranization_config"

        ]
    }

    passportFileRead(): PluginDefinition {
        const data = fs.readFileSync('srn.passport.json', 'utf8');
        return JSON.parse(data)
    }

    getOrganizationDialog(): SorenActionModel {
        return {
            name: "OrganizationId",
            "description": "Set OrganizationId or Name",
            title: "Organization Info",
            params: [{
                attr: { multi: true, ref: "account_orgs" },
                key: "org",
                value: [],
                title: "Select Organization Id's",
                type: "string"

            }]
        } as SorenActionModel
    }
}
