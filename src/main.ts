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
let affordableProperty: Property | null;
affordableProperty = null;
console.log('');
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
