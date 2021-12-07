import { getCommanderRace, getIntelBulletinRace } from "../libs/coh2-api";

describe("getCommanderRace", () => {
  test("Returns correct race for commander ID", async () => {
    expect(getCommanderRace(7539)).toBe("wermacht");
  });

  test("Returns unknown race for unknown ID", async () => {
    expect(getCommanderRace(11111111)).toBe("unknown");
  });
});

describe("getIntelBulletinRace", () => {
  test("Returns correct race array for bulletin ID", async () => {
    expect(getIntelBulletinRace(5857)).toStrictEqual(["wermacht", "soviet"]);
  });

  test("Returns unknown race for unknown ID", async () => {
    expect(getIntelBulletinRace(11111111)).toStrictEqual([]);
  });
});

describe("getCommanderRace", () => {
  test("Returns correct race for commander ID", async () => {
    expect(getCommanderRace(347076)).toBe("wgerman");
  });

  test("Returns unknown race for unknown ID", async () => {
    expect(getCommanderRace(7777777777)).toBe("unknown");
  });
});

describe("getIntelBulletinRace", () => {
  test("Returns correct race array for bulletin ID", async () => {
    expect(getIntelBulletinRace(259252)).toStrictEqual(["usf", "wgerman"]);
  });

  test("Returns unknown race for unknown ID", async () => {
    expect(getIntelBulletinRace(2020202020202)).toStrictEqual([]);
  });
});