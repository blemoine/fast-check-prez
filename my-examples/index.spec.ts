import fc, {VerbosityLevel} from "fast-check";

function getFees(price: number, threshold: number): number {
  const shippingFeesRate = 0.009;
  const shippingFees = shippingFeesRate * price;
  return shippingFees >= threshold ? 0 : shippingFees;
}

describe("text", () => {
  test("trim should return a smaller string", () => {
    fc.assert(
      fc.property(fc.nat(), (n) => {
        expect(getFees(n * 1000, n * 9)).toStrictEqual(0);
      }), {verbose: VerbosityLevel.VeryVerbose}
    );
  });
});

/*

describe("getExpeditionFees", () => {
  it("should return 0 if the price is 0", () => {
    expect(getExpeditionFees(0, 10)).toStrictEqual(0);
  });
  it("should return 0 if the freeThreshold is 0", () => {
    expect(getExpeditionFees(100, 0)).toStrictEqual(0);
  });
  it("should return the 0.9% of the price if it the fees are blow the threshold", () => {
    expect(getExpeditionFees(1000, 10)).toStrictEqual(9);
  });
  it("should return 0 if it the fees are equal to the threshold", () => {
    expect(getExpeditionFees(1000, 9)).toStrictEqual(0);
  });
  it("should return 0 if it the fees are above to the threshold", () => {
    expect(getExpeditionFees(1000, 7)).toStrictEqual(0);
  });
})

  it("should return 0 if it the fees are equal to the threshold", () => {
//    expect(getExpeditionFees(3000, 27)).toStrictEqual(0);
  });

  // --- Phase 2
  it("should return 0 if the threshold is 0", () => {
    fc.assert(
      fc.property(fc.nat(), (price: number) => {
        expect(getExpeditionFees(price, 0)).toStrictEqual(0);
      })
    );
  });
  it("should return something smaller than the threshold", () => {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (price: number, threshold: number) => {
        expect(getExpeditionFees(price, threshold)).toBeLessThanOrEqual(
          threshold
        );
      }), {numRuns:1}
    );
  });
});


describe("property based", () => {
  it("TODO", () => {
    fc.assert(
      fc.property(fc.nat(), (n) => {
        expect(getExpeditionFees(n * 1000, n * 9)).toStrictEqual(0);
      }),
      { numRuns: 100000 }
    );
  });
});

/!*
it("TODO", () => {
    // 3000 * 0.009 === 27
    expect(getExpeditionFees(3000, 27)).toStrictEqual(0);
  });
 *!/

*/
