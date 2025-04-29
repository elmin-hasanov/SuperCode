import { test, expect, describe } from "vitest";
import { add } from "./math";

describe("add function", () => {
  test("addition of 1 and 2 results in 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("addition of '1'  and 4 results in 5 ", () => {
    expect(add("1", 4)).toBe(5);
  });

  test("addition of 4 and 'potato' should result in an error", () => {
    // ! obacht: wenn wir auf vorhandensein von fehlern prüfen, müssen wir das argument an
    // ! expect in eine extra  function wickeln damit unser programm nicht abbricht
    expect(() => add(4, "potato")).toThrowError();
  });
});
