import { nanoid } from 'nanoid';
import { FeedbackOptionsBTN } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <FeedbackOptionsBTN key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackOptionsBTN>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
