// My tasks
console.log(`1. Задания по теме: "Циклы"`);
// 1. Зачем используется цикл while?

/* Зачем используется цикл while?
 - Лучше использовать while:
      > Условие выхода из цикла зависит от динамических факторов.
      > Количество итераций заранее неизвестно.
      > Нужен контроль над процессом и состоянием.
 */

// Примеры

// 1. Работа с динамическими данными
// Обработка заявок на просмотр недвижимости
type ViewingRequest = {
  id: number;
  clientName: string;
  propertyId: number;
  scheduledDate: string;
};
// Очередь заявок
// Создаем массив из объектов - заявок на просмотр недвижимости

const viewingRequests: ViewingRequest[] = [
  { id: 1, clientName: 'Иван Иванов', propertyId: 1, scheduledDate: '2024-12-01' },
  { id: 2, clientName: 'Пётр Петров', propertyId: 2, scheduledDate: '2024-12-10' },
  { id: 3, clientName: 'Андрей Андреев', propertyId: 3, scheduledDate: '2024-12-15' },
];
// Обработка заявок пока очередь не будет пуста
while (viewingRequests.length > 0) {
  const requestForClient = viewingRequests.shift();

  if (requestForClient) {
    console.log(`Обрабатывается заявка № ${requestForClient.id}`);
    console.log(`Клиент: ${requestForClient.clientName}`);
    console.log(`Объект недвижимости № ${requestForClient.propertyId}`);
    console.log(`Дата просмотра: ${requestForClient.scheduledDate}`);
    console.log('-----------------------------------------------------------------');
  }
}
console.log(`Все заявки обработаны.
------------------------------------`);

// 2. Поиск или проверка до выполнения условия
// Поиск недвижимости с ценой ниже заданной

type Property = {
  id: number;
  name: string;
  price: number;
  location: string;
};

const properties: Property[] = [
  { id: 1, name: 'Апартаменты A', price: 1500000, location: 'Центр' },
  { id: 2, name: 'Апартаменты B', price: 1200000, location: 'Окраина' },
  { id: 3, name: 'Дом', price: 3000000, location: 'Область' },
  { id: 4, name: 'Студия', price: 900000, location: 'Спальный район' },
];

const budget = 1000000; // Заданная сумма
let i = 0;
let affordableProperty: Property | null = null;
while (i < properties.length && !affordableProperty) {
  if (properties[i].price < budget) {
    affordableProperty = properties[i];
  }
  i++;
}

if (affordableProperty) {
  console.log(`Найдена недвижимость: ${affordableProperty.name}, цена ${affordableProperty.price}`);
} else {
  console.log('Нет доступной недвижимости в заданном бюджете.');
}

// Продолжение изучения условий следует...
console.log(`-------------------------------------------------
2. Задание на тему "Дебаг"`);
/*
Продебажьте программу и объясните, почему первый if сработал, а второй нет.
Исправьте логическую ошибку в программе, чтобы второй if тоже срабатывал.

Текущий вывод программы:
Пользователь: { age: 33, nickname: 'Short name' }
It is a very very very long nickname совершеннолетний!
Конец работы для пользователя { age: 33, nickname: 'It is a very very very long nickname' }

Ожидаемый вывод программы:
Пользователь: { age: 33, nickname: 'Short name' }
It is a very very very long nickname совершеннолетний!
У [It is a very very very long nickname] имя длиннее 10 символов
Конец работы для пользователя { age: 33, nickname: 'It is a very very very long nickname' }
 */
const age = 33;
const nickname = 'Short name'; // 10 length

const adultThreshold = 18;
const longNameThreshold = 10;

const user = { age, nickname };

console.log('Пользователь:', user);

user.nickname = 'It is a very very very long nickname'; // 36 Length

if (user.age >= adultThreshold) {
  console.log(`${user.nickname} совершеннолетний!`);
}
if (nickname.length >= longNameThreshold) {
  console.log(`У [${user.nickname}] имя длиннее 10 символов`);
}

console.log('Конец работы для пользователя', user);

// Оператор сравнения во втором условии необходимо было заменить на ">="

console.log(`3. Задание на тему "Типов TS"`);

type A = {
  age?: number | string;
  nick: string;
  info: {} | (number | string)[];
  photo?: string | null;
};

// type A = {}; Так ТОЖЕ РАБОТАЕТ!

const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

const a4: A = {
  nick: '',
  info: {},
};
console.log(`Тип указан верно!`);

// Литеральные типы
console.log(`4. Задание на тему "Литеральные типы"`);
// Строковый литерал
type WeatherCondition = 'Sunny' | 'Rainy' | 'Cloudy' | 'Snowy' | 'Windy' | 'Sultry';

