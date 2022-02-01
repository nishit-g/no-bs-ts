function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const socialEvents = [
  { name: "liked", count: 32 },
  { name: "shared", count: 12 },
];

console.log(pluck(socialEvents, "count"));
console.log(pluck(socialEvents, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log(name, data);
}

sendEvent("checkout", { time: 20, user: "bob" });
sendEvent("addToCart", {
  time: 20,
  user: "bob",
  quantity: 10,
  productId: "233a",
});
