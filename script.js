// Задание 1

let x = 5 + 10 * 2; // Операнды: 5, 10, 2; Операторы: =, +, *

let isValid = (x > 10) && (x < 30); // Операнды: x, 10, 30; Операторы: =, >, <, &&

x++; // Операнды: x; Операторы: ++

delete obj.prop; // Операнды: obj, prop; Операторы: delete

// Задание 2: Арифметические операторы

// Определяем два числа
let num1 = 10;
let num2 = 5;

// 1. Сложение двух чисел
let sum = num1 + num2;
console.log("Сложение:", sum); 

// 2. Разность двух чисел
let difference = num1 - num2;
console.log("Разность:", difference); 

// 3. Произведение двух чисел
let product = num1 * num2;
console.log("Произведение:", product); 

// 4. Деление двух чисел
let quotient = num1 / num2;
console.log("Деление:", quotient); 

// 5. Остаток от деления двух чисел
let remainder = num1 % num2;
console.log("Остаток от деления:", remainder); 

// 6. Возведение числа в степень
let exponentiation = num1 ** num2; // num1 в степени num2
console.log("Возведение в степень:", exponentiation); 

// Задание 3: Бинарные и унарные операторы

let a = 10; // Присваиваем переменной a значение 10

let b = -a; // Оператор - является унарным оператором. Он применяется к единственному операнду a и меняет его знак. В результате b будет равно -10.

// Оператор a++ является унарным оператором. Он увеличивает значение переменной a на 1 после того, как текущее значение a будет использовано в выражении. Если бы мы написали console.log(a++), то сначала вывелось бы текущее значение a, а затем a увеличилось бы на 1.
a++; // Теперь a равно 11

let c = a + b; // Операторы здесь: + (бинарный оператор сложения) и = (бинарный оператор присваивания). Оператор + принимает два операнда: a (11) и b (-10), и возвращает их сумму, которая равна 1. Затем результат присваивается переменной c.

// Задание 4: Операторы проверки отношений

let x = 15; 
let y = 20; 

// Сравнение чисел и вывод сообщений
if (x > y) {
    console.log("x больше y");
} else if (x < y) {
    console.log("x меньше y");
} else {
    console.log("x равно y");
}
// Задание 5: Проверка на равенство и неравенство

// 1. Нестрогое сравнение
let result1 = 5 == '5'; 
console.log(`5 == '5' : ${result1}`); // true
// Объяснение: Оператор == приводит строку '5' к числу 5, и сравнение становится 5 == 5, что дает true.

// 2. Строгое сравнение
let result2 = 5 === '5'; 
console.log(`5 === '5' : ${result2}`); // false
// Объяснение: Оператор === сравнивает как значение, так и тип. 5 (число) и '5' (строка) имеют разные типы, поэтому результат false.

// 3. Сравнение null и undefined (нестрогое)
let result3 = null == undefined; 
console.log(`null == undefined : ${result3}`); // true
// Объяснение: При нестрогом сравнении null и undefined считаются равными, так как оба представляют отсутствие значения.

// 4. Сравнение null и undefined (строгое)
let result4 = null === undefined; 
console.log(`null === undefined : ${result4}`); // false
// Объяснение: При строгом сравнении null и undefined имеют разные типы (null - тип object, undefined - уникальный тип), поэтому результат false.

// Задание 6: Оператор in

let user = {
    name: 'John',
    age: 30
};

console.log('name' in user); // Результат: true
//Объяснение: Оператор `in` проверяет, существует ли указанный ключ (`'name'` в данном случае) в объекте `user`. Поскольку объект `user` действительно содержит ключ `name`, оператор возвращает `true`
console.log('email' in user); // Результат: false
//Объяснение: Здесь оператор `in` проверяет наличие ключа `'email'` в объекте `user`. Поскольку в объекте `user` нет ключа `email`, оператор возвращает `false`

// Задание 7:  Оператор присваивания и комбинирование с другими операторами

let a = 10;

// Преобразование a = a + 5;
a += 5; // Теперь a равно 15

// Преобразование a = a * 2;
a *= 2; // Теперь a равно 30

// Преобразование a = a - 3;
a -= 3; // Теперь a равно 27

console.log(a); // Выводит 27

// Задание 8: Логические операторы

let isAdmin = true;
let isLoggedIn = false;

// Проверка на доступ к странице
let canViewPage = isAdmin && isLoggedIn; // Объясните результат
// Объяснение: Оператор `&&` (логическое И) возвращает `true`, только если оба операнда истинны. В данном случае, `isAdmin` равно `true`, а `isLoggedIn` равно `false`, поэтому результатом будет `false`.

// Проверка на наличие разрешения
let hasPermission = isAdmin || isLoggedIn; // Объясните результат
// Объяснение: Оператор `||` (логическое ИЛИ) возвращает `true`, если хотя бы один из операндов истинен. В данном случае, `isAdmin` равно `true`, а `isLoggedIn` равно `false`, поэтому результатом будет `true`

// Проверка, является ли пользователь гостем
let isGuest = !isLoggedIn; // Объясните результат
// Объяснение: Оператор `!` (логическое НЕ) инвертирует значение логического выражения. Поскольку `isLoggedIn` равно `false`, оператор `!` изменяет его на `true`, что означает, что пользователь является гостем.

console.log("canViewPage:", canViewPage); // Выводит false
console.log("hasPermission:", hasPermission); // Выводит true
console.log("isGuest:", isGuest); // Выводит true

// Задание 9: Тернарный оператор

let isLoggedIn = true; 

// Используем тернарный оператор
let message = isLoggedIn ? "Добро пожаловать" : "Вход запрещен";

console.log(message); // Выводит "Добро пожаловать" если true, или "Вход запрещен" если false

// Задание 10: Оператор typeof и оператор delete

// Определяем типы данных с помощью оператора typeof
console.log(typeof 123); // number
console.log(typeof 'Hello'); // string
console.log(typeof undefined); // undefined

// Создаем объект car
let car = {
    make: 'Toyota',
    model: 'Corolla'
};

// Удаляем свойство model
delete car.model; // Удаление свойства

// Проверяем объект после удаления свойства
console.log(car); // { make: 'Toyota' }

// Задание 11: Практика с несколькими операторами

let num1 = 10;
let num2 = 20;

// Выполняем арифметические операции
let sum = num1 + num2; // Сложение
let difference = num2 - num1; // Вычитание
let product = num1 * num2; // Умножение
let quotient = num2 / num1; // Деление

// Выполняем сравнение
let isNum1Greater = num1 > num2; // Сравнение
let isNum1Equal = num1 === num2; // Проверка на равенство

// Используем логические операторы
let isNum1LessAndNum2Greater = (num1 < num2) && (num2 > 15); // Логическое И
let isNum1GreaterOrNum2Greater = (num1 > num2) || (num2 > 15); // Логическое ИЛИ

// Используем тернарный оператор для вывода результата
let comparisonResult = isNum1Greater ? "num1 больше num2" : "num1 не больше num2";
let sumResult = (sum > 30) ? "Сумма больше 30" : "Сумма 30 или меньше";

// Выводим результаты
console.log("Сумма:", sum);
console.log("Разность:", difference);
console.log("Произведение:", product);
console.log("Частное:", quotient);
console.log("num1 больше num2:", isNum1Greater);
console.log("num1 равно num2:", isNum1Equal);
console.log("num1 меньше и num2 больше 15:", isNum1LessAndNum2Greater);
console.log("num1 больше num2 или num2 больше 15:", isNum1GreaterOrNum2Greater);
console.log(comparisonResult);
console.log(sumResult);
