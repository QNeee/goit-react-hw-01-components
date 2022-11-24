import PropTypes from 'prop-types';
export const Statistic = ({ title, stats }) => {
  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          className="item"
          key={id}
          style={{ backgroundColor: randomHexColor() }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
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