/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;

  let increment = () => {
    return ++count;
  };

  let decrement = () => {
    return --count;
  };

  let reset = () => {
    return (count = init);
  };

  return {
    increment,
    reset,
    decrement,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
