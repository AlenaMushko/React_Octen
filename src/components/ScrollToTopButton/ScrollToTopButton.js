import {useState, useEffect} from 'react';
import {PiArrowFatLinesUp} from 'react-icons/pi';

import {ArrowBtn} from "../ArrowBtn";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const buttonStyles = {
        position: 'fixed',
        bottom: '16vh',
        right: '3vw',
        borderRadius: '8px',
        padding: '10px',
        cursor: 'pointer',
        fontSize: '30px',
        display: isVisible ? 'block' : 'none',
        transition: 'background-color 300ms',
    };

    return (
        <ArrowBtn  arrow={<PiArrowFatLinesUp style={{fontSize: 30}}/>} styles={buttonStyles} onClick={scrollToTop}/>
    );
};



