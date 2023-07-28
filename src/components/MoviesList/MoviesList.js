import {MoviesListCard} from "./MoviesListCard";
import {Box, Flex, SimpleGrid} from "@chakra-ui/react";

export const MoviesList = ({data, pageType, backLinkHref}) => {

    return (
        <Box py={10}>
            <Flex justifyContent="center" alignItems="center">
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing="8vw">
                    {data?.map((item) => (
                        <MoviesListCard key={item.id} item={item} pageType={pageType} backLinkHref={backLinkHref}/>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

