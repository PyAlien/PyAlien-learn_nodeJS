// // My tasks
// console.log(`1. Задания по теме: "Циклы"`);
// // 1. Зачем используется цикл while?
//
// /* Зачем используется цикл while?
//  - Лучше использовать while:
//       > Условие выхода из цикла зависит от динамических факторов.
//       > Количество итераций заранее неизвестно.
//       > Нужен контроль над процессом и состоянием.
//  */
//
// // Примеры
//
// // 1. Работа с динамическими данными
// // Обработка заявок на просмотр недвижимости
// type ViewingRequest = {
//   id: number;
//   clientName: string;
//   propertyId: number;
//   scheduledDate: string;
// };
// // Очередь заявок
// // Создаем массив из объектов - заявок на просмотр недвижимости
//
// const viewingRequests: ViewingRequest[] = [
//   { id: 1, clientName: 'Иван Иванов', propertyId: 1, scheduledDate: '2024-12-01' },
//   { id: 2, clientName: 'Пётр Петров', propertyId: 2, scheduledDate: '2024-12-10' },
//   { id: 3, clientName: 'Андрей Андреев', propertyId: 3, scheduledDate: '2024-12-15' },
// ];
// // Обработка заявок пока очередь не будет пуста
// while (viewingRequests.length > 0) {
//   const requestForClient = viewingRequests.shift();
//
//   if (requestForClient) {
//     console.log(`Обрабатывается заявка № ${requestForClient.id}`);
//     console.log(`Клиент: ${requestForClient.clientName}`);
//     console.log(`Объект недвижимости № ${requestForClient.propertyId}`);
//     console.log(`Дата просмотра: ${requestForClient.scheduledDate}`);
//     console.log('-----------------------------------------------------------------');
//   }
// }
// console.log(`Все заявки обработаны.
// ------------------------------------`);
//
// // 2. Поиск или проверка до выполнения условия
// // Поиск недвижимости с ценой ниже заданной
//
// type Property = {
//   id: number;
//   name: string;
//   price: number;
//   location: string;
// };
//
// const properties: Property[] = [
//   { id: 1, name: 'Апартаменты A', price: 1500000, location: 'Центр' },
//   { id: 2, name: 'Апартаменты B', price: 1200000, location: 'Окраина' },
//   { id: 3, name: 'Дом', price: 3000000, location: 'Область' },
//   { id: 4, name: 'Студия', price: 900000, location: 'Спальный район' },
// ];
//
// const budget = 1000000; // Заданная сумма
// let i = 0;
// let affordableProperty: Property | null = null;
// while (i < properties.length && !affordableProperty) {
//   if (properties[i].price < budget) {
//     affordableProperty = properties[i];
//   }
//   i++;
// }
//
// if (affordableProperty) {
//   console.log(`Найдена недвижимость: ${affordableProperty.name}, цена ${affordableProperty.price}`);
// } else {
//   console.log('Нет доступной недвижимости в заданном бюджете.');
// }
//
// // Продолжение изучения условий следует...
// console.log(`-------------------------------------------------
// 2. Задание на тему "Дебаг"`);
// /*
// Продебажьте программу и объясните, почему первый if сработал, а второй нет.
// Исправьте логическую ошибку в программе, чтобы второй if тоже срабатывал.
//
// Текущий вывод программы:
// Пользователь: { age: 33, nickname: 'Short name' }
// It is a very very very long nickname совершеннолетний!
// Конец работы для пользователя { age: 33, nickname: 'It is a very very very long nickname' }
//
// Ожидаемый вывод программы:
// Пользователь: { age: 33, nickname: 'Short name' }
// It is a very very very long nickname совершеннолетний!
// У [It is a very very very long nickname] имя длиннее 10 символов
// Конец работы для пользователя { age: 33, nickname: 'It is a very very very long nickname' }
//  */
// const age = 33;
// const nickname = 'Short name'; // 10 length
//
// const adultThreshold = 18;
// const longNameThreshold = 10;
//
// const user = { age, nickname };
//
// console.log('Пользователь:', user);
//
// user.nickname = 'It is a very very very long nickname'; // 36 Length
//
// if (user.age >= adultThreshold) {
//   console.log(`${user.nickname} совершеннолетний!`);
// }
// if (nickname.length >= longNameThreshold) {
//   console.log(`У [${user.nickname}] имя длиннее 10 символов`);
// }
//
// console.log('Конец работы для пользователя', user);
//
// // Оператор сравнения во втором условии необходимо было заменить на ">="
//
// console.log(`3. Задание на тему "Типов TS"`);
//
// type A = {
//   age?: number | string;
//   nick: string;
//   info: {} | (number | string)[];
//   photo?: string | null;
// };
//
// // type A = {}; Так ТОЖЕ РАБОТАЕТ!
//
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };
// console.log(`Тип указан верно!`);
//
// // Литеральные типы
// console.log(`4. Задание на тему "Литеральные типы"`);
// // Строковый литерал
// type WeatherCondition = 'Sunny' | 'Rainy' | 'Cloudy' | 'Snowy' | 'Windy' | 'Sultry';
//
// // const tomorrowWeather: WeatherCondition = 'Stormy'; // Ошибка
// const todayWeather: WeatherCondition = 'Sunny';
//
// // Числовой литерал
// type ShootDice = 1 | 2 | 3 | 4 | 5 | 6;
//
// const shootDice: ShootDice = 3;
// // const invalidShootDice: ShootDice = 7; // Ошибка
//
// // Объект
//
// // Новый тип с двумя полями
// type GameEvent = {
//   weather: WeatherCondition;
//   diceResult: ShootDice;
//   createdAt: Date;
//   createdAtISO: string;
// };
//
// // Создание объекта такого типа
// const eventInGame: GameEvent = {
//   weather: 'Sunny',
//   diceResult: 4,
//   createdAt: new Date(),
//   createdAtISO: new Date().toISOString(),
// };
//
// // Вывод объекта в консоль
// console.log(eventInGame);
//
// /*
// 1 2024-08-23T03:30:00-11:00 — это время в UTC: 2024-08-23T14:30:00Z
// 2 2024-08-23T15:30:00+03:00 — это время в UTC: 2024-08-23T12:30:00Z
// 3 2024-08-23T14:30:00Z — это уже время в UTC: 2024-08-23T14:30:00Z
// 4 2024-08-23T15:30:00Z — это уже время в UTC: 2024-08-23T15:30:00Z
// 5 2024-08-24T01:30:00+13:00 — это время в UTC: 2024-08-23T12:30:00Z
// 6 2024-08-23T17:30:00+02:00 — это время в UTC: 2024-08-23T15:30:00Z
// 7 2024-08-23T10:30:00-04:00 — это время в UTC: 2024-08-23T14:30:00Z
// 8 2024-08-23T03:30:00-12:00 — это время в UTC: 2024-08-23T15:30:00Z
// 9 2024-08-23T09:30:00-03:00 — это время в UTC: 2024-08-23T12:30:00Z
// 10 2024-08-23T14:30:00-01:00 — это время в UTC: 2024-08-23T15:30:00Z
// 11 2024-08-24T02:30:00+12:00 — это время в UTC: 2024-08-23T14:30:00Z
// 12 2024-08-23T12:30:00Z — это уже время в UTC: 2024-08-23T12:30:00Z
//
// 2024-08-23T14:30:00Z (4 строки):
//
//     1: 2024-08-23T03:30:00-11:00
//     3: 2024-08-23T14:30:00Z
//     7: 2024-08-23T10:30:00-04:00
//     11: 2024-08-24T02:30:00+12:00
//
//
//
// 2024-08-23T12:30:00Z (4 строки):
//
//     2: 2024-08-23T15:30:00+03:00
//     5: 2024-08-24T01:30:00+13:00
//     9: 2024-08-23T09:30:00-03:00
//     12: 2024-08-23T12:30:00Z
//
// 2024-08-23T15:30:00Z (4 строки):
//
//     4: 2024-08-23T15:30:00Z
//     6: 2024-08-23T17:30:00+02:00
//     8: 2024-08-23T03:30:00-12:00
//     10: 2024-08-23T14:30:00-01:00
//  */
//
// // Багфикс
//
// const words: string[] = ['Солнце', 'Луна', 'Земля', 'Вода', 'Жизнь'];
//
// type DefaultSettings = {
//   lineNumber: number;
//   maxWordsPerLine: number;
// };
//
// const defaultSettings = {
//   lineNumber: 0,
//   maxWordsPerLine: 2,
// };
//
// function deepClone(obj: any): any {
//   if (obj === null || typeof obj !== 'object') return obj;
//
//   // Обработка специфичных типов
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//   if (obj instanceof Map) return new Map([...obj]);
//   if (obj instanceof Set) return new Set([...obj]);
//
//   const clone: { [key: string]: any } = Array.isArray(obj) ? [] : {};
//
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }
//
//   return clone;
// }
//
// for (let i = 1; i < 3; i++) {
//   console.log(`Запуск номер ${i}`);
//   // С помощью рекурсии создаем глубокую копию объекта
//   const settings: DefaultSettings = deepClone(defaultSettings);
//   // ПОВЕРХНОСТНЫЕ КОПИИ. Изменение вложенного объекта в копии затронет оригинал.
//   // метод копирует свойства из одного или нескольких источников в целевой объект
//   // const settings: DefaultSettings = Object.assign({}, defaultSettings);
//   // оператор распространения (...) копирует свойства из объекта defaultSettings в новый объект.
//   // const settings: DefaultSettings = { ...defaultSettings };
//
//   // Math.ceil - округление до ближайшего целого в большую сторону.
//   const linesCount: number = Math.ceil(words.length / settings.maxWordsPerLine);
//
//   console.log(`Будет выведено ${linesCount} строк(и)`);
//   for (settings.lineNumber; settings.lineNumber < linesCount; settings.lineNumber++) {
//     const start: number = settings.lineNumber * settings.maxWordsPerLine;
//     const end: number = start + settings.maxWordsPerLine;
//
//     const elements: string[] = words.slice(start, end);
//     console.log(`Строка ${settings.lineNumber + 1}:`, elements);
//   }
//
//   console.log();
// }
//
// // Сравнение объектов
// function areObjectsEqual(obj1: any, obj2: any): boolean {
//   // Если объекты одинаковые по ссылке, то они одинаковы
//   if (obj1 === obj2) return true;
//
//   // Если один из объектов null, а другой нет, они не одинаковы
//   if (obj1 === null || obj2 === null) return false;
//
//   // Если типы объектов разные
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
//
//   // Получаем массив всех ключей объектов
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//
//   // Если количество ключей разное, объекты не одинаковы
//   if (keys1.length !== keys2.length) return false;
//
//   // Рекурсивно сравниваем каждый ключ и его значения
//   for (const key of keys1) {
//     // Если ключи не совпадают или значения не равны, объекты не одинаковы
//     if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// const testCases = [
//   { object1: { name: 'n', age: 10 }, object2: { age: 10, name: 'n' }, expected: true },
//   {
//     object1: { name: 'n', size: 3 },
//     object2: { size: 3 },
//     expected: false,
//   },
//   {
//     object1: {},
//     object2: {},
//     expected: true,
//   },
//   {
//     object1: { isAdult: true, email: 'example@mail.com', page: 100 },
//     object2: { page: 100, isAdult: true, email: 'example@mail.com' },
//     expected: true,
//   },
//   {
//     object1: { checked: 1 },
//     object2: { checked: true },
//     expected: false,
//   },
//   { object1: { checked: true }, object2: { checked: true, marked: true }, expected: false },
//   {
//     object1: { checked: true, marked: true },
//     object2: { checked: true },
//     expected: false,
//   },
//   {
//     object1: (function () {
//       const obj1 = {};
//       const obj2: { [key: string]: any } = obj1;
//       obj2.age = 100;
//       return obj1;
//     })(),
//     object2: (function () {
//       const obj1 = {};
//       const obj2: { [key: string]: any } = obj1;
//       obj2.age = 100;
//       return obj2;
//     })(),
//     expected: true,
//   },
// ];
//
// testCases.forEach(({ object1, object2, expected }, index) => {
//   const result = areObjectsEqual(object1, object2);
//   console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
// });
//
// // Операторы слияния || и ??
// // 1. Тип с опциональным полем
// type Person = {
//   name: string;
//   age: number;
//   address?: string | null; // Опциональное поле
// };
// // 2. Тип без поля адреса
// const person1: Person = {
//   name: 'Иван',
//   age: 30,
//   // address отсутствует
// };
// // 3. Тип адрес явно установлен в null
// const person2: Person = {
//   name: 'Андрей',
//   age: 25,
//   address: null,
// };
// // 4. Тип адрес - пустая строка
// const person3: Person = {
//   name: 'Марина',
//   age: 40,
//   address: '',
// };
// // 4. Тип адрес - обычная строка
// const person4: Person = {
//   name: 'Диана',
//   age: 35,
//   address: 'ул. Тверская, д.8',
// };
// // Проверка
// const checkAddress = (person: Person) => {
//   // Используем оператор слияния ?? для проверки значений
//   const address = person.address ?? null;
//
//   if (address === null) {
//     console.log('не обнаружено');
//   } else if (address === '') {
//     console.log('пусто');
//   } else {
//     console.log(address);
//   }
// };
//
// // Результат
// checkAddress(person1);
// checkAddress(person2);
// checkAddress(person3);
// checkAddress(person4);
//
// // Что выведется
// const a = ('' || null || 0 || -0 || undefined) ?? (null || 0) ?? '' ?? null;
// // '' || null || 0 || -0 || undefined -> undefined
// // null || 0 -> 0
// // undefined ?? 0 ?? '' ?? null -> 0
// // Сравнивая с оператором ?? первые два значения 0 является подходящим, остальные проверки пропускаются
// console.log(a);
// // Функции
// // Что выведет код
// const sayHi = (name = 'Безымянный') => console.log(`Hi, ${name}`);
//
// sayHi(); // Hi, Безымянный
// sayHi('Ivan'); // Hi, Ivan
// sayHi(undefined); // Hi, Безымянный
//
// // Разделение цифр и букв
// function separateLettersAndDigits(input: string): { letters: string[]; digits: string[] } {
//   const letters: string[] = [];
//   const digits: string[] = [];
//   // Проходим по каждому символу в строке
//   for (let i = 0; i < input.length; i++) {
//     const char: number | string = input[i];
//     // Проверяем, является ли символ буквой
//     if (/[A-Za-z]/.test(char)) {
//       letters.push(char);
//       // Проверяем, является ли символ цифрой
//     } else if (/[0-9]/.test(char)) {
//       digits.push(char);
//     }
//   }
//   return { letters: letters, digits: digits };
// }
//
// const result = separateLettersAndDigits('klafhkjahf892734h2i5jhgk54gr298yf2h');
// console.log(result);
//
// // Только короткие строки
// console.log('Только короткие строки');
// const filterShortStrings = (strings: string[], maxLength: number): string[] => {
//   const resFilt: string[] = [];
//   for (const str of strings) {
//     if (str.length < maxLength) {
//       resFilt.push(str);
//     }
//   }
//   return resFilt;
// };
//
// // Пример использования:
// const strings = ['apple', 'banana', 'kiwi', 'cherry', 'mango'];
// const maxLength = 6;
//
// const resFilt = filterShortStrings(strings, maxLength);
// console.log(resFilt); // Вывод: ["apple", "kiwi", "mango"]
//
// console.log('Только короткие строки + третий параметр');
// const filterStringsByLength = (strings: string[], length: number, comparisonType: 'greater' | 'less'): string[] => {
//   const resFilt2: string[] = [];
//   for (const str of strings) {
//     if ((comparisonType === 'less' && str.length < length) || (comparisonType === 'greater' && str.length > length)) {
//       resFilt2.push(str);
//     }
//   }
//   return resFilt2;
// };
//
// // Пример использования:
// const strings2 = ['apple', 'banana', 'kiwi', 'cherry', 'mango'];
// const length = 5;
//
// const lessResult = filterStringsByLength(strings2, length, 'less');
// console.log('Меньше:', lessResult); // Вывод: ["apple", "kiwi", "mango"]
//
// const greaterResult = filterStringsByLength(strings2, length, 'greater');
// console.log('Больше:', greaterResult); // Вывод: ["banana", "cherry"]
//
// console.log('Только короткие строки + опциональный третий параметр');
// const filterStringsByLengthOptional = (
//   strings: string[],
//   length: number,
//   comparisonType: 'greater' | 'less' = 'less',
// ): string[] => {
//   const result: string[] = [];
//   for (const str of strings) {
//     if ((comparisonType === 'less' && str.length < length) || (comparisonType === 'greater' && str.length > length)) {
//       result.push(str);
//     }
//   }
//   return result;
// };
//
// // Пример использования:
// const strings3 = ['apple', 'banana', 'kiwi', 'cherry', 'mango'];
// const length3 = 5;
//
// // По умолчанию сравнение "меньше":
// const defaultComparison = filterStringsByLengthOptional(strings3, length3);
// console.log('По умолчанию (меньше):', defaultComparison);
//
// // Явное указание "меньше":
// const lessResult3 = filterStringsByLengthOptional(strings3, length3, 'less');
// console.log('Меньше:', lessResult);
//
// // Указание "больше":
// const greaterResult3 = filterStringsByLengthOptional(strings3, length3, 'greater');
// console.log('Больше:', greaterResult);
//
// // Наибольший целый делитель
// console.log('Наибольший целый делитель');
// const printGreatestDivisor = (numbers: number[]): void => {
//   const findGreatestDivisor = (num: number): number => {
//     for (let divisor = Math.floor(num / 2); divisor > 0; divisor--) {
//       if (num % divisor === 0) {
//         return divisor;
//       }
//     }
//     return 1; // Если делитель не найден, возвращается 1
//   };
//
//   for (const num of numbers) {
//     if (num <= 1) {
//       console.log(`Число ${num}: делитель отсутствует`);
//     } else {
//       console.log(`Число ${num}: наибольший делитель ${findGreatestDivisor(num)}`);
//     }
//   }
// };
//
// // Пример использования:
// const numbers = [15, 28, 7, 100, 1];
// printGreatestDivisor(numbers);
//
// // Сумма значений объекта
// console.log('');
// console.log('Сумма значений объекта');
// const sumObjectValues = (obj: Record<string, number>): number => {
//   let sum = 0;
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       sum += obj[key];
//     }
//   }
//   return sum;
// };
//
// // Пример использования
// const testObject = { a: 10, b: 20, c: 30 };
// console.log(sumObjectValues(testObject)); // 60
//
// // Сумма значений объекта неизвестного типа
// console.log('');
// console.log('Сумма значений объекта неизвестного типа');
// const sumNumericProperties = (obj: Record<string, unknown>): number => {
//   let sum = 0;
//
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
//       sum += obj[key];
//     }
//   }
//
//   return sum;
// };
//
// // Пример использования
// const exampleObject = {
//   a: 10,
//   b: null,
//   c: 'hello',
//   d: undefined,
//   e: true,
//   f: 15,
// };
//
// console.log(sumNumericProperties(exampleObject)); // Вывод: 25
//
// // Возраст Стаса
// console.log('');
// console.log('Возраст Стаса');
//
// type Human = {
//   name: string;
//   age?: number | null; // Поле `age` может быть числом, `null`, или отсутствовать.
// };
//
// const findAgeByName = (array: Human[], targetName: string): string | number => {
//   // Ищем объект с именем `targetName`.
//   for (const human of array) {
//     if (human.name === targetName) {
//       // Если возраст отсутствует или равен null/undefined.
//       if (human.age === null) {
//         return 'Возраста нет';
//       }
//       // Возвращаем возраст, если он определен.
//       return human.age;
//     }
//   }
//
//   // Если объект не найден.
//   return 'Объект не найден';
// };
//
// // Пример использования:
// const people = [
//   { name: 'Anna', age: 25 },
//   { name: 'Stas', age: null },
//   { name: 'Igor', age: 30 },
//   { name: 'Stas', age: 35 },
// ];
//
// console.log(findAgeByName(people, 'Stas')); // Вывод: Возраста нет (если нужен первый объект с именем "Stas")
// console.log(findAgeByName(people, 'Igor')); // Вывод: 30
// console.log(findAgeByName(people, 'Alex')); // Вывод: Объект не найден
//
// // Колбэк
// console.log('');
// console.log('Колбэк');
//
// type Callback = () => void;
//
// const executeWithRandomResult = (onSuccess: Callback, onFailure: Callback): void => {
//   const isSuccess = Math.random() >= 0.5; // Генерация случайного значения true/false
//   console.log(`Результат рандома: ${isSuccess ? 'успех' : 'неуспех'}`);
//   if (isSuccess) {
//     onSuccess();
//   } else {
//     onFailure();
//   }
// };
//
// // Пример использования:
// const handleSuccess = () => {
//   console.log('👍 Задача выполнена успешно!');
// };
//
// const handleFailure = () => {
//   console.log('👎 Задача завершилась неудачей.');
// };
//
// executeWithRandomResult(handleSuccess, handleFailure);
//
// // Билдер сообщений
// console.log('');
// console.log('Билдер сообщений');
//
// const sayBuilder = (greeting: string) => (name: string) => `${greeting}, ${name}!`;
//
// const sayGreeting = sayBuilder('Hi');
// const sayBye = sayBuilder('Bye');
//
// console.log(sayGreeting('Ruslan')); // Hi, Ruslan!
// console.log(sayGreeting('Maxim')); // Hi, Maxim!
//
// console.log(sayBye('Ruslan')); // Bye, Ruslan!
// console.log(sayBye('Maxim')); // Bye, Maxim!
//
// // Фиббоначи
// console.log('');
// console.log('Фиббоначи');
//
// const fibonacci = (n: number): number => {
//   if (n <= 0) return 0; // Базовый случай
//   if (n === 1) return 1; // Базовый случай
//   return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов для суммы двух предыдущих чисел
// };
//
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13
// console.log(fibonacci(8)); // 21
// console.log(fibonacci(9)); // 34
//
// // Самопроверка
// console.log('');
// console.log('Самопроверка');
//
// // Функции для выполнения различных операций
// const multiply = (a: number, b: number): number => a * b;
// const add = (a: number, b: number): number => a + b;
// const subtract = (a: number, b: number): number => a - b;
// const divide = (a: number, b: number): number => (b !== 0 ? a / b : Infinity);
//
// // Матрица аргументов и ожидаемых результатов
// const testCasesControl: [number, number, Function, number][] = [
//   [1, 9, multiply, 9],
//   [2, 3, add, 5],
//   [5, 5, subtract, 0],
//   [8, 4, divide, 2],
//   [7, 3, multiply, 21],
//   [10, 0, divide, Infinity],
// ];
//
// // Прогон тестов
// testCasesControl.forEach(([arg1, arg2, func, expected], index) => {
//   const resOp = func(arg1, arg2);
//   const isCorrect = resOp === expected;
//   console.log(
//     `Тест #${index + 1}: ${func.name}(${arg1}, ${arg2}) = ${resOp} | Ожидаемый результат: ${expected} | ${isCorrect ? 'Пройден' : 'Не пройден'}`,
//   );
// });

