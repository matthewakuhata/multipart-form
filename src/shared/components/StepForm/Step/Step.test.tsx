import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Step";

describe("GIVEN a Button with an onClick event", () => {
  describe("WHEN clicking the button", () => {
    test("THEN the function is called", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      const title = "Click me";

      const button = screen.getByRole("button", { name: title });
      await user.click(button);

      expect(button).toBeInTheDocument();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
