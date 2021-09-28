import React, {Component} from 'react';
import Stats from './Stats'
import s from './Feedback.module.css';
import ButtonSet from './ButtonSet';


class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = (event) => {
        
        const clickedBtn = event.target.textContent;


        this.setState(prevState => ({
            clickedBtn: prevState.clickedBtn + 1,            
        }));
    };

    // countTotalFeedback = () => {

    // }

    render() {
        return (
    <div className={s.feedback}>
      <h2 className={s.title}>Please leave your feedback</h2>

      <ButtonSet 
        onClick={this.addFeedback} 
      />
                
      <h3 className={s.title}>Statistics</h3>
     
      <Stats 
        onGood={this.state.good} 
        onNeutral={this.state.neutral} 
        onBad={this.state.bad} 
      />

    </div>
  );
    }
}

export default Feedback;

