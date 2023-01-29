import PropTypes from 'prop-types';
import { StatisticElement } from '../Statistics/StatisticElement';
import css from '../Statistics/Statistics.module.css';

 export const  Statistics = ( {title, stats} ) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(stat => (
          <StatisticElement key={stat.id} stat={stat}></StatisticElement>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};