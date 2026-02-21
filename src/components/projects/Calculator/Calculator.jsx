import { useState, useEffect, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const BUTTONS = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '⌫', '='],
];

function calculate(a, b, op) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (isNaN(x) || isNaN(y)) return 'Error';
  switch (op) {
    case '+': return x + y;
    case '−': return x - y;
    case '×': return x * y;
    case '÷': return y === 0 ? 'Error' : x / y;
    case '%': return x % y;
    default: return y;
  }
}

function formatNumber(num) {
  if (num === 'Error') return 'Error';
  const n = parseFloat(num);
  if (isNaN(n)) return '0';
  if (Math.abs(n) > 1e15 || (Math.abs(n) < 1e-10 && n !== 0)) {
    return n.toExponential(6);
  }
  const str = String(n);
  if (str.includes('.') && str.split('.')[1].length > 10) {
    return n.toFixed(10).replace(/0+$/, '').replace(/\.$/, '');
  }
  return str;
}

export default function Calculator() {
  const intl = useIntl();
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const inputDigit = useCallback((digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      if (display.replace('-', '').replace('.', '').length >= 15) return;
      setDisplay(display === '0' ? digit : display + digit);
    }
  }, [display, waitingForOperand]);

  const inputDot = useCallback(() => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }, [display, waitingForOperand]);

  const clearAll = useCallback(() => {
    setDisplay('0');
    setPrev(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, []);

  const toggleSign = useCallback(() => {
    const val = parseFloat(display);
    if (val !== 0) setDisplay(String(-val));
  }, [display]);

  const handlePercent = useCallback(() => {
    const val = parseFloat(display);
    if (!isNaN(val)) setDisplay(String(val / 100));
  }, [display]);

  const backspace = useCallback(() => {
    if (waitingForOperand) return;
    if (display.length === 1 || (display.length === 2 && display[0] === '-')) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  }, [display, waitingForOperand]);

  const performOperation = useCallback((nextOp) => {
    const current = parseFloat(display);

    if (prev !== null && operator && !waitingForOperand) {
      const result = calculate(prev, current, operator);
      const resultStr = formatNumber(result);
      const entry = `${formatNumber(prev)} ${operator} ${formatNumber(current)} = ${resultStr}`;
      setHistory((h) => [entry, ...h].slice(0, 20));
      setDisplay(resultStr);
      setPrev(result === 'Error' ? null : result);
    } else {
      setPrev(current);
    }

    if (nextOp === '=') {
      if (prev !== null && operator && waitingForOperand) {
        // If pressing = when waiting for operand, just clear operator
      }
      setOperator(null);
      setWaitingForOperand(false);
    } else {
      setOperator(nextOp);
      setWaitingForOperand(true);
    }
  }, [display, prev, operator, waitingForOperand]);

  const handleButton = useCallback((btn) => {
    if (btn >= '0' && btn <= '9') return inputDigit(btn);
    if (btn === '.') return inputDot();
    if (btn === 'C') return clearAll();
    if (btn === '±') return toggleSign();
    if (btn === '%') return handlePercent();
    if (btn === '⌫') return backspace();
    if (['+', '−', '×', '÷', '='].includes(btn)) return performOperation(btn);
  }, [inputDigit, inputDot, clearAll, toggleSign, handlePercent, backspace, performOperation]);

  useEffect(() => {
    const keyMap = {
      'Enter': '=', '=': '=',
      '+': '+', '-': '−', '*': '×', '/': '÷',
      '%': '%', '.': '.', ',': '.',
      'Backspace': '⌫', 'Delete': 'C', 'Escape': 'C',
    };
    const handler = (e) => {
      const key = e.key;
      if (key >= '0' && key <= '9') {
        e.preventDefault();
        handleButton(key);
      } else if (keyMap[key]) {
        e.preventDefault();
        handleButton(keyMap[key]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleButton]);

  const getButtonStyle = (btn) => {
    if (btn === '=') return 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/25';
    if (['+', '−', '×', '÷'].includes(btn)) {
      const isActive = operator === btn && waitingForOperand;
      return isActive
        ? 'bg-blue-500 text-white'
        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50';
    }
    if (['C', '±', '%', '⌫'].includes(btn)) return 'bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600';
    return 'bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700';
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200"><FormattedMessage id="calcTitle" defaultMessage="Calculator" /></h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2"><FormattedMessage id="calcSubtitle" defaultMessage="Supports keyboard input" /></p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        {/* Display */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
          <div className={`text-right text-sm text-gray-400 dark:text-gray-500 mb-1 font-mono truncate min-h-[1.25rem] ${operator && prev !== null ? 'opacity-100' : 'opacity-0'}`}>
            {operator && prev !== null ? `${formatNumber(prev)} ${operator}` : '\u00A0'}
          </div>
          <div className="text-right text-4xl font-bold text-gray-800 dark:text-gray-100 font-mono truncate min-h-[2.5rem]">
            {display}
          </div>
        </div>

        {/* History toggle */}
        <div className="px-4 py-2 border-t border-gray-200 dark:border-slate-700 flex justify-between items-center">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {showHistory ? intl.formatMessage({ id: 'calcHideHistory', defaultMessage: 'Hide History' }) : `${intl.formatMessage({ id: 'calcHistory', defaultMessage: 'History' })} (${history.length})`}
          </button>
          {history.length > 0 && (
            <button
              onClick={() => setHistory([])}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              <FormattedMessage id="calcClear" defaultMessage="Clear" />
            </button>
          )}
        </div>

        {/* History panel */}
        {showHistory && history.length > 0 && (
          <div className="px-4 pb-3 max-h-32 overflow-y-auto border-b border-gray-200 dark:border-slate-700">
            {history.map((entry, i) => (
              <div key={i} className="text-xs font-mono text-gray-500 dark:text-gray-400 py-0.5 truncate">
                {entry}
              </div>
            ))}
          </div>
        )}

        {/* Button grid */}
        <div className="p-3 grid grid-cols-4 gap-2">
          {BUTTONS.flat().map((btn) => (
            <button
              key={btn}
              onClick={() => handleButton(btn)}
              className={`${btn === '0' ? '' : ''} h-14 rounded-xl text-lg font-semibold transition-all duration-150 active:scale-95 ${getButtonStyle(btn)}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-6">
        <FormattedMessage id="calcEmptyHistory" defaultMessage="Use your keyboard or click the buttons" />
      </p>
    </div>
  );
}