// // Шифр
// console.log('');
// console.log('Шифр');
//
// // Создаем словарь соответствий между английским алфавитом и новым алфавитом
// const createCipherMap = (original: string, cipher: string): Record<string, string> => {
//   return cipher.split('').reduce(
//     (map, char, i) => {
//       map[char] = original[i];
//       return map;
//     },
//     {} as Record<string, string>,
//   );
// };
//
// // Функция для расшифровки текста с использованием словаря
// const decryptText = (encryptedText: string, cipherMap: Record<string, string>): string => {
//   return encryptedText
//     .split('')
//     .map((char) => {
//       const lowerChar = char.toLowerCase();
//       const decodedChar = cipherMap[lowerChar];
//       return decodedChar ? (char === lowerChar ? decodedChar : decodedChar.toUpperCase()) : char;
//     })
//     .join('');
// };
//
// // Оригинальный алфавит и новый алфавит
// const originalAlphabet = 'the quick brown fox jumps over the lazy dog'.replace(/\s+/g, '');
// const cipherAlphabet = 'sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf'.replace(/\s+/g, '');
//
// // Фраза для расшифровки
// const encryptedPhrase = 'xnt gzud lzjhmf fqdzs oqnfqdrr hm kdzqmhmf izuzrbqhos. bnmfqzsr!';
//
// // Создаем словарь
// const cipherMap = createCipherMap(originalAlphabet, cipherAlphabet);
// console.log(cipherMap);
// // Расшифровываем текст
// const decryptedText = decryptText(encryptedPhrase, cipherMap);
//
// console.log('Расшифрованный текст:', decryptedText);

