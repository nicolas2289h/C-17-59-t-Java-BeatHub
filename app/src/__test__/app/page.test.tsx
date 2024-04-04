import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

test("render home page", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", {
      level: 1,
      name: "BeatHub",
    })
  ).toBeDefined();
});

test("render home page to same of the snapshot", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
