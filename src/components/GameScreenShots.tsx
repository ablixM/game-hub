import useScreenshots from "../hooks/useScreenshots";
import {Image, SimpleGrid, Spinner} from "@chakra-ui/react";

interface Props {
    gameId: number
}

const GameScreenShots = ({gameId}:Props) => {
    const {data, error, isLoading} = useScreenshots(gameId)
    if (error) throw error

    if (isLoading) return <Spinner/>
    return (
        <SimpleGrid columns={{base: 1, md: 2, xl:3}} >
            {
                data?.results?.map(file => <Image padding={5} key={file.id} src={file.image}/>)
            }
        </SimpleGrid>
    );
};

export default GameScreenShots
