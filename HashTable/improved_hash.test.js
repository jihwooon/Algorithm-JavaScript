const hash = require('./improved_hash')

test('pink, 10', () => {
    expect(hash('pink', 10)).toBe(0);
});

test('cherry, 10', () => {
    expect(hash('cherry', 10)).toBe(7);
});