// // Калькулятор времени скачивания файла
// console.log('');
// console.log('Калькулятор времени скачивания файла');
//
// interface File {
//   name: string;
//   size: number;
//   units: 'b' | 'kb' | 'mb' | 'gb';
// }
//
// interface Speed {
//   speedPerSecond: number;
//   units: 'b' | 'kb' | 'mb' | 'gb';
// }
//
// // Конвертация единиц в байты
// const unitsToBytes: Record<string, number> = {
//   b: 1,
//   kb: 10 ** 3,
//   mb: 10 ** 6,
//   gb: 10 ** 9,
// };
//
// const convertToBytes = (size: number, unit: string): number => size * unitsToBytes[unit];
//
// // Расчет времени скачивания в секундах
// const calculateDownloadTimeInSeconds = (fileBytes: number, speedBytesPerSecond: number): number => {
//   return Math.ceil(fileBytes / speedBytesPerSecond);
// };
//
// // Преобразование секунд в дни, часы, минуты и секунды
// const formatTime = (totalSeconds: number): string => {
//   const days = Math.floor(totalSeconds / (24 * 3600));
//   totalSeconds %= 24 * 3600;
//   const hours = Math.floor(totalSeconds / 3600);
//   totalSeconds %= 3600;
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;
//
//   return `Дни: ${days}. Часы: ${hours}. Минуты: ${minutes}. Секунды: ${seconds}.`;
// };
//
// // Основная функция для расчета времени загрузки
// const downloadTimeCalculator = (file: File, speed: Speed): string => {
//   const fileBytes = convertToBytes(file.size, file.units);
//   const speedBytesPerSecond = convertToBytes(speed.speedPerSecond, speed.units);
//   const totalSeconds = calculateDownloadTimeInSeconds(fileBytes, speedBytesPerSecond);
//   return formatTime(totalSeconds);
// };
//
// /**
//  * Конкретные тестовые кейсы
//  * Их редактировать запрещено!
//  * Дебажить, конечно же, можно.
//  */
// const testCases = [
//   [
//     { name: 'День рождения.mp4', size: 1, units: 'gb' },
//     { speedPerSecond: 100, units: 'kb' },
//     'Дни: 0. Часы: 2. Минуты: 46. Секунды: 40.',
//   ],
//   [
//     { name: 'Отчёт.docx', size: 1023443, units: 'kb' },
//     { speedPerSecond: 1, units: 'mb' },
//     'Дни: 0. Часы: 0. Минуты: 17. Секунды: 4.',
//   ],
//   [
//     { name: 'Голосовое сообщение.mp3', size: 1, units: 'b' },
//     { speedPerSecond: 1000, units: 'gb' },
//     'Дни: 0. Часы: 0. Минуты: 0. Секунды: 1.',
//   ],
//   [
//     { name: 'Корги.png', size: 100.45, units: 'mb' },
//     { speedPerSecond: 1162.6, units: 'b' },
//     'Дни: 1. Часы: 0. Минуты: 0. Секунды: 2.',
//   ],
//   [
//     { name: 'GTA V', size: 100.45, units: 'gb' },
//     { speedPerSecond: 1, units: 'b' },
//     'Дни: 1162615. Часы: 17. Минуты: 46. Секунды: 40.',
//   ],
// ] as const;
//
// /**
//  * Цикл для проверки каждого тест-кейса по очереди
//  */
// for (const testCase of testCases) {
//   const file = testCase[0];
//   const speed = testCase[1];
//   const expected = testCase[2];
//
//   const result = downloadTimeCalculator(file, speed);
//
//   if (result === expected) {
//     console.log(`Расчеты верны для файла "${file.name}"!`);
//   } else {
//     console.log(`Расчеты НЕВЕРНЫ для файла "${file.name}"!`);
//   }
// }

