import Link from "next/link";
import { DateTimeFormatOptions } from "../../interfaces";
import * as SC from "./GameList";

interface GameList {
  games: any[];
}

const GameList: React.FC<GameList> = ({ games }) => {
  const formatDate = (dateString) => {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <SC.Wrapper>
      {games.map((game) => {
        const releaseDate = formatDate(game.released);
        return (
          <Link key={game.id} href={`/games/${game.slug}`} passHref>
            <SC.GameCard
              role="button"
              tabIndex="0"
              imageUrl={game.background_image}
            >
              <SC.GameShadow />
              <SC.GameInfo>
                <SC.GameTitle>{game.name}</SC.GameTitle>
                <SC.GameDate>{releaseDate}</SC.GameDate>
              </SC.GameInfo>
              <SC.GameRating>{game.rating}</SC.GameRating>
            </SC.GameCard>
          </Link>
        );
      })}
    </SC.Wrapper>
  );
};

export default GameList;
