import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";
import GameModal from "./GameModal";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const gameCardClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Card
        overflow="hidden"
        onClick={gameCardClick}
        cursor="pointer"
        _hover={{
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack
            justifyContent="space-between"
            marginBottom={3}
            marginRight={1}
          >
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <HStack
            justifyContent="space-between"
            marginBottom={3}
            marginRight={1}
          >
            <Heading fontSize="xl">{game.name}</Heading>
            <Emoji rating={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
      {isOpen && (
        <GameModal
          game={game}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default GameCard;
