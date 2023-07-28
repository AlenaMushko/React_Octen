import {Link} from "react-router-dom";
import {Box, Button, Container, Image, Text, useTheme} from '@chakra-ui/react'
import {RxExit} from 'react-icons/rx';

import {AppRoutes} from "../../routing/appRoutes";
import errorPage from '../../img/error.webp'

export const Error = () => {
    const theme = useTheme();

    return (<Container>
            <Text as='b' fontSize='30px' color={theme.colors.border}>Error, something went wrong</Text>

            <Link to={AppRoutes.HOME} style={{textDecoration: 'none'}}>
                <Button colorScheme={theme.colors.border} variant="outline"
                        margin='30px 0'
                        _hover={{
                            backgroundColor: 'rgba(230, 48, 77, 0.87)',
                            color: 'theme.colors.secondary'
                        }}>
                    <Box marginRight="12px"><RxExit/></Box> Go to home page
                </Button>
            </Link>

            <Image src={errorPage}
                   alt="Error page"
                   borderRadius={"md"}
            />
        </Container>

    )
}

