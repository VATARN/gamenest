import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import no_entry from "../assets/no_entry.webp";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  ratings: Array<{
    title: string;
    count: number;
    percent: number;
  }>;
}

const GameCardRatings = ({ ratings }: Props) => {
  const ratingHeading = (ratingTitle: string) => {
    let icon = "";
    let title = "";
    switch (ratingTitle) {
      case "exceptional":
        title = "Exceptional";
        icon = bullsEye;
        break;
      case "recommended":
        title = "Recommended";
        icon = thumbsUp;
        break;
      case "meh":
        title = "Meh";
        icon = meh;
        break;
      case "skip":
        title = "Skip";
        icon = no_entry;
        break;
      default:
        title = "Unknown";
        icon = "";
    }
    return {
      name: title,
      icon: icon,
    };
  };

  const ratingPercentColor = (percent: number) => {
    if (percent > 50) {
      return "green";
    } else if (percent < 50 && percent > 25) {
      return "yellow";
    } else if (percent < 25 && percent > 0) {
      return "red";
    }
  };

  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Rating</Th>
              <Th></Th>
              <Th isNumeric>Count</Th>
              <Th>Percent</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ratings.map((rating) => {
              const { name, icon } = ratingHeading(rating.title);
              return (
                <Tr key={rating.title}>
                  <Td>{name}</Td>
                  <Td>
                    <Image boxSize="20px" src={icon} />
                  </Td>
                  <Td isNumeric>{rating.count}</Td>
                  <Td>
                    <CircularProgress
                      value={rating.percent}
                      color={ratingPercentColor(rating.percent)}
                    >
                      <CircularProgressLabel>
                        {rating.percent}
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GameCardRatings;
