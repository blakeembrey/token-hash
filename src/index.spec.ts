import { tokenHash } from "./index";

describe("token hash", () => {
  it("should generate sha256 hash", () => {
    expect(tokenHash("RS256", "aabbcc")).toEqual("pbQy7gMHvn-iOqAEYfVO7g");
    expect(tokenHash("HS256", "aabbcc")).toEqual("pbQy7gMHvn-iOqAEYfVO7g");
    expect(tokenHash("EC256", "aabbcc")).toEqual("pbQy7gMHvn-iOqAEYfVO7g");
  });

  it("should generate sha384 hash", () => {
    expect(tokenHash("rs384", "aabbcc")).toEqual(
      "IAaOzeSziH5_9YefTOLfEGe9vIHc8k1h"
    );
    expect(tokenHash("hs384", "aabbcc")).toEqual(
      "IAaOzeSziH5_9YefTOLfEGe9vIHc8k1h"
    );
    expect(tokenHash("ec384", "aabbcc")).toEqual(
      "IAaOzeSziH5_9YefTOLfEGe9vIHc8k1h"
    );
  });

  it("should generate sha512 hash", () => {
    expect(tokenHash("RS512", "aabbcc")).toEqual(
      "2pxxBwwdKMDVLGBMhMgFSlr5R5ea0w4G6i2k4Dgjc8Y"
    );
    expect(tokenHash("HS512", "aabbcc")).toEqual(
      "2pxxBwwdKMDVLGBMhMgFSlr5R5ea0w4G6i2k4Dgjc8Y"
    );
    expect(tokenHash("EC512", "aabbcc")).toEqual(
      "2pxxBwwdKMDVLGBMhMgFSlr5R5ea0w4G6i2k4Dgjc8Y"
    );
  });
});
