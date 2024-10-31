import {Game} from "../entities/game";
import {SimpleGrid, Text} from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props{
    game: Game
}

const GameAttributes = ({game}:Props) => {
    return (
        <>
            <SimpleGrid columns={2} as={'dl'}>
                <DefinitionItem term={'Platforms'}>
                    {
                        game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)
                    }
                </DefinitionItem>
                <DefinitionItem term={'MetaScore'}>
                    <CriticScore score={game.metacritic}/>
                </DefinitionItem>
                <DefinitionItem term={'Genres'}>
                    {
                        game.genres?.map(genres => <Text key={genres.id}>{genres.name}</Text>)
                    }
                </DefinitionItem>
                <DefinitionItem term={'Publishers'}>
                    {
                        game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)
                    }
                </DefinitionItem>
            </SimpleGrid>
        </>
    );
};

export default GameAttributes