/*
  houses.json
  [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
  ]

  interface House {
  ...
  }

  interface HouseWithID {
  ...
  }

  function findHouses(houses: string): HouseWithID[];
  function findHouses(
    houses: string,
    filter: (house: House) => boolean
  ): HouseWithID[];
  function findHouses(houses: House[]): HouseWithID[];
  function findHouses(
    houses: House[],
    filter: (house: House) => boolean
  ): HouseWithID[];

  console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  );

  console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
*/

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type FilterFunction = (house: House) => boolean;

const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilterFunction): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilterFunction): HouseWithID[];

function findHouses(house: unknown, filter?: unknown): HouseWithID[] {
  if (typeof house === "string") house = JSON.parse(house as string);

  let housesWithId: HouseWithID[] = houses.map((h, id) => ({
    id,
    ...h,
  }));

  if (filter) housesWithId = housesWithId.filter(filter as FilterFunction);

  return housesWithId;
}

console.log(findHouses(JSON.stringify(houses)));
console.log(findHouses(houses, ({ name }) => name === "Atreides"));
