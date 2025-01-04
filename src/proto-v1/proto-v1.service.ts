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
        return process.env.SOREN_EVENT_CHANNEL
    }
    private findRequestEntry(): string {
        return process.env.SOREN_STORE
    }
}
