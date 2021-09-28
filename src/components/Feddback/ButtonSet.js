import React from "react";
import s from './Feedback.module.css';

export default function ButtonSet({onClick}) {
    return <div>
        <button type="button" className={s.button} onClick={onClick} id={'btn1'}>good</button>
        <button type="button" className={s.button} onClick={onClick} id={'btn2'}>neutral</button>
        <button type="button" className={s.button} onClick={onClick} id={'btn3'}>bad</button>
    </div>
}