import { test, expect } from "vitest";

const foo = () => 1;

test("Foo", () => {
  console.log(1);

  expect(foo()).toEqual(1);
});
