const add = (a, b) => a + b;
const greeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(4, 3);
    expect(result).toBe(7);
});

test('Should greet a person', () => {
    const result = greeting('Mike');
    expect(result).toBe('Hello Mike!')
});

test('Should greet an anonymous person', () => {
    const result = greeting();
    expect(result).toBe('Hello Anonymous!')
});