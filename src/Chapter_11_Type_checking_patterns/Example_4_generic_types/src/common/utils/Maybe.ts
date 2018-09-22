export type Nothing = {
    map: (args: any) => Nothing,
    isNothing: () => true,
    val: () => null
}

export type Something<T> = {
    map: (fn: (a:T) => T) => MaybeType<T>,
    isNothing: () => false,
    val: () => T
}

export type MaybeType<T> = Something<T> | Nothing;

const Maybe = <T>(value: T):MaybeType<T> => {
    const Nothing: Nothing = {
        map: () => Nothing,
        isNothing: () => true,
        val: () => null
    };
    const Something = <T>(val: T):Something<T> => ({
        map: (fn: (a:T) => T) => Maybe(fn(val)),
        isNothing: () => false,
        val: () => val
    });

    return (typeof value === 'undefined' || value === null)
        ? Nothing
        : Something<T>(value);
};

export default Maybe;