// const tomorrowWeather: WeatherCondition = 'Stormy'; // Ошибка
const todayWeather: WeatherCondition = 'Sunny';

// Числовой литерал
type ShootDice = 1 | 2 | 3 | 4 | 5 | 6;

const shootDice: ShootDice = 3;
// const invalidShootDice: ShootDice = 7; // Ошибка

// Объект

// Новый тип с двумя полями
type GameEvent = {
  weather: WeatherCondition;
  diceResult: ShootDice;
  createdAt: Date;
  createdAtISO: string;
};

// Создание объекта такого типа
const eventInGame: GameEvent = {
  weather: 'Sunny',
  diceResult: 4,
  createdAt: new Date(),
  createdAtISO: new Date().toISOString(),
};

// Вывод объекта в консоль
console.log(eventInGame);

/*
1 2024-08-23T03:30:00-11:00 — это время в UTC: 2024-08-23T14:30:00Z
2 2024-08-23T15:30:00+03:00 — это время в UTC: 2024-08-23T12:30:00Z
3 2024-08-23T14:30:00Z — это уже время в UTC: 2024-08-23T14:30:00Z
4 2024-08-23T15:30:00Z — это уже время в UTC: 2024-08-23T15:30:00Z
5 2024-08-24T01:30:00+13:00 — это время в UTC: 2024-08-23T12:30:00Z
6 2024-08-23T17:30:00+02:00 — это время в UTC: 2024-08-23T15:30:00Z
7 2024-08-23T10:30:00-04:00 — это время в UTC: 2024-08-23T14:30:00Z
8 2024-08-23T03:30:00-12:00 — это время в UTC: 2024-08-23T15:30:00Z
9 2024-08-23T09:30:00-03:00 — это время в UTC: 2024-08-23T12:30:00Z
10 2024-08-23T14:30:00-01:00 — это время в UTC: 2024-08-23T15:30:00Z
11 2024-08-24T02:30:00+12:00 — это время в UTC: 2024-08-23T14:30:00Z
12 2024-08-23T12:30:00Z — это уже время в UTC: 2024-08-23T12:30:00Z

2024-08-23T14:30:00Z (4 строки):

    1: 2024-08-23T03:30:00-11:00
    3: 2024-08-23T14:30:00Z
    7: 2024-08-23T10:30:00-04:00
    11: 2024-08-24T02:30:00+12:00



2024-08-23T12:30:00Z (4 строки):

    2: 2024-08-23T15:30:00+03:00
    5: 2024-08-24T01:30:00+13:00
    9: 2024-08-23T09:30:00-03:00
    12: 2024-08-23T12:30:00Z

2024-08-23T15:30:00Z (4 строки):

    4: 2024-08-23T15:30:00Z
    6: 2024-08-23T17:30:00+02:00
    8: 2024-08-23T03:30:00-12:00
    10: 2024-08-23T14:30:00-01:00
 */

// Багфикс

const words: string[] = ['Солнце', 'Луна', 'Земля', 'Вода', 'Жизнь'];

type DefaultSettings = {
  lineNumber: number;
  maxWordsPerLine: number;
};

const defaultSettings = {
  lineNumber: 0,
  maxWordsPerLine: 2,
};

function deepClone(obj: any): any {
  if (obj === null || typeof obj !== 'object') return obj;

  // Обработка специфичных типов
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) return new Map([...obj]);
  if (obj instanceof Set) return new Set([...obj]);

  const clone: { [key: string]: any } = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

for (let i = 1; i < 3; i++) {
  console.log(`Запуск номер ${i}`);
  // С помощью рекурсии создаем глубокую копию объекта
  const settings: DefaultSettings = deepClone(defaultSettings);
  // ПОВЕРХНОСТНЫЕ КОПИИ. Изменение вложенного объекта в копии затронет оригинал.
  // метод копирует свойства из одного или нескольких источников в целевой объект
  // const settings: DefaultSettings = Object.assign({}, defaultSettings);
  // оператор распространения (...) копирует свойства из объекта defaultSettings в новый объект.
  // const settings: DefaultSettings = { ...defaultSettings };

  // Math.ceil - округление до ближайшего целого в большую сторону.
  const linesCount: number = Math.ceil(words.length / settings.maxWordsPerLine);

  console.log(`Будет выведено ${linesCount} строк(и)`);
  for (settings.lineNumber; settings.lineNumber < linesCount; settings.lineNumber++) {
    const start: number = settings.lineNumber * settings.maxWordsPerLine;
    const end: number = start + settings.maxWordsPerLine;

    const elements: string[] = words.slice(start, end);
    console.log(`Строка ${settings.lineNumber + 1}:`, elements);
  }

  console.log();
}

