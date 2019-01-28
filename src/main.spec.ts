import { splitStringEvery } from "./main";

test("can split every 8 ", () => {
  expect(splitStringEvery("c310d92e1efc6521beeebc80336fc98b", 8, " ")).toBe(
    "c310d92e 1efc6521 beeebc80 336fc98b"
  );
});
