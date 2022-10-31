import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatItem from './StaticsItem';

function Statistics({ title, stats }) {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={css.item}>
              <StatItem label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};