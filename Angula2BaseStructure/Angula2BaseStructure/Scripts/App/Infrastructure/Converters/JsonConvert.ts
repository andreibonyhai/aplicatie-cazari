export class JsonConvert {
    static serializeObject(object: Object): string {
        return JSON.stringify(object);
    }

    static deserializeObject<T>(json: string): T {
        throw "Not implemented exception";
    }
}