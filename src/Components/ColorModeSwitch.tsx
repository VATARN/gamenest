import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack paddingLeft={2}>
      <FiSun />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <BsMoon />
    </HStack>
  );
};

export default ColorModeSwitch;
