import {useState} from 'react';
import {PiArrowFatLineLeftThin, PiArrowFatLineRightThin} from 'react-icons/pi';
import { Flex} from "@chakra-ui/react";
import {ArrowBtn} from "../ArrowBtn";
import {PageNumbers} from "./PageNumbers";


export const Pagination = ({page, moviesLength, totalPages}) => {
    const [currentPage, setCurrentPage] = useState(page);

    const handleNextPage = () => {
        if (moviesLength === 20) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(currentPage);

    return (
        <Flex justifyContent="center" gap='4vw' pb={10}>
            <ArrowBtn arrow={<PiArrowFatLineLeftThin style={{fontSize: 25}}/>}
                      onClick={handlePrevPage}
                      disablet={currentPage<=1}/>

            <PageNumbers currentPage={currentPage} totalPages={totalPages} onChangePage={handleChangePage}/>

            <ArrowBtn arrow={<PiArrowFatLineRightThin style={{fontSize: 25}}/>}
                      onClick={handleNextPage}
                      disablet={moviesLength<20}/>
        </Flex>
    );
};