// // Рекурсивное сравнение объектов
// console.log('');
// console.log('Рекурсивное сравнение объектов');

// const compareObjectsRecursive = (obj1: any, obj2: any): boolean => {
//   // Если объекты имеют одинаковую ссылку, они равны
//   if (obj1 === obj2) return true;
//
//   // Если один из объектов null/undefined или их типы не совпадают
//   if (obj1 === null || obj2 === null || typeof obj1 !== typeof obj2) return false;
//
//   // Если объекты — примитивы, то их значения должны совпадать
//   if (typeof obj1 !== 'object') return obj1 === obj2;
//
//   // Если объекты — массивы
//   if (Array.isArray(obj1) && Array.isArray(obj2)) {
//     // Длина массивов должна совпадать
//     if (obj1.length !== obj2.length) return false;
//
//     // Сравниваем каждый элемент массива
//     return obj1.every((value, index) => compareObjectsRecursive(value, obj2[index]));
//   }
//
//   // Если только один из объектов является массивом
//   if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
//
//   // Если объекты — обычные объекты
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);
//
//   // Количество ключей должно совпадать
//   if (obj1Keys.length !== obj2Keys.length) return false;
//
//   // Все ключи и их значения должны быть равны
//   return obj1Keys.every((key) => compareObjectsRecursive(obj1[key], obj2[key]));
// };
//
// // Тестовые кейсы
// const object1 = { a: 10, b: { c: { d: { e: [1, true, { g: { a: [1] } }] } } } };
//
// const testCases: [any, any, boolean][] = [
//   // Примитивы
//   [1, 0, false],
//   [false, false, true],
//   [1, true, false],
//   [null, null, true],
//   [undefined, undefined, true],
//   [undefined, null, false],
//   ['', '', true],
//   ['abc', 'ABC', false],
//
//   // Массивы
//   [[1, 2, 3], [1, 2, 3], true],
//   [[3, 2, 1], [1, 2, 3], false],
//   [[], [], true],
//   [[[[1, [2, [3]]]]], [[[1, [2, [3]]]]], true],
//   [[[[false, [], [], [[[true]]]]]], [[[false, [], [], [[[true]]]]]], true],
//   [[], [undefined], false],
//
//   // Объекты
//   [{}, {}, true],
//   [{ a: 10, b: '' }, { a: 10, b: '' }, true],
//   [{ a: [2, 1] }, { a: [1, 2] }, false],
//   [object1, object1, true],
//   [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'X' }] }] }] }, true],
//   [{ x: [{ x: [{ x: [{ x: 'X' }] }] }] }, { x: [{ x: [{ x: [{ x: 'x' }] }] }] }, false],
// ];
//
// // Тестируем функцию
// for (const test of testCases) {
//   const [obj1, obj2, expected] = test;
//   const result = compareObjectsRecursive(obj1, obj2);
//
//   const words = [
//     result === expected ? `Корректно (${result})` : `ОШИБКА - (Ожидалось ${expected}, фактически - ${result})`,
//     '-',
//     JSON.stringify(obj1),
//     '|',
//     JSON.stringify(obj2),
//   ];
//
//   console.log(words.join('\t'));
// }

