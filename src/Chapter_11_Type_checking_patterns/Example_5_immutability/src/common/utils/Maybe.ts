export type Nothing = {
    map: (args: any) => Nothing,
    isNothing: () => true,
    val: () => null
}

export type Something<T> = {
    map: <Z>(fn: ((a:T) => Z)) => MaybeType<Z>,
    isNothing: () => false,
    val: () => T
}

export type MaybeType<T> = {
    map: <Z>(fn: ((a:T) => Z)) => (MaybeType<Z> | Nothing),
    isNothing: () => boolean,
    val: () => (T | null)
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
