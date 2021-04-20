import RawgService from "../rawg-service";

const rawgService = new RawgService();

describe("Check we get all games from our api", () => {
  test("Check if we have any games", async (done) => {
    expect.assertions(1);
    const games = await rawgService.getGameResults();
    expect(games.results.length > 0).toBeTruthy();
    done();
  });
});
