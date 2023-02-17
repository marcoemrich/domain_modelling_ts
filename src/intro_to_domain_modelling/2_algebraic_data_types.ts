// # Algebraic Data Types (ADT)

import { unsafe } from "bun";

// ### Sum Types (OR)

type Player = "PlayerOne" | "PlayerTwo";

type Points = "Love" | "Fifteen" | "Thirty";

type Score =
  | { kind: "Points"; points: [Points, Points] }
  | { kind: "Forty"; fortyPlayer: Player; pointsOtherPlayer: Points }
  | { kind: "Deuce" }
  | { kind: "Advantage"; player: Player }
  | { kind: "Game"; player: Player };

// ### Product Types (AND)

/* Product: Tuple */
type Coordinate = [number, number];

/* Product: Structure */
type Coordinate2 = { x: number; y: number };

// # Functions

type Shape = never;
type Size = never;

type AreaSize = (shape: Shape) => Size; // TS signatures need var names

type Add = (a: number, b: number) => number;
type Add2 = (numbers: [number, number]) => number;

// # Lists

const l: Shape[] = [];

type Color = "Red" | "Green";
type SimplePicture = { shape: Shape[]; backgroundColor: Color };

// Combining &

{
  type A = number;
  type B = string;

  type C = A & B;
}

{
  type A = { a: string };
  type B = { b: string };

  type C = A & B;

  type F = (c: C) => void;
  const f1 = (c: C) => undefined;
  const f2: F = (c: C) => undefined;
  const f3: (c: C) => void = (c: C) => undefined;

  // f({ a: "foo", b: "foo", d: 1 });

  const d = { a: "foo", b: "foo", d: 1 };
  f1(d);
}

{
  type T1 = [string, "x", string];
  type T2 = ["z", string, string];
  type T3 = T1 & T2;

  const t: T3 = ["z", "x", "y"];
}

// Combining |

{
  type A = string;
  type B = number;
  type C = { x: string };

  type ABC = A | B | C;
  const x = 1;
}

{
  type T1 = [string, "x", string];
  type T2 = ["z", string, string];
  type T3 = T1 | T2;

  const v1: T3 = ["z", "bar", "baz"];
  const v2: T3 = ["foo", "x", "baz"];
  // const v3: T3 = ["foo", "bar", "baz"];
}

// Combining via Tuple

{
  type AB = "A" | "B";
  type CD = "C" | "D";

  type T = [AB, CD];
  const t: T = ["A", "C"];
}

const x: unknown = "foo";

// const a: string = x;

// type numberOfPlayers = | NumberOfPlayers(int);
// type duration = Minutes(int) | Hours(int);
// type boardgame = {numberOfPlayers: int, duration: duration};

// type cover = Leather | Cardboard;
// type notebooks = {numberOfPages: int, cover: cover};

// type id = int;

// type product('productKind) = {
//   productId: id,
//   productSpecificData: 'productKind,
// };

// let myNotebook = {productId: 27, productSpecificData: {numberOfPages: 300, cover: Leather}};
// let myBoardgame = {productId: 28, productSpecificData: {numberOfPlayers: 5, duration: Minutes(90)}};

// let productIdOf = product => product.productId;

// let numberOfPlayersOf = product => product.productSpecificData.numberOfPlayers;
