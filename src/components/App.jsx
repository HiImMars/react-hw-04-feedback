import { useReducer } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

function reducer(prevState, action) {
  if (action.type === 'good') {
    return {
      ...prevState,
      good: action.payload,
    };
  } else if (action.type === 'bad') {
    return {
      ...prevState,
      bad: action.payload,
    };
  } else {
    return {
      ...prevState,
      neutral: action.payload,
    };
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = key => {
    if (key === 'good') {
      dispatch({ type: 'good', payload: state.good + 1 });
    } else if (key === 'bad') {
      dispatch({ type: 'bad', payload: state.bad + 1 });
    } else {
      dispatch({ type: 'neutral', payload: state.neutral + 1 });
    }
  };

  const countTotalFeedback = () => {
    return state.good + state.bad + state.neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(state);
  const totalFeedback = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
