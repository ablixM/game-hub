import {useParams} from "react-router-dom";
import {Heading, Spinner} from "@chakra-ui/react";
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

    return <>
            <Heading>
                {  game.name}
            </Heading>
            <ExpandableText children={game.description_raw}/>
            <GameAttributes game={game}/>
        <GameTrailers gameId={game.id}/>
        <GameScreenShots gameId={game.id}/>
    </>

};

export default GameDetailPage
