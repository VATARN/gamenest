import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScoreBadge = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" paddingX={2} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScoreBadge;
