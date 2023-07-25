import ReactStars from 'react-stars';

export const StarsRating = ({stars}) => {
    const rating = Math.round(stars / 2);

    return (
        <ReactStars
            count={5}
            value={rating}
            size={18}
            color2={'#ffd700'}
        />
    );
};
