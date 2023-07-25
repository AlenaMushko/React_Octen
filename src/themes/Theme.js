import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
    colors: {
        border: "rgb(0, 0, 0, 0.64)",
        secondary: "rgb(253, 253, 253)",
        error:"rgba(230, 48, 77, 0.87)",
        headerBG: "rgb(240, 212, 58)",
        headerBtn: "rgb(34, 178, 218)",
        basicText: "#22559c",


    },
});

const darkTheme = extendTheme({
    colors: {
        border: "rgba(48, 73, 230, 0.05)",
        secondary: "#F0F0F0",
        error:"rgba(230, 48, 77, 0.87)",
        headerBG: "#3b4a6b",
        headerBtn: "#22b2da",

    },
});

export { lightTheme, darkTheme };