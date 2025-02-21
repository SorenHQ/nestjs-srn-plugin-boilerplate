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
        if (action="plus"){
            let kv = this.extractParams(body)
            let result = Number(kv["digit1"][0]) + Number(kv["digit2"][0])
            return {action,result}
        }else if (action=="mirror"){
            let kv = this.extractParams(body)
            let result = {p1:kv["p2"],p2:kv["p1"]}
            return {action,result}
        }
        return {action,result:"not found"}

    }

    extractParams(body){
        let fields={}
        body.params.map(el=>{

            fields[el.key]=el.value.length>0? el.value:[0]
        })
        return fields
    }
}

