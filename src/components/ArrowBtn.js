import {Button} from "@chakra-ui/react";

export const ArrowBtn = ({arrow, onClick, styles, disablet}) => {


    return (
        <Button
            bg='#22559c'
            color='rgb(253, 253, 253)'
            isDisabled={disablet}
            _hover={{bg: 'rgb(240, 212, 58)'}}
            onClick={onClick}
            {...styles}
        >
            {arrow}
        </Button>
    );
};