import { Titles } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Titles>Good: {good}</Titles>
      <Titles>Neutral: {neutral}</Titles>
      <Titles>Bad: {bad}</Titles>
      <Titles>Total: {total()}</Titles>
      <Titles>Positive feddback: {positivePercentage()}%</Titles>
    </div>
  );
};

export default Statistics;
