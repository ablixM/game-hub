import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops...</Heading>
                <Text>{isRouteErrorResponse(error) ? 'invalid page' : 'some error has occured'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage
