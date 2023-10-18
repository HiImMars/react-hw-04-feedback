import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.statlist}>
        <li className={css.statitem}>
          <p className={css.p}>Good: {good}</p>
        </li>
        <li className={css.statitem}>
          <p className={css.p}>Neutral: {neutral}</p>
        </li>
        <li className={css.statitem}>
          <p className={css.p}>Bad: {bad}</p>
        </li>
        <li className={css.statitem}>
          <p className={css.p}>Total: {total}</p>
        </li>
        <li className={css.statitem}>
          <p className={css.p}>Positive feedback: {positivePercentage || 0}%</p>
        </li>
      </ul>
    </>
  );
};
