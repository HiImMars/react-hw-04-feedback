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

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickGood = () =>
//     this.setState(prevState => ({ good: prevState.good + 1 }));

//   handleClickNeutral = () =>
//     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

//   handleClickBad = () =>
//     this.setState(prevState => ({ bad: prevState.bad + 1 }));

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + bad + neutral;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className="">
//         <h1 className="">Please leave feedback</h1>
//         <ul className="">
//           <li className="">
//             <button
//               className=""
//               type="button"
//               name="good"
//               onClick={this.handleClickGood}
//             >
//               Good
//             </button>
//           </li>
//           <li className="">
//             <button
//               className=""
//               type="button"
//               name="neutral"
//               onClick={this.handleClickNeutral}
//             >
//               Neutral
//             </button>
//           </li>
//           <li className="">
//             <button
//               className=""
//               type="button"
//               name="bad"
//               onClick={this.handleClickBad}
//             >
//               Bad
//             </button>
//           </li>
//         </ul>
//         <h2 className="">Statistics</h2>
//         <ul className="">
//           <li className="">
//             <p className="">Good:{good}</p>
//           </li>
//           <li className="">
//             <p className="">Neutral:{neutral}</p>
//           </li>
//           <li className="">
//             <p className="">Bad:{bad}</p>
//           </li>
//           <li className="">
//             <p className="">Total:{this.countTotalFeedback()}</p>
//           </li>
//           <li className="">
//             <p className="">
//               Positive feedback:{this.countPositiveFeedbackPercentage() || 0}%
//             </p>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
