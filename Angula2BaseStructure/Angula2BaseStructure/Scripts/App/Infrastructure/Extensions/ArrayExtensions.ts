export class ArrayExtensions {
    static toList<T>(list:Array<T>): Array<T> {
        const result = new Array<T>();
        for(let element of list) {
            result.push(element);
        }
        return result;
    }
}