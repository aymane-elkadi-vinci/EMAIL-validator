import { isValidEmail } from "../src/emailValidator.js";

describe("Email validator", () => {
  it("accepte une adresse valide simple", () => {
    expect(isValidEmail("alice@example.com")).toBeTrue();
  });

  it("refuse si pas d'@", () => {
    expect(isValidEmail("alice.example.com")).toBeFalse();
  });

  it("refuse s'il y a plusieurs @", () => {
    // Par prudence, on exige exactement un seul @
    expect(isValidEmail("a@b@c.com")).toBeFalse();
  });

  it("refuse s'il y a un espace", () => {
    expect(isValidEmail("alice @example.com")).toBeFalse();
    expect(isValidEmail("alice@ example.com")).toBeFalse();
    expect(isValidEmail("ali ce@example.com")).toBeFalse();
  });

  it("refuse si rien avant ou après @", () => {
    expect(isValidEmail("@example.com")).toBeFalse();
    expect(isValidEmail("alice@")).toBeFalse();     
  });

  it("refuse si le domaine n'a pas de point", () => {
    expect(isValidEmail("alice@example")).toBeFalse();
  });

  it("refuse si le domaine se termine par un point", () => {
    expect(isValidEmail("alice@example.")).toBeFalse();
  });

  it("accepte un domaine avec au moins un point (non final)", () => {
    expect(isValidEmail("bob@mail.co")).toBeTrue();
    expect(isValidEmail("carol@sub.domain.org")).toBeTrue();
  });
});
