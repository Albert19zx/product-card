// =====================================
// Задание 3. Объект с моими данными
// =====================================

const albert = {
  name: "Альберт",
  surname: "Клеблеев",
  age: 35,
  country: "Узбекистан",
  city: "Ташкент",
  profession: "Графический дизайнер",
  relationshipStatus: "Женат"
};

console.log(albert);


// =====================================
// Задание 4. Объект автомобиля
// =====================================

const car = {
  brand: "BMW",
  model: "M5",
  year: 2020,
  color: "Черный",
  transmission: "Автомат"
};

// Добавляем владельца автомобиля
car.owner = albert;

console.log(car);


// =====================================
// Задание 5. Максимальная скорость
// =====================================

function addMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return;
  }

  carObject.maxSpeed = 250;
}

addMaxSpeed(car);

console.log(car);


// =====================================
// Задание 6. Вывод свойства объекта
// =====================================

function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(albert, "name");
showProperty(car, "brand");


// =====================================
// Задание 7. Массив продуктов
// =====================================

const products = [
  "Хлеб",
  "Молоко",
  "Яйца",
  "Сыр",
  "Мясо"
];

console.log(products);


// =====================================
// Задание 8. Массив фильмов
// =====================================

const movies = [
  {
    title: "Гладиатор",
    director: "Ридли Скотт",
    year: 2000,
    genre: "Исторический"
  },

  {
    title: "Храброе сердце",
    director: "Мэл Гибсон",
    year: 1995,
    genre: "Исторический"
  }
];

// Добавляем фильм в конец массива

movies.push({
  title: "13-й воин",
  director: "Джон Мактирнан",
  year: 1999,
  genre: "Приключения"
});

console.log(movies);


// =====================================
// Задание 9. Еще один массив фильмов
// =====================================

// Отдельно выберем фильмы о Средневековье

const medievalMovies = [
  movies[1],
  movies[2]
];

console.log(medievalMovies);


// Объединяем два массива с помощью spread

const allMovies = [...movies, ...medievalMovies];

console.log(allMovies);


// =====================================
// Задание 10. Метод map()
// =====================================

function addRareProperty(array) {

  const newArray = array.map(function (movie) {

    return {
      ...movie,
      isRare: movie.year < 2000
    };

  });

  return newArray;
}

const moviesWithRare = addRareProperty(allMovies);

console.log(moviesWithRare);