import RawgService from "../rawg-service";

const rawgService = new RawgService();

const slug = "grand-theft-auto-v";

describe("Check we get a game from our api", () => {
  test("Check if api returns the same game as slug", async (done) => {
    expect.assertions(1);
    const game = await rawgService.getGame(slug);
    expect(game.slug === slug).toBeTruthy();
    done();
  });
});
