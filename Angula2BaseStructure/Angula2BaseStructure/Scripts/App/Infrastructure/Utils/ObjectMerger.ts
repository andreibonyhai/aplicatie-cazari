export class ObjectMerger {
    static merge(source1: Object, source2: Object): Object {
        const result = new Object();
        for (let prop in source1) {
            if (source1.hasOwnProperty(prop))
                result[prop] = source1[prop];
        }
        for (let prop in source2) {
            if (source2.hasOwnProperty(prop))
                result[prop] = source2[prop];
        }
        return result;
    }
}