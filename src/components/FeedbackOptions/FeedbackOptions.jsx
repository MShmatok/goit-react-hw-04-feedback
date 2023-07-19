import { nanoid } from 'nanoid';
import { FeedbackOptionsBTN } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    const id = nanoid();
    return (
      <FeedbackOptionsBTN name={option} key={id} onClick={onLeaveFeedback}>
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
