import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import { Button } from "./Button";

describe("App", () => {
  it("renders the App component", () => {
    render(<Button label="" />);

    screen.debug();
  });
});
