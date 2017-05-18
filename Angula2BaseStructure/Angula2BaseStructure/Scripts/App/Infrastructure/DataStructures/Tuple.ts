export class Tuple<T, TU> {
    constructor(private _item1: T, private _item2: TU) {

    }

    get item1(): T { return this._item1; }
    get item2(): TU { return this._item2; }
}