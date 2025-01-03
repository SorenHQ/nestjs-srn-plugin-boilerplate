import { Injectable, Logger } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';
import { LocalStoreService } from 'src/localstore/localstore.service';
import { getActionByMethodName } from 'src/hello/hello.methods';
import { getActionByAttrName } from 'src/hello/hello.settings';
import { ProtoV1Service } from 'src/proto-v1/proto-v1.service';

@Injectable()
export class ActionsService {
    private readonly logger = new Logger(ActionsService.name);

    constructor(
        private readonly persist: LocalStoreService,
        private readonly Hello: HelloService,
        private readonly protoCall: ProtoV1Service

    ) { }
    methodList(): any {
        return this.Hello.methodDictionary().map(elem => {
            return {
                "method": elem.method,
                "description": elem.description,
                "title": elem.title,
                "icon": ""
            }
        })
    }

    attributeList(): any {
        return this.Hello.attributesDictionary().map(elem => {
            return {
                "method": elem.method,
                "description": elem.description,
                "title": elem.title,
                "icon": ""
            }
        })
    }

    viewMethod(action) {
        return getActionByMethodName(action)?.meta.dialog

    }
    viewAttribute(action) {
        return getActionByAttrName(action)?.meta.dialog

    }
    async runMethod(action, body) {
        this.protoCall.sendEvent({"event":action,withBody:body})
        return { data: await this.Hello.run(action, body), error: null }
    }

    async setSettings(action, body) {
        if (getActionByAttrName(action)?.meta?.persist) {
            this.persist.add(action, body)

        }
        return { data: await this.Hello.run(action, body), error: null }

    }


}
