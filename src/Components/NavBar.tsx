import { HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <Heading size="sm">Game Nest</Heading>
      </HStack>
      <HStack padding="10px">
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
