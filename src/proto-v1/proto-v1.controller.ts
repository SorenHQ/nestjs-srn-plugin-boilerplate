import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Post } from '@nestjs/common';
import { ActionsService } from 'src/actions/actions.service';
import { setTargetModel, SorenActionModel } from './proto-v1.models';
import { EnvService } from 'src/env/env.service';

@Controller('v1')
export class ProtoV1Controller {
    private readonly logger = new Logger(ProtoV1Controller.name);
    constructor(
        private readonly actions: ActionsService,
        private envService: EnvService
    ) { }


    /*
        `action` , Based On Soren v1 Protocol
        returned action lists
        in Actions Definitions You are at liberty to decide
        Actions are the same function, each of which has arguments provided via the GET method, 
        set by the consumer, 
        and submitted via the POST method.
    */
    @Get("actions")
    implActionsList() {
        try {
            return this.actions.actionsList()

        } catch (e) {
            throw new HttpException("error occurred", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    /*
        `action`as Param , Based On Soren v1 Protocol
        The required configuration or values for the action are provided using this method. 
        
    */
    @Get("/action/:action")
    getAction(@Param("action") action: string) {
        try {

            return this.actions.viewAction(action)
        } catch (e) {
            throw new HttpException("not implemented", HttpStatus.NOT_IMPLEMENTED)
        }
    }

    /*
     `action` as Param , Based On Soren v1 Protocol
    The required configuration or values are applied using this method
    */
    @Post("/action/:action")
    setAction(@Body() body: SorenActionModel, @Param("action") action: string) {
        try {
            return this.actions.runAction(action,body)
        } catch (e) {
            throw new HttpException("not implemented", HttpStatus.BAD_REQUEST)
        }
    }

    /*
     Set Entry Gateway , Based On Soren v1 Protocol
     Plugin must be know target Url for Pushing data to That.  
     for example , All Collected Data Send to Given Url that set by This Action.
     after target is set , Keep target Url and send records to that .
    */
    @Post("target")
    setTarget(@Body() body: setTargetModel) {
        try {
            this.envService.set("target", body)
            return this.envService.get("target")
        } catch (e) {
            throw new HttpException("bad request", HttpStatus.BAD_REQUEST)
        }
    }
}
