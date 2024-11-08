import useTrailers from "../hooks/useTrailers";
import {Spinner} from "@chakra-ui/react";
interface Props {
    gameId: number
}

export const GameTrailers = ({gameId}:Props) => {
    const {data, error, isLoading} = useTrailers(gameId)
    if (error) throw error
    if (isLoading) return <Spinner/>

    const first = data?.results[0];
    return (first) ? <video
        controls
        poster={first?.preview}
        src={first?.data[480]}
        /> :
    null
};

export default GameTrailers
