import { Injectable, Logger } from '@nestjs/common';
import { LocalStoreService } from 'src/localstore/localstore.service';
import {Octokit} from '@octokit/core'
import { HelloMethods } from './hello.methods';
import { HelloAttributes } from './hello.settings';


@Injectable()
export class HelloService {
    private readonly logger = new Logger(HelloService.name);
    constructor(
        private persis: LocalStoreService
    ) {  

    }
    methodDictionary(){
        return HelloMethods
    }
    attributesDictionary(){
        return HelloAttributes

    }
        
   async run(action:string,body={}){

        return {action,result:"run it"}

    }

    extractParams(body){
        let fields={}
        body.params.map(el=>{

            fields[el.key]=el.value[0]
        })
        return fields
    }
}

