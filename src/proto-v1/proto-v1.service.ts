import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProtoV1Service {

    async sendEvent(message: any) {
        try {
            return axios.post(this.findEventUrl(), message, { headers: this.makeHeader() })
        } catch (e) { }
    }
    async getEntry() {
        try {
            return axios.get(this.findRequestEntry(), { headers: this.makeHeader() })
        } catch (e) { }
    }
    private makeHeader(): any {
        return { Authorization: process.env.SOREN_AUTH_KEY }
    }

    private findEventUrl(): string {
        if (process.env.SOREN_EVENT_CHANNEL)
        return process.env.SOREN_EVENT_CHANNEL
    else if (process.env.AgentUrl){
        return `${process.env.AgentUrl}/event/${process.env.PluginId}`
    }
    }
    private findRequestEntry(): string {
      if (process.env.SOREN_STORE)
        return process.env.SOREN_STORE
    else if (process.env.AgentUrl){
        return `${process.env.AgentUrl}/store/${process.env.PluginId}`
    }
    }
}
