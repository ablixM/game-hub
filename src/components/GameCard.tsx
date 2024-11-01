import {Box, Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import {Link, useNavigate} from "react-router-dom";
import Game from "../entities/game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate("/games"); // Redirects to the details page
    };
  return (
    <Card >
      <Box overflow={"hidden"}>
          <Image
              transition="all 0.3s ease-in-out"

              _hover={{
                  boxShadow: "lg",
                  transform: "scale(1.05)",
              }}
              src={getCroppedImageUrl(game.background_image)}
          />
      </Box>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>
              {game.name}
          </Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
