import { testDataWithTwoLevels } from "./data";
import { recursive } from "./resourceDisplay";

describe("recursive", () => {
  it("creates a category tree when using data structure with levels", () => {
    expect(recursive(testDataWithTwoLevels)).toEqual([
      "- Test1",
      "  - Test1Child",
      "- Test2",
      "  - Test2Child",
    ]);
  });
});
