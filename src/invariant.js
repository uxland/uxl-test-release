export const invariant = (condition, message) => {
    condition = typeof condition === 'function' ? condition() : condition;
    if (!condition)
        throw new Error(message);
};
//# sourceMappingURL=invariant.js.map