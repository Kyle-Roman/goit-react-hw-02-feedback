import React from "react";
import s from './Feedback.module.css';

export default function Stats({onGood, onNeutral, onBad}) {
    return <div>
      <ul className={s.stats}>
        <li className={s.listItem}>
          <span className={s.label}>Good {onGood}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.label}>Neutral {onNeutral}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.label}>Bad {onBad}</span>
        </li>
        {/* <li className={s.listItem}>
          <span className={s.label}>Total {this.state.bad}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.label}>Positive feedback {this.state.bad}</span>
        </li> */}
      </ul>
    </div>
}