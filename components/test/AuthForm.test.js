import { authFormSchema } from "./authForm";

describe("authFormSchema", () => {
  it("should validate the form schema for sign-up", () => {
    const type = "sign-up";
    const validForm = {
      firstName: "John",
      lastName: "Doe",
      address1: "123 Street",
      city: "City",
      state: "ST",
      postalCode: "12345",
      dateOfBirth: "01/01/2000",
      ssn: "123-45-6789",
      email: "john.doe@example.com",
      password: "password123",
    };

    const result = authFormSchema(type).safeParse(validForm);

    expect(result.success).toBe(true);
  });

  it("should validate the form schema for sign-in", () => {
    const type = "sign-in";
    const validForm = {
      email: "john.doe@example.com",
      password: "password123",
    };

    const result = authFormSchema(type).safeParse(validForm);

    expect(result.success).toBe(true);
  });

  it("should fail validation for an invalid form", () => {
    const type = "sign-up";
    const invalidForm = {
      firstName: "J",
      lastName: "D",
      address1: "123 Street",
      city: "City",
      state: "ST",
      postalCode: "12345",
      dateOfBirth: "01/01/2000",
      ssn: "123-45-6789",
      email: "john.doe@example.com",
      password: "password123",
    };

    const result = authFormSchema(type).safeParse(invalidForm);

    expect(result.success).toBe(false);
  });
});
