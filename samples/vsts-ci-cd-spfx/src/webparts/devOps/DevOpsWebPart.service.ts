export class DevOpsWebPartService {
    public add(a: number, b: number): number {
        if (a < 0) {
            throw new RangeError("a is out of range");
        } else if (b < 0) {
            throw new RangeError("b is out of range");
        } else {
            return a + b;
        }
    }
    public addAsync(a: number, b: number): Promise<number> {
        return Promise.resolve(this.add(a, b));
    }
    public divide(a: number, b: number): number {
        return a / b;
    }
}