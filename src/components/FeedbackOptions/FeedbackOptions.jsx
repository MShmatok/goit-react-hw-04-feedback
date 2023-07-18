import { nanoid } from 'nanoid';
import { FeedbackOptionsBTN } from './FeedbackOptions.styled';

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
