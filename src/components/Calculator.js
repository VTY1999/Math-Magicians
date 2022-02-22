import react from 'react';

import './Calculator.css';

class Calculator extends react.Component {
  constructor() {
    super();
    this.state = {

      Calc: ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+',
      ],
    };
  }

  render() {
    return (
      <div className="calc-container">
        <div className="screen">0</div>
        <div className="num">
          {this.state.Calc.map((item) => (
            <div className="btn" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="btn">0</div>
          <div className="btn">.</div>
          <div className="btn-equals">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
