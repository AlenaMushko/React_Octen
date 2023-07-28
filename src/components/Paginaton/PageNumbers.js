import { Button, Flex } from "@chakra-ui/react";

export const PageNumbers = ({ currentPage, totalPages, onChangePage }) => {
    const pagesToShow = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage - startPage < pagesToShow - 1) {
        startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    const showEllipsisStart = startPage > 1;
    const showEllipsisEnd = endPage < totalPages;

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <Flex justifyContent="center" gap="2vw">
            {showEllipsisStart && (
                <Button
                    bg={currentPage === 1 ? "blue" : undefined}
                    color={currentPage === 1 ? "white" : undefined}
                    _hover={{ bg: "rgb(240, 212, 58)" }}
                    onClick={() => onChangePage(1)}
                >
                    1
                </Button>
            )}
            {showEllipsisStart && (
                <Button bg="transparent" disabled>
                    ...
                </Button>
            )}
            {pageNumbers.map((pageNumber) => (
                <Button
                    key={pageNumber}
                    bg={pageNumber === currentPage ? "blue" : undefined}
                    color={pageNumber === currentPage ? "white" : undefined}
                    _hover={{ bg: "rgb(240, 212, 58)" }}
                    onClick={() => onChangePage(pageNumber)}
                >
                    {pageNumber}
                </Button>
            ))}
            {showEllipsisEnd && (
                <Button bg="transparent" disabled>
                    ...
                </Button>
            )}
            {showEllipsisEnd && (
                <Button
                    bg={currentPage === totalPages ? "blue" : undefined}
                    color={currentPage === totalPages ? "white" : undefined}
                    _hover={{ bg: "rgb(240, 212, 58)" }}
                    onClick={() => onChangePage(totalPages)}
                >
                    {totalPages}
                </Button>
            )}
        </Flex>
    );
};
