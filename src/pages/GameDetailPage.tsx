import {useParams} from "react-router-dom";
import {Box, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data: game , isLoading, error} = useGameDetail(slug!)
    if (isLoading) return <Spinner/>

    if(error || !game) throw error;

    return <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            <Box>
                <Heading>
                    {  game.name}
                </Heading>
                <ExpandableText children={game.description_raw}/>
                <GameAttributes game={game}/>
            </Box>
        <Box>
            <GameTrailers gameId={game.id}/>
            <GameScreenShots gameId={game.id}/>
        </Box>
    </SimpleGrid>

};

export default GameDetailPage
