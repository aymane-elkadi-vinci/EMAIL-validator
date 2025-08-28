import { isValidEmail } from "../src/emailValidator.js";

describe("Email validator", () => {
  it("accepts a simple valid address", () => {
    // Accepts a valid email with local part, '@', and domain
    expect(isValidEmail("alice@example.com")).toBeTrue();
  });

  it("rejects an address without @", () => {
    // Rejects if '@' is missing
    expect(isValidEmail("alice.example.com")).toBeFalse();
  });

  it("rejects an address with multiple @", () => {
    // Rejects if there are multiple '@' characters
    // (must contain exactly one '@')
    expect(isValidEmail("a@b@c.com")).toBeFalse();
  });

  it("rejects an address with spaces", () => {
    // Rejects if the email contains spaces
    expect(isValidEmail("alice @example.com")).toBeFalse();
    expect(isValidEmail("alice@ example.com")).toBeFalse();
    expect(isValidEmail("ali ce@example.com")).toBeFalse();
  });

  it("rejects if there is nothing before or after @", () => {
    // Rejects if the local part or domain part is missing
    expect(isValidEmail("@example.com")).toBeFalse();   // nothing before '@'
    expect(isValidEmail("alice@")).toBeFalse();         // nothing after '@'
  });

  it("rejects if the domain has no dot", () => {
    // Rejects if the domain does not contain any '.'
    expect(isValidEmail("alice@example")).toBeFalse();
  });

  it("rejects if the domain ends with a dot", () => {
    // Rejects if the domain ends with '.'
    expect(isValidEmail("alice@example.")).toBeFalse();
  });

  it("accepts a domain with at least one non-final dot", () => {
    // Accepts if the domain contains at least one '.' 
    // that is not the last character
    expect(isValidEmail("bob@mail.co")).toBeTrue();
    expect(isValidEmail("carol@sub.domain.org")).toBeTrue();
  });
});
