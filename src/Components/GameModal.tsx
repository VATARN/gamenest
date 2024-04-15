import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  List,
  ListItem,
  Divider,
  Flex,
  Text,
  Link,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCardRatings from "./GameCardRatings";
import { BiLinkExternal } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

interface GameModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  const genreNames = game.genres.map((genre) => genre.name).join(", ");

  const storeLinks = game.stores.map((store, index) => {
    const storeContent = store.store.domain ? (
      <Link href={`https://${store.store.domain}`} isExternal>
        <Flex justifyContent="space-between">
          <Text>{store.store.name}</Text>
          <BiLinkExternal />
        </Flex>
      </Link>
    ) : (
      <Text>{store.store.name}</Text>
    );

    return <ListItem key={index}>{storeContent}</ListItem>;
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="space-between">
            <Heading>{game.name}</Heading>
            <Icon as={CgClose} boxSize="6" cursor="pointer" onClick={onClose} />
          </Flex>
        </ModalHeader>
        <ModalBody>
          <List>
            {game.parent_platforms?.length > 0 && (
              <ListItem key="Platforms" paddingY="2">
                <Flex>
                  <Text marginRight={2}>Platforms:</Text>
                  <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                  />
                </Flex>
              </ListItem>
            )}
            <Divider />
            {genreNames && (
              <ListItem key="genres" paddingY="2">
                <Flex>
                  <Text marginRight={2}>Genres:</Text>
                  <Text fontWeight="bold">{genreNames}</Text>
                </Flex>
              </ListItem>
            )}
            <Divider />
            {game.released && (
              <ListItem key="released" paddingY="2">
                <Flex>
                  <Text marginRight={2}>Released:</Text>
                  <Text fontWeight="bold">{game.released}</Text>
                </Flex>
              </ListItem>
            )}
            <Divider />
            {game.ratings.length > 0 && (
              <ListItem key="ratings" paddingY="2">
                <GameCardRatings ratings={game.ratings} />
              </ListItem>
            )}
            <Divider />
            {game.stores.length > 0 && (
              <ListItem key="stores" paddingY="2">
                <Flex>
                  <Text marginRight={2}>Stores:</Text>
                  <List spacing={2}>{storeLinks}</List>
                </Flex>
              </ListItem>
            )}
            <Divider />
            {game.tags.length > 0 && (
              <ListItem key="tags" paddingY="2">
                <Flex>
                  <Text marginRight={2}>Tags:</Text>
                  <div>
                    {game.tags.map((tag) => (
                      <Tag key={tag.name} margin={1}>
                        {tag.name}
                      </Tag>
                    ))}
                  </div>
                </Flex>
              </ListItem>
            )}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameModal;
