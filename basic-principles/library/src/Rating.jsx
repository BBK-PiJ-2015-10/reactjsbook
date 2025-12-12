import PropTypes from "prop-types";
import {StarBorder, Star} from '@mui/icons-material';
import './Rating.css';

function Rating({item, onRate}) {
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        ratings.push(
            <button onClick={() => onRate(item.id, i)}
                    className="ratingButton"
                    key={i}>
                {item.rating < i ? <StarBorder/> : <Star/>}
            </button>
        );
    }
    return ratings;
}

Rating.propTypes = {
    item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }
    ).isRequired,
    onRateChange: PropTypes.func.isRequired,
};

export default Rating;