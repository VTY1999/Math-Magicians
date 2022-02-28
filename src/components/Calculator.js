import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const btnClick = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(state, e.target.name);

    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const { total, next } = state;

  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];
  return (
    <div className="calculate">
      <h3 className="start">Let&apos;s do some math!</h3>
      <div className="calc-container">
        {next ? (
          <div className="screen">{next}</div>
        ) : (
          <div className="screen">{total}</div>
        )}
        <div className="num">
          {btns.map((btnName) => (
            <button
              onClick={btnClick}
              name={btnName}
              type="button"
              className={`btn ${btnName === '0' ? 'btn-zero' : ''} ${
                btnName === '=' ? 'btn-equals' : ''
              }`}
              key={btnName}
            >
              {btnName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
