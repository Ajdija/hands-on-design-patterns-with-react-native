export type Nothing = {
    readonly map: (args: any) => Nothing,
    readonly isNothing: () => true,
    readonly val: () => null
}

export type Something<T> = {
    readonly map: <Z>(fn: ((a:T) => Z)) => MaybeType<Z>,
    readonly isNothing: () => false,
    readonly val: () => T
}

export type MaybeType<T> = {
    readonly map: <Z>(fn: ((a:T) => Z)) => (MaybeType<Z> | Nothing),
    readonly isNothing: () => boolean,
    readonly val: () => (T | null)
}

const Maybe = <T>(value: T):MaybeType<T> => {
    const Nothing: Nothing = {
        map: () => Nothing,
        isNothing: () => true,
        val: () => null
    };
    const Something = <T>(val: T):Something<T> => ({
        map: <Z>(fn: ((a:T) => Z)) => Maybe(fn(val)),
        isNothing: () => false,
        val: () => val
    });

    return (typeof value === 'undefined' || value === null)
        ? Nothing
        : Something<T>(value);
};

export default Maybe;
