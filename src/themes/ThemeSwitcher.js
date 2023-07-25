import {useColorMode, IconButton} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';

export const ThemeSwitcher = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon boxSize={30}/> : <SunIcon boxSize={25}/>}
            onClick={toggleColorMode}
            colorScheme="#22559c"
            _hover={{
                transform: 'scale(1.2)',
                transition: 'transform 0.2s',
            }}
        />
    );
};
