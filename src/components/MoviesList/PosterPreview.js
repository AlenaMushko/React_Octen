import {StarsRating} from "./StarsRating";
import {Box, Image} from "@chakra-ui/react";

export const PosterPreview = ({stars, posterPath, adult, title}) => {
    const cardSRC = `https://image.tmdb.org/t/p/w500${posterPath}`;
    const notPoster = 'https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
    return (
        <Box>
            {posterPath
                ? <Image
                    src={cardSRC}
                    alt={title}
                    w="100%"
                    borderTopLeftRadius="lg"
                    borderTopRightRadius="lg"
                />
                : <Image
                    src={notPoster}
                    alt={title || 'Film poster'}
                    w="100%"
                    borderTopLeftRadius="lg"
                    borderTopRightRadius="lg"
                />}
            {!adult && <Box
                position="absolute"
                top="3%"
                left="90%"
                transform="translate(-50%, -50%)"
                backgroundColor="rgb(240, 212, 58)"
                borderRadius="50%"
                padding="5px"
            >
                <span style={{color: "rgba(230, 48, 77)", fontSize: "12px"}}>18+</span>
            </Box>}
            {stars && <Box
                position="absolute"
                top="3%"
                left="23%"
                transform="translate(-50%, -50%)"
            >
                <StarsRating stars={stars}/>
            </Box>}

        </Box>
    );
};

