import {useParams} from "react-router-dom";
import {Box, Heading, Spinner, Text} from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";

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
           
    </>

};

export default GameDetailPage
