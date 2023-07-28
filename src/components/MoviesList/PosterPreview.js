import {Box, Image} from "@chakra-ui/react";

import {StarsRating} from "./StarsRating";

export const PosterPreview = ({stars, posterPath, adult, title, secondTitle}) => {
    const cardSRC = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const notPoster = 'https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
    return (
        <Box>
            {posterPath
                ? <Image
                    src={cardSRC}
                    alt={title || secondTitle || ''}
                    w="100%"
                    borderTopLeftRadius="lg"
                    borderTopRightRadius="lg"
                />
                : <Image
                    src={notPoster}
                    alt={title || secondTitle || 'Film poster'}
                    w="100%"
                    borderTopLeftRadius="lg"
                    borderTopRightRadius="lg"
                />}
            {adult && <Box
                position="absolute"
                top="5%"
                left="88%"
                transform="translate(-50%, -50%)"
                backgroundColor="rgb(240, 212, 58)"
                borderRadius="50%"
                padding="5px"
            >
                <span style={{color: "rgba(230, 48, 77)", fontSize: "12px"}}>18+</span>
            </Box>}
            {stars && <Box
                position="absolute"
                top="4%"
                left="25%"
                transform="translate(-50%, -50%)"
            >
                <StarsRating stars={stars}/>
            </Box>}

        </Box>
    );
};

