import { Injectable, Logger } from "@nestjs/common";
const fs = require('node:fs');


@Injectable()
export class LocalStoreService {
    private readonly logger = new Logger(LocalStoreService.name);
    private memory: any = null
    constructor() {
        if (!fs.existsSync('vars.json')) this.save({})
    }
    save(jsonVariable: any) {
        fs.writeFileSync('vars.json', JSON.stringify(jsonVariable));
    }

    load(): any {
        const vars = fs.readFileSync('vars.json', 'utf-8');
        this.memory = JSON.parse(vars)
        return this.memory
    }

    add(key: string, value: any) {
        let vars = this.load()
        vars[key] = value
        this.save(vars)
        return vars
    }
    get(key: string) {
        if (this.memory)
            return this.memory[key]
        let vars = this.load()
        return vars[key]
    }
    getOn(root :string,key: string) {
        if (this.memory)
            return this.memory[root][key]
        let vars = this.load()
        return vars[root][key]
    }
    getAccessToken(): string {
        try {
            return this.get("access_token").params.find(el => el.key === 'git_token').value
        } catch (e) { return null }
    }
}