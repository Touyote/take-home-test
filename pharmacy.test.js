import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy unit test", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy Drug rules", () => {
  it("Generic should decrease of 1 in benefit & expire in 2 days", () => {
    expect(
      new Pharmacy([new Drug("Generic", 3, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Generic", 2, 1)]);
  });
  it("Generic should decrease of 2 in benefit & expire since 1 day", () => {
    expect(
      new Pharmacy([new Drug("Generic", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Generic", -1, 0)]);
  });
  it("Magic Pill should not decrease in benefit & not expire", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 30, 23)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 30, 23)]);
  });
  it("Herbal Thea should increase of 1 in benefit & expire in 1 day", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 1)]);
  });

  it("Herbal Thea should increase of 2 in benefit & expire since 1 day", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 2)]);
  });

  it("Fervex should increase of 2 in benefit & expire in 9 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 2)]);
  });

  it("Fervex should increase of 3 in benefit & expire in 4 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 3)]);
  });

  it("Fervex should drop to 0 in benefit & expire since 1 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Pharmacy new feature : Dafalgan", () => {
  it("Generic should decrease of 2 in benefit & expire in 2 days", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 0)]);
  });
  it("Generic should decrease of 4 in benefit & expire since 1 day", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
