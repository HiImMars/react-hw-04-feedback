import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} className={css.item}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            className={css.btn}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
