import { sum, max, min } from "../arrayUtils.js";

describe("sum function", () => {
  it("should returns sum of all array numbers", () => {
    const res = sum([3, 5, 54]);
    expect(res).toBe(62);
  });

  it("should handle sum of negative array numbers", () => {
    const res = sum([-3, -5, -50, -8]);
    expect(res).toBe(-66);
  });

  it("should handle sum of float array numbers", () => {
    const res = sum([12.8, 5.4, 1.1]);
    expect(res).toBeCloseTo(19.3);
  });

  it("should handle sum of empty array", () => {
    const res = sum([]);
    expect(res).toBe(0);
  });

  it("should throw exception if not array", () => {
    expect(() => sum("test")).toThrow("must be an array");
  });
});

describe("max function", () => {
  it("should returns max number", () => {
    const res = max([3, 5, 54]);
    expect(res).toBe(54);
  });

  it("should returns max among negative numbers", () => {
    const res = max([-3, -5, -50, -8]);
    expect(res).toBe(-3);
  });

  it("should returns max float number", () => {
    const res = max([12.8, 5.4, 1.1]);
    expect(res).toBe(12.8);
  });

  it("should throw exception if not array", () => {
    expect(() => max("test")).toThrow("must be an array");
  });
});

describe("min function", () => {
  it("should returns min number", () => {
    const res = min([3, 5, 54]);
    expect(res).toBe(3);
  });

  it("should returns min among negative numbers", () => {
    const res = min([-3, -5, -50, -8]);
    expect(res).toBe(-50);
  });

  it("should returns min float number", () => {
    const res = min([12.8, 5.4, 1.1]);
    expect(res).toBe(1.1);
  });

  it("should throw exception if not array", () => {
    expect(() => min("test")).toThrow("must be an array");
  });
});
