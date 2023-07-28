import {useContext} from 'react';
import {AbsoluteCenter, Box, Spinner} from '@chakra-ui/react';

import {LoaderContext} from '../routing/LoaderProvider';

const Loader = () => {
    const {isLoading} = useContext(LoaderContext);

    return (
        <>
            {isLoading && (
                <Box position='relative' h='100px'>
                    <AbsoluteCenter axis='both'>
                        <Spinner thickness='4px'
                                 speed='0.65s'
                                 emptyColor='gray.200'
                                 color='blue.500'
                                 size='xl'/>
                    </AbsoluteCenter>
                </Box>
            )}
        </>
    );
};

export {Loader};
