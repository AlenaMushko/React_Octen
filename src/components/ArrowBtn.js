import {Button} from "@chakra-ui/react";

export const ArrowBtn = ({ arrow, onClick, isActive,  styles}) => {

    const buttonStyles = {
        bg: isActive ? "#22559c" : undefined,
        color: isActive ? "rgb(253, 253, 253)" : undefined,
        transition: "background-color 300ms",
    };

    return (
        <Button
            bg="#22559c"
            color="rgb(253, 253, 253)"
            _hover={{ bg: "rgb(240, 212, 58)" }}
            onClick={onClick}
            {...styles}
            {...buttonStyles}
        >
            {arrow}
        </Button>
    );
};
