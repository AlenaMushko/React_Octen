import {useState, useEffect} from 'react';
import {PiArrowFatLinesUp} from 'react-icons/pi';

import styles from './ScrollToTopButton.module.css';

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

    return (
        <button
            className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            <PiArrowFatLinesUp style={{fontSize: 30}}/>
        </button>
    );
};



