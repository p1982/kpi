function checkBrackets(str) {
    const stack = []; // Стек для відстеження відкриваючих дужок

    // Обхід рядка
    for (let char of str) {
        // Якщо поточний символ - відкриваюча дужка, додаємо її до стеку
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // Якщо поточний символ - закриваюча дужка, перевіряємо відповідність
        else if (char === ')' || char === '}' || char === ']') {
            // Перевіряємо, чи є відкриваюча дужка у стеку
            const lastOpeningBracket = stack.pop();
            if (
                (char === ')' && lastOpeningBracket !== '(') ||
                (char === '}' && lastOpeningBracket !== '{') ||
                (char === ']' && lastOpeningBracket !== '[')
            ) {
                // Якщо закриваюча дужка не відповідає відкриваючій, повертаємо false
                return false;
            }
        }
    }

    // Після обходу рядка перевіряємо, чи всі відкриваючі дужки були закриті
    return stack.length === 0;
}

// Приклад використання:
const code1 = "function someFn() { if (true) { return 'hello'; } }";
console.log(checkBrackets(code1)); // Повинно повернути true

const code2 = "function someFn() { if (true) { return 'hello'; } ";
console.log(checkBrackets(code2)); // Повинно повернути false, брак закриваючої фігурної дужки