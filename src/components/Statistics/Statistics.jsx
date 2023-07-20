import PropTypes, { func } from 'prop-types';
import { Titles } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Titles>Good: {good}</Titles>
      <Titles>Neutral: {neutral}</Titles>
      <Titles>Bad: {bad}</Titles>
      <Titles>Total: {total}</Titles>
      <Titles>Positive feddback: {positivePercentage}%</Titles>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
