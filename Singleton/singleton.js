/**
 * Инстанс создаётся при первом вызове конструктора. 
 * Все дальнейшие разы новые классы ссылаются на один и тот же объект.
 * У нас в системе есть объект instance и конструктор с ссылкой на этот объект.
 * Любой объект, созданный конструктором Counter будет получать ссылку на instance, а не создавать каждый раз свой. 
 */
class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }

    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
counter2.increaseCount();
counter2.increaseCount();

console.log(counter1.getCount()); // 4 
console.log(counter2.getCount()); // 4