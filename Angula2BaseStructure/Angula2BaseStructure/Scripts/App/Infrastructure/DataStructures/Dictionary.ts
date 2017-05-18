export class KeyValuePair<T, TU> {
    constructor(public key: T, public value: TU) {
    }
}

export class Dictionary<T, TU> {
    constructor(private dict?: Array<KeyValuePair<T, TU>>) {
        if (dict == null)
            this.dict = new Array<KeyValuePair<T, TU>>();
    }

    add(key: T, data: TU): void {
        if (!this.hasKey(key))
            this.dict.push(new KeyValuePair(key, data));
    }

    hasKey(key: T): boolean {
        return this.dict.some(e => e.key === key);
    }

    get(key: T): TU {
        for (let e of this.dict) {
            if (e.key === key)
                return e.value;
        }
        return null;
    }

    remove(key: T): void {
        let index = -1;
        for (let i = 0; i < this.dict.length; i++) {
            if (this.dict[i].key === key) {
                index = i;
                break;
            }
        }
        this.dict.splice(index, 1);
    }

    toList(): KeyValuePair<T, TU>[] {
        return this.dict;
    }
}

export class SimpleDictionary<TU> {
    constructor(elements?: Array<Object>) {
        if (elements != null && elements.length > 0) {
            this.initDictionary(elements);
        }
    }

    private initDictionary(elements: Array<Object>): void {
        for (let element of elements) {
            for (let prop in element) {
                if (element.hasOwnProperty(prop)) {
                    if (this.hasKey(prop))
                        throw "Invalid initialization data. The elements must have unique keys";
                    this.add(prop, element[prop]);
                }
            }
        }
    }

    add(key: string, data: TU): void {
        this[key] = data;
    }

    hasKey(key: string): boolean {
        return this.hasOwnProperty(key);
    }

    get(key: string): TU {
        return this[key];
    }

    toString() {
        return JSON.stringify(this);
    }

    toList() {
        const result = new Array<Object>();
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                const obj = {};
                obj[prop] = this[prop];
                result.push(obj);
            }
        }
        return result;
    }
}