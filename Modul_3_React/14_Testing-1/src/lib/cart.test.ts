import { describe, expect, test } from "vitest";
import { CartItem, getCartTotal } from "./cart";

// * Rabattregeln:
// unter 150 kein Rabatt
// 150 - 300 => 10%
// 300 - 1000 => 15%
// ab 1000 => 20%

// * TDD => Wir schreiben den Test zuerst

describe("getCartTotal", () => {
  test("empty cart costs nothing", () => {
    expect(getCartTotal([])).toStrictEqual({
      total: 0,
      discountPercent: 0,
      appliedDiscount: 0,
      totalWithDiscount: 0,
    });
  });
  test("cart worth 300 EUR gets 15% discount", () => {
    const cart: CartItem[] = [
      {
        id: "oiwj3f92834yfouehwgowjg",
        name: "FeinMotorikStation 3000",
        priceCents: 6000,
        amount: 5,
      },
    ];

    // * bei vergleichen von arrays oder objekten koennen wir toBe nicht benutzen (objektidentität) 
    // * toEqual vergleicht den Inhalt des Objekts mit ==
    // * toStrictEqual vergleicht mit ===
    expect(getCartTotal(cart)).toStrictEqual({
      total: 30000,
      discountPercent: 15,
      appliedDiscount: 4500,
      totalWithDiscount: 25500,
    });
  });
});
