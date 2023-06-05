import CalcButtons from './CalcButtons';

export default function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">2 * 4</div>
        <div className="current-operand">8</div>
      </div>
      <CalcButtons />
    </div>
  );
}
