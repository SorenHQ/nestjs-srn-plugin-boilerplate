import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Post } from '@nestjs/common';
import { ActionsService } from 'src/actions/actions.service';
import { setTargetModel, SorenActionModel } from './proto-v1.models';
import { EnvService } from 'src/env/env.service';

@Controller('api')
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
    @Get("methods")
    implActionsList() {
        try {
            return this.actions.methodList()

        } catch (e) {
            throw new HttpException("error occurred", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get("attributes")
    implAttributesList() {
        try {
            return this.actions.attributeList()

        } catch (e) {
            throw new HttpException("error occurred", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    /*
        `method`as Param , Based On Soren v1 Protocol
        The required configuration or values for the action are provided using this method. 
        
    */
    @Get("/method/:method")
    getMethod(@Param("method") action: string) {
        try {

            return this.actions.viewMethod(action)
        } catch (e) {
            throw new HttpException("not implemented", HttpStatus.NOT_IMPLEMENTED)
        }
    }

        /*
        `method`as Param , Based On Soren v1 Protocol
        The required configuration or values for the action are provided using this method. 
        
    */
        @Get("/attribute/:attr")
        getAttr(@Param("attr") action: string) {
            try {
    
                return this.actions.viewAttribute(action)
            } catch (e) {
                throw new HttpException("not implemented", HttpStatus.NOT_IMPLEMENTED)
            }
        }

    /*
     `action` as Param , Based On Soren v1 Protocol
    The required configuration or values are applied using this method
    */
    @Post("/method/:method")
    runAction(@Body() body: SorenActionModel, @Param("method") action: string) {
        try {
            return this.actions.runMethod(action,body)
        } catch (e) {
            throw new HttpException("not implemented", HttpStatus.BAD_REQUEST)
        }
    }


    @Post("/attribute/:attr")
    setAttr(@Body() body: SorenActionModel, @Param("attr") action: string) {
        try {
            return this.actions.setSettings(action,body)
        } catch (e) {
            throw new HttpException("not implemented", HttpStatus.BAD_REQUEST)
        }
    }


}
