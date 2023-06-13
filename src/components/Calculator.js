import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';

export default function Calculator() {
  const [calculatorDataObj, setCalculatorDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    setCalculatorDataObj(calculate(calculatorDataObj, buttonName));
  };

  const { total, next, operation } = calculatorDataObj;

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{next || operation}</div>
          <div className="current-operand">{total || next || '0'}</div>
        </div>
        <CalcButtons handleButtonClick={handleClick} />
      </div>
    </>
  );
}
