export const spec = (predicate) => {
    const sp = (p) => predicate(p);
    sp.not = () => spec(i => !sp(i));
    sp.and = (other) => spec(i => sp(i) && other(i));
    sp.or = (other) => spec(i => sp(i) || other(i));
    return sp;
};
//# sourceMappingURL=spec.js.map