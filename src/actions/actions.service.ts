import { Injectable, Logger } from '@nestjs/common';
import { GithubService } from 'src/github/github.service';
import { LocalStoreService } from 'src/localstore/localstore.service';
import { getApiByAction } from 'src/github/github.api';

@Injectable()
export class ActionsService {
    private readonly logger = new Logger(ActionsService.name);

    constructor(
        private readonly persist: LocalStoreService,
        private readonly github: GithubService

    ) { }
    actionsList(): any {
        return this.github.gitApis().map(elem=>{
            return {
                "action":elem.action,
                "description":elem.description,
                "title":elem.title,
            }
        })
    }



    viewAction(action){
        return getApiByAction(action)?.meta.dialog

    }

    async runAction(action,body) {
        if (getApiByAction(action)?.meta?.persist){
            return this.persist.add(action,body)

        }
         return (await this.github.gitCallApi(action,body)).data
    }

 
}
