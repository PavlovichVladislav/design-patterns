// Абстрактная фабрика
const bmwProducer = (kind) => {
  switch (kind) {
    case 'sport':
      return sportCarFactory;
    case 'family':
      return familyCarFactory;
    default:
      break;
  }
};

// Фабрики
const sportCarFactory = () => {
  return new Z4();
};

const familyCarFactory = () => {
  return new I3();
};

class Z4 {
  info() {
    return 'Z4 is a Sport car!';
  }
};

class I3 {
  info() {
    return 'i3 is a family car!';
  }
};

// Вызываем абстрактную фабрику и получаем экземпляр конкретной фабрики спорткаров
const sportProduction = bmwProducer('sport'); 

const sportCar = sportProduction();
console.log(sportCar.info())
