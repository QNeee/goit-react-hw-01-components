import { Section, Title, StatisticList, StatisticListItem, Label, Percentage } from './Statistic.styled';
import PropTypes from 'prop-types';
export const Statistic = ({ title, stats }) => {
  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return <Section>
    {title && <Title>{title}</Title>}
    <StatisticList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticListItem
          key={id}
          style={{ backgroundColor: randomHexColor() }}
        >
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatisticListItem>
      ))}
    </StatisticList>
  </Section>
}
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};