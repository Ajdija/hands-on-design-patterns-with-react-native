export interface Nothing {
    map: (args: any) => Nothing,
    isNothing: () => true,
    val: () => null
}

export interface Something<T> {
    map: (
        fn: ((a:T) => T)
    ) => Something<T> | Nothing,
    isNothing: () => false,
    val: () => T
}

const Maybe = <T>(value: T): (Something<T> | Nothing) => {
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
