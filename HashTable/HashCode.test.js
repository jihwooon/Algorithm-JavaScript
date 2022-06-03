const hash = require('./HashCode');

test('pink, 10', () => {
    expect(hash('pink', 10)).toBe(0);
});

test('orangered, 10', () => {
    expect(hash('orangered', 10)).toBe(7);
});

test('cyan, 10', () => {
    expect(hash('cyan', 10)).toBe(3);
});