// Сравнение объектов
function areObjectsEqual(obj1: any, obj2: any): boolean {
  // Если объекты одинаковые по ссылке, то они одинаковы
  if (obj1 === obj2) return true;

  // Если один из объектов null, а другой нет, они не одинаковы
  if (obj1 === null || obj2 === null) return false;

  // Если типы объектов разные
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  // Получаем массив всех ключей объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Если количество ключей разное, объекты не одинаковы
  if (keys1.length !== keys2.length) return false;

  // Рекурсивно сравниваем каждый ключ и его значения
  for (const key of keys1) {
    // Если ключи не совпадают или значения не равны, объекты не одинаковы
    if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const testCases = [
  { object1: { name: 'n', age: 10 }, object2: { age: 10, name: 'n' }, expected: true },
  {
    object1: { name: 'n', size: 3 },
    object2: { size: 3 },
    expected: false,
  },
  {
    object1: {},
    object2: {},
    expected: true,
  },
  {
    object1: { isAdult: true, email: 'example@mail.com', page: 100 },
    object2: { page: 100, isAdult: true, email: 'example@mail.com' },
    expected: true,
  },
  {
    object1: { checked: 1 },
    object2: { checked: true },
    expected: false,
  },
  { object1: { checked: true }, object2: { checked: true, marked: true }, expected: false },
  {
    object1: { checked: true, marked: true },
    object2: { checked: true },
    expected: false,
  },
  {
    object1: (function () {
      const obj1 = {};
      const obj2: { [key: string]: any } = obj1;
      obj2.age = 100;
      return obj1;
    })(),
    object2: (function () {
      const obj1 = {};
      const obj2: { [key: string]: any } = obj1;
      obj2.age = 100;
      return obj2;
    })(),
    expected: true,
  },
];

testCases.forEach(({ object1, object2, expected }, index) => {
  const result = areObjectsEqual(object1, object2);
  console.log(`Test case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});

// Операторы слияния || и ??
// 1. Тип с опциональным полем
type Person = {
  name: string;
  age: number;
  address?: string | null; // Опциональное поле
};
// 2. Тип без поля адреса
const person1: Person = {
  name: 'Иван',
  age: 30,
  // address отсутствует
};
// 3. Тип адрес явно установлен в null
const person2: Person = {
  name: 'Андрей',
  age: 25,
  address: null,
};
// 4. Тип адрес - пустая строка
const person3: Person = {
  name: 'Марина',
  age: 40,
  address: '',
};
// 4. Тип адрес - обычная строка
const person4: Person = {
  name: 'Диана',
  age: 35,
  address: 'ул. Тверская, д.8',
};
// Проверка
const checkAddress = (person: Person) => {
  // Используем оператор слияния ?? для проверки значений
  const address = person.address ?? null;

  if (address === null) {
    console.log('не обнаружено');
  } else if (address === '') {
    console.log('пусто');
  } else {
    console.log(address);
  }
};

// Результат
checkAddress(person1);
checkAddress(person2);
checkAddress(person3);
checkAddress(person4);

// Что выведется
const a = ('' || null || 0 || -0 || undefined) ?? (null || 0) ?? '' ?? null;
// '' || null || 0 || -0 || undefined -> undefined
// null || 0 -> 0
// undefined ?? 0 ?? '' ?? null -> 0
// Сравнивая с оператором ?? первые два значения 0 является подходящим, остальные проверки пропускаются
console.log(a);
// Функции
// Что выведет код
const sayHi = (name = 'Безымянный') => console.log(`Hi, ${name}`);

sayHi(); // Hi, Безымянный
sayHi('Ivan'); // Hi, Ivan
sayHi(undefined); // Hi, Безымянный

// Разделение цифр и букв
function separateLettersAndDigits(input: string): { letters: string[]; digits: string[] } {
  const letters: string[] = [];
  const digits: string[] = [];
  // Проходим по каждому символу в строке
  for (let i = 0; i < input.length; i++) {
    const char: number | string = input[i];
    // Проверяем, является ли символ буквой
    if (/[A-Za-z]/.test(char)) {
      letters.push(char);
      // Проверяем, является ли символ цифрой
    } else if (/[0-9]/.test(char)) {
      digits.push(char);
    }
  }
  return { letters: letters, digits: digits };
}

const result = separateLettersAndDigits('klafhkjahf892734h2i5jhgk54gr298yf2h');
console.log(result);
