import { Injectable, Logger } from '@nestjs/common';
import { LocalStoreService } from 'src/localstore/localstore.service';
import {Octokit} from '@octokit/core'
import { getApiByAction,githubApi } from './github.api';


@Injectable()
export class GithubService {
    private readonly logger = new Logger(GithubService.name);
    constructor(
        private persis: LocalStoreService
    ) { 

    }
    gitApis(){
        return githubApi
    }
    
   async gitCallApi(action:string,body={}){

        const accessToken = this.persis.getAccessToken()
        // let Octokit =  await import('@octokit/core');
        const oc = new Octokit({
            auth: accessToken[0],
          });
          let req = {headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          },}
          req = {...req,...this.extractParams(body)}
          this.logger.log(req,accessToken)
          return await oc.request(getApiByAction(action)?.meta?.path,req);

    }

    extractParams(body){
        let fields={}
        body.params.map(el=>{

            fields[el.key]=el.value[0]
        })
        return fields
    }
}

