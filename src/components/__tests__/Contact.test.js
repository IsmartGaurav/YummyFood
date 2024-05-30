import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";

describe("should all contact us testcase", () => {
  it("Should check contact us render", () => {
    render(<Contact />);
    const checkContact = screen.getByText("Contact Us");
    expect(checkContact).toBeInTheDocument();
  });

  it("Should check component's length", () => {
    render(<Contact />);

    const checkInput = screen.getAllByRole("textbox");
    expect(checkInput).toHaveLength(2);
  });

  it("Should check component have textbox or not", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    expect(input[0]).toBeInTheDocument();
  });

  it("Should check submit button", () => {
    render(<Contact />);
    const submitBtm = screen.getByRole("button");
    expect(submitBtm).toBeInTheDocument();
  });
});
