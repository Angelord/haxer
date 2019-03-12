
class Random {
    /** returns a number between min[inclusive] and max[inclusive]. */
    public static range(min: number, max: number): number {

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static element<T>(arr: T[]) : T {

        return arr[Random.range(0, arr.length - 1)];
    }
}

export { Random }