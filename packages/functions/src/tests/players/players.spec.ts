import { getPlayerStatsFromRelic } from "../../../src/libs/players/players"

describe("getPlayerStatsFromRelic", () => {
    test("players", () => {
        const player = getPlayerStatsFromRelic("76561198124468103")
        expect(typeof player).toBe("object");
    });
});

describe("getPlayerStatsFromRelicNonExisting", () => {
    test("non existing player", () => {
        expect(typeof getPlayerStatsFromRelic("76561198338075565")).toBe("object");
        // expect(getPlayerStatsFromRelic.bind(getPlayerStatsFromRelic, "76561198338075565")).toThrow("UNREGISTERED_PROFILE_NAME");
    });
});
