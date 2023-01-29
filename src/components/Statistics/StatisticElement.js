import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const StatisticElement = ({ stat }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  );
}

StatisticElement.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
};