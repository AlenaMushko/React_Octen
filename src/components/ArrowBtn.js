import {Button} from "@chakra-ui/react";

export const ArrowBtn = ({arrow, onClick, isActive, disabled, styles}) => {

    const buttonStyles = {
        bg: isActive ? "#22559c" : '#E0E0E0',
        color: isActive ? "rgb(253, 253, 253)" : "rgb(0, 0, 0, 0.64)",
        transition: "background-color 300ms",
    };

    return (
        <Button
            bg="#22559c"
            color="rgb(253, 253, 253)"
            _hover={{bg: "rgb(240, 212, 58)"}}
            onClick={onClick}
            isDisabled={disabled}
            {...styles}
            {...buttonStyles}
        >
            {arrow}
        </Button>
    );
};