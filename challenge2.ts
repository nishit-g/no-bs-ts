/*
 * 1. Filter Function
 * 2. For each function
 * 3. Map function
 */

function myFilterFunction<T>(
  items: T[],
  filterFunction: (v: T) => boolean
): T[] {
  return items.reduce(
    (acc, val) => (filterFunction(val) ? [...acc, val] : acc),
    [] as T[]
  );
}
console.log(myFilterFunction([10, 23, 30, 5, 20, 50], (v) => v % 10 === 0));

function myForEachFunction<T>(items: T[], forEachFunc: (v: T) => void): void {
  return items.reduce((_, val) => {
    forEachFunc(val);
    return undefined;
  }, undefined);
}
console.log(
  myForEachFunction(["a", "b", "c"], (v) => console.log(v.toUpperCase()))
);

// new one
function myMapFunction<T, K>(items: T[], mapFunction: (v: T) => K): K[] {
  return items.reduce((acc, val) => [...acc, mapFunction(val)], [] as K[]);
}
console.log(myMapFunction(["3", "5", "9"], (v) => parseInt(v)));
console.log(myForEachFunction(["3", "5", "9"], (v) => parseInt(v)));
