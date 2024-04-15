import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  List,
  ListItem,
  Code,
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

  const storeLinks = game.stores.map((store, index) => (
    <ListItem key={index}>
      <Link href={`https://${store.store.domain}`} isExternal>
        <Flex justifyContent="space-between">
          <Text marginRight={2}> {store.store.name} </Text> <BiLinkExternal />{" "}
        </Flex>
      </Link>
    </ListItem>
  ));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="space-between">
            <Heading>{game.name}</Heading>
            <Icon boxSize="40px" onClick={onClose}>
              <CgClose />
            </Icon>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <List>
            <ListItem key="Platforms" paddingY="7px">
              <Flex>
                <Text marginRight={2}>Platforms:</Text>
                <PlatformIconList
                  platforms={game.parent_platforms?.map((p) => p.platform)}
                />
              </Flex>
            </ListItem>
            <Divider />
            <ListItem key="genres" paddingY="7px">
              {genreNames && (
                <div>
                  Genres: <strong>{genreNames}</strong>
                </div>
              )}
            </ListItem>
            <Divider />
            <ListItem key="released" paddingY="7px">
              {game.released && (
                <div>
                  Released: <strong>{game.released}</strong>
                </div>
              )}
            </ListItem>
            <Divider />
            <ListItem key="ratings" paddingY="7px">
              <GameCardRatings ratings={game.ratings} />
            </ListItem>
            <Divider />
            <ListItem key="stores" paddingY="7px">
              <Flex>
                <Text marginRight={2}>Stores:</Text>
                <List spacing={2}>{storeLinks}</List>
              </Flex>
            </ListItem>
            <Divider />
            <ListItem key="tags" paddingY="7px">
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
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameModal;
