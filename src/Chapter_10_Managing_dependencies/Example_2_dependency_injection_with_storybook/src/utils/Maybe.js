const Maybe = (value) => {
    const Nothing = {
        map: () => this,
        isNothing: () => true,
        val: () => null
    };
    const Something = val => ({
        map: fn => Maybe(fn.call(this, val)),
        isNothing: () => false,
        val: () => val
    });

    return (typeof value === 'undefined' || value === null)
        ? Nothing
        : Something(value);
};

export default Maybe;
