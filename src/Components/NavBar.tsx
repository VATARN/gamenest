import {
  HStack,
  Heading,
  Image,
  IconButton,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { GiHamburgerMenu } from "react-icons/gi";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";
import { useEffect } from "react";

interface Props {
  onSearch: (searchText: string) => void;
  isMobile: boolean;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const NavBar = ({
  onSearch,
  isMobile,
  selectedGenre,
  onSelectGenre,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (selectedGenre) {
      onToggle();
    }
  }, [selectedGenre]);

  const heading = (
    <a href="/">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Heading size="sm">Game Nest</Heading>
      </HStack>
    </a>
  );

  const drawer = (
    <Drawer isOpen={isOpen} placement="left" onClose={onToggle}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
          <DrawerCloseButton />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Stack spacing={4} padding="10px">
      {isMobile ? (
        <>
          <HStack justifyContent="space-between">
            {heading}
            <ColorModeSwitch />
          </HStack>
          <HStack>
            <IconButton
              icon={<GiHamburgerMenu />}
              onClick={onToggle}
              aria-label="Open Menu"
            />
            {isOpen && drawer}
            <SearchInput onSearch={onSearch} />
          </HStack>
        </>
      ) : (
        <HStack justifyContent="space-between">
          {heading}
          <HStack>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
          </HStack>
        </HStack>
      )}
    </Stack>
  );
};

export default NavBar;
