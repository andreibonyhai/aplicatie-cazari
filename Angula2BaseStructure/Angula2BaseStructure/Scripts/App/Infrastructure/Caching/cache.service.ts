import {Injectable} from "@angular/core";
import {Response} from "@angular/http";

export class ResourceIdentifier {
    constructor(private _resource: string, private _data: any) { }

    get resource(): string { return this._resource; }
    get data(): any { return this._data }

    equals(other: ResourceIdentifier): boolean {
        return this.resource === other.resource
            && JSON.stringify(this.data) === JSON.stringify(other.data);
    }
}

@Injectable()
export class CacheService {
    private cacheObject = new Array<{resourceId: ResourceIdentifier, data: Response}>();

    private find(resourceId: ResourceIdentifier): number {
        for (let element of this.cacheObject) {
            if (element.resourceId.equals(resourceId))
                return this.cacheObject.indexOf(element);
        }
        return -1;
    }

    isCached(resourceId: ResourceIdentifier): boolean {
        return this.find(resourceId) !== -1;
    }

    cache(resourceId: ResourceIdentifier, data: Response): void {
        const idx = this.find(resourceId);
        if (idx === -1)
            this.cacheObject.push({ resourceId, data });
        else
            this.cacheObject[idx].data = data;
    }

    get(resourceId: ResourceIdentifier): Response {
        return this.cacheObject[this.find(resourceId)].data;
    }
}