// Поиск в массиве
// const people = [
//   { name: 'Alice', age: 5 },
//   { name: 'Bob', age: 12 },
//   { name: 'Charlie', age: 8 },
//   { name: 'David', age: 15 },
// ];
//
// const result = people.find((person) => person.age > 10);
//
// console.log(result);
// // Вывод: { name: 'Bob', age: 12 }

// Умный поиск в массиве
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const smartSearch = (arr: any[], property: any, value: any) => {
//   return arr.find((item) => item[property] === value);
// };
//
// const person1 = smartSearch(storage, 'age', 30);
// console.log(person1); // { age: 30, name: 'third' }
//
// const person2 = smartSearch(storage, 'age', 10);
// console.log(person2); // { age: 10, name: 'first' }
//
// const person3 = smartSearch(storage, 'name', 'second');
// console.log(person3); // { age: 20, name: 'second' }

// Рандомный фильтр
// Создаем массив чисел от 1 до 10
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// // Фильтруем элементы случайным образом (например, с вероятностью 50%)
// const randomElements = arr.filter((arr) => Math.random() < 0.5);
//
// console.log(randomElements); // [ 5, 8, 10 ]

// Удаление из массива
// type User = {
//   name: string;
//   age: number;
// };
//
// let users: User[] = [
//   { name: 'Пользователь-1', age: 1 },
//   { name: 'Пользователь-21', age: 21 },
//   { name: 'Пользователь-30', age: 30 },
//   { name: 'Пользователь-14', age: 14 },
//   { name: 'Пользователь-18', age: 18 },
//   { name: 'Пользователь--1', age: -1 },
//   { name: 'Пользователь-1', age: 1 },
// ];
//
// // Фильтруем массив, оставляем только совершеннолетних пользователей
// users = users.filter((user) => user.age >= 18);
//
// console.log(users);
/* Ожидаемый вывод:
[
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-18', age: 18 },
]
*/

// Обогатите список
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// // Используем map, чтобы изменить порядок свойств и добавить новое свойство
// const storage2 = storage.map((item) => ({
//   age: item.name,
//   name: item.age,
//   reversed: true,
// }));
//
// console.log(storage2);
/* Ожидаемый вывод:
[
  { age: 'first', name: 10, reversed: true },
  { age: 'second', name: 20, reversed: true },
  { age: 'third', name: 30, reversed: true },
  { age: 'fourth', name: 40, reversed: true }
]
*/

// Сортировка
// const sortArr = (arr: User[], key: keyof User, direction: 'asc' | 'desc' = 'asc'): User[] => {
//   // Создаем копию массива, чтобы не изменять оригинальный
//   const sortedArray = [...arr];
//
//   // Сортируем копию массива
//   sortedArray.sort((a, b) => {
//     if (a[key] < b[key]) {
//       return direction === 'asc' ? -1 : 1;
//     }
//     if (a[key] > b[key]) {
//       return direction === 'asc' ? 1 : -1;
//     }
//     return 0; // Если значения равны
//   });
//
//   return sortedArray;
// };
//
// type User = { id: number; age: number; name: string };
//
// const users: User[] = [
//   { id: 1, age: 10, name: 'zxc' },
//   { id: 3, age: 20, name: 'juk' },
//   { id: 6, age: 2, name: 'aa' },
//   { id: 9, age: 1, name: 'ab' },
//   { id: 2, age: 5, name: 'zz' },
// ];
//
// // Сортировка по id по возрастанию
// const sortedByIdAsc = sortArr(users, 'id');
// console.log(sortedByIdAsc);
// // Отсортированы по увеличению id
// // [
// //   { id: 1, age: 10, name: 'zxc' },
// //   { id: 2, age: 5, name: 'zz' },
// //   { id: 3, age: 20, name: 'juk' },
// //   { id: 6, age: 2, name: 'aa' },
// //   { id: 9, age: 1, name: 'ab' }
// // ]
//
// // Сортировка по name по убыванию
// const sortedByNameDesc = sortArr(users, 'name', 'desc');
// console.log(sortedByNameDesc);
// // Отсортированы по уменьшению имени
// // [
// //   { id: 2, age: 5, name: 'zz' },
// //   { id: 1, age: 10, name: 'zxc' },
// //   { id: 3, age: 20, name: 'juk' },
// //   { id: 9, age: 1, name: 'ab' },
// //   { id: 6, age: 2, name: 'aa' }
// // ]
//
// // Сортировка по age по убыванию
// const sortedByAgeDesc = sortArr(users, 'age', 'desc');
// console.log(sortedByAgeDesc);
// // Отсортированы по уменьшению возраста
// // [
// //   { id: 3, age: 20, name: 'juk' },
// //   { id: 1, age: 10, name: 'zxc' },
// //   { id: 2, age: 5, name: 'zz' },
// //   { id: 6, age: 2, name: 'aa' },
// //   { id: 9, age: 1, name: 'ab' }
// // ]
//
// // Проверим, что оригинальный массив остался нетронутым
// console.log(users);
// // Оригинальный массив users остался не тронутым!
// // [
// //   { id: 1, age: 10, name: 'zxc' },
// //   { id: 3, age: 20, name: 'juk' },
// //   { id: 6, age: 2, name: 'aa' },
// //   { id: 9, age: 1, name: 'ab' },
// //   { id: 2, age: 5, name: 'zz' }
// // ]

// // Reduce. Оценки
// const values = [
//   [1, 100],
//   [2, 200],
//   [3, 300],
//   [1, 2],
//   [3, 400],
//   [4, 500],
//   [1, 99],
// ];
//
// const result = values.reduce(
//   (acc: Record<number, { count: number; sum: number; details: string[] }>, [score, students]) => {
//     if (!acc[score]) {
//       acc[score] = { count: 0, sum: 0, details: [] };
//     }
//
//     acc[score].count++;
//     acc[score].sum += students;
//     acc[score].details.push(`[${score}, ${students}]`);
//
//     return acc;
//   },
//   {},
// );
//
// // Форматированный вывод
// Object.entries(result).forEach(([score, { count, sum, details }]) => {
//   const suffix = count === 1 ? 'раз' : 'раза';
//   const detailsText = details.join(', ');
//   console.log(`Оценка ${score} встретилась ${count} ${suffix} - ${detailsText} и всего = ${sum} чел`);
// });

// Палиндром
// import { green, red } from 'chalk';
//
// const isPalindrome = (word: string): boolean => word === word.split('').reverse().join('');
//
// const tests: [string, boolean][] = [
//   ['топот', true],
//   ['пот', false],
//   ['потоп', true],
//   ['кабак', true],
//   ['(())', false],
//   ['табат', true],
//   ['abab', false],
//   ['топпот', true],
//   ['()()', false],
//   ['', true],
//   ['123321', true],
//   ['())(', true],
//   ['abba', true],
//   ['а роза упала на лапу азора', false],
// ];
//
// for (const [word, expected] of tests) {
//   const result = isPalindrome(word);
//   if (result !== expected) {
//     console.log(red(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`));
//   } else {
//     console.log(green(`Слово "${word}" успешно. Результат: ${result}`));
//   }
// }

// Логические операторы
import { green, red } from 'chalk';

// Определение типов
type BinaryMatrixRow = [boolean, boolean];
type BinaryMatrix = [BinaryMatrixRow, BinaryMatrixRow, BinaryMatrixRow, BinaryMatrixRow];

const matrix: BinaryMatrix = [
  [false, false],
  [false, true],
  [true, false],
  [true, true],
];

type Operator = (a: boolean, b: boolean) => boolean;
type UnaryOperator = (a: boolean) => boolean;
type ExpectedResult = [boolean, boolean, boolean, boolean];

// Реализация логических операторов
const or: Operator = (a, b) => a || b;
const and: Operator = (a, b) => a && b;
const e: Operator = (a, b) => a === b;
const ne: Operator = (a, b) => a !== b;
const nand: Operator = (a, b) => !(a && b);
const nor: Operator = (a, b) => !(a || b);
const xor: Operator = (a, b) => a !== b;
const n: UnaryOperator = (a) => !a;

// Тест-кейсы для бинарных операторов
const testCasesForMatrix: [BinaryMatrix, Operator, ExpectedResult][] = [
  [matrix, or, [false, true, true, true]],
  [matrix, and, [false, false, false, true]],
  [matrix, e, [true, false, false, true]],
  [matrix, ne, [false, true, true, false]],
  [matrix, nand, [true, true, true, false]],
  [matrix, nor, [true, false, false, false]],
];

for (const testCase of testCasesForMatrix) {
  const [dataset, operator, expectedResults] = testCase;

  for (let i = 0; i < dataset.length; i++) {
    const [a, b] = dataset[i];
    const expectedResult = expectedResults[i];

    const result = operator(a, b);
    const message = `[${operator.name}]\t[${i + 1}/${dataset.length}]:`;

    if (result === expectedResult) {
      console.log(green(`${message} Успешно`));
    } else {
      console.error(red(`${message} ОШИБКА! Ожидалось: ${expectedResult}, получено: ${result}`));
    }
  }
}
