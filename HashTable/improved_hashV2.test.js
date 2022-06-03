const hash = require('./improved_hashV2')

test('pink, 10', () => {
    expect(hash('pink', 10)).toBe(0);
});

test('cherry, 10', () => {
    expect(hash('cherry', 10)).toBe(7);
});

test('hi, 13', () => {
    expect(hash('hi', 13)).toBe(10);
});

test('goodbye, 13', () => {
    expect(hash('goodbye', 13)).toBe(9);
});