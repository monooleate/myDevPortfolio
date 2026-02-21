import { useState, useEffect, useCallback, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

function getModes(intl) {
  return {
    work: { label: intl.formatMessage({ id: 'pomoWork', defaultMessage: 'Work' }), defaultMinutes: 25, color: 'from-blue-500 to-indigo-500', ring: '#6366f1' },
    shortBreak: { label: intl.formatMessage({ id: 'pomoShortBreak', defaultMessage: 'Short Break' }), defaultMinutes: 5, color: 'from-emerald-500 to-teal-500', ring: '#14b8a6' },
    longBreak: { label: intl.formatMessage({ id: 'pomoLongBreak', defaultMessage: 'Long Break' }), defaultMinutes: 15, color: 'from-orange-500 to-amber-500', ring: '#f59e0b' },
  };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function ProgressRing({ progress, color, size = 240, stroke = 8 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        className="text-gray-200 dark:text-slate-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-1000 ease-linear"
      />
    </svg>
  );
}

export default function PomodoroTimer() {
  const intl = useIntl();
  const MODES = getModes(intl);

  const [mode, setMode] = useState('work');
  const [durations, setDurations] = useState({
    work: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });
  const [timeLeft, setTimeLeft] = useState(durations.work);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const intervalRef = useRef(null);

  const totalTime = durations[mode];
  const progress = 1 - timeLeft / totalTime;
  const currentMode = MODES[mode];

  const playSound = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 800;
      osc.type = 'sine';
      gain.gain.value = 0.3;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.stop(ctx.currentTime + 0.5);
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.frequency.value = 1000;
        osc2.type = 'sine';
        gain2.gain.value = 0.3;
        osc2.start();
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc2.stop(ctx.currentTime + 0.8);
      }, 300);
    } catch (e) {
      // Audio not supported
    }
  }, []);

  const switchMode = useCallback((newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(durations[newMode]);
  }, [durations]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          playSound();

          if (mode === 'work') {
            const newSessions = sessions + 1;
            setSessions(newSessions);
            if (newSessions % 4 === 0) {
              setMode('longBreak');
              setTimeLeft(durations.longBreak);
            } else {
              setMode('shortBreak');
              setTimeLeft(durations.shortBreak);
            }
          } else {
            setMode('work');
            setTimeLeft(durations.work);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode, sessions, durations, playSound]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  const updateDuration = (key, minutes) => {
    const clamped = Math.max(1, Math.min(60, minutes));
    const newDurations = { ...durations, [key]: clamped * 60 };
    setDurations(newDurations);
    if (key === mode && !isRunning) {
      setTimeLeft(clamped * 60);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          <FormattedMessage id="pomoTitle" defaultMessage="Pomodoro Timer" />
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          <FormattedMessage id="pomoSubtitle" defaultMessage="Stay focused with the Pomodoro Technique" />
        </p>
      </div>

      {/* Mode tabs */}
      <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 mb-8">
        {Object.entries(MODES).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => switchMode(key)}
            className={`flex-1 px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
              mode === key
                ? `bg-gradient-to-r ${MODES[key].color} text-white`
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timer circle */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <ProgressRing progress={progress} color={currentMode.ring} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold font-mono text-gray-800 dark:text-gray-100">
              {formatTime(timeLeft)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 capitalize">
              {currentMode.label}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={resetTimer}
          className="px-5 py-2.5 rounded-xl border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <FormattedMessage id="pomoReset" defaultMessage="Reset" />
        </button>
        <button
          onClick={toggleTimer}
          className={`px-8 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg bg-gradient-to-r ${currentMode.color}`}
        >
          {isRunning
            ? <FormattedMessage id="pomoPause" defaultMessage="Pause" />
            : <FormattedMessage id="pomoStart" defaultMessage="Start" />
          }
        </button>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-5 py-2.5 rounded-xl border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          ⚙
        </button>
      </div>

      {/* Sessions counter */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-700">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            <FormattedMessage id="pomoSessions" defaultMessage="Sessions completed" />:
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{sessions}</span>
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i < (sessions % 4) ? 'bg-blue-500' : 'bg-gray-200 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          {4 - (sessions % 4)} session{4 - (sessions % 4) !== 1 ? 's' : ''} until long break
        </p>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-lg">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            <FormattedMessage id="pomoSettings" defaultMessage="Timer Settings (minutes)" />
          </h3>
          {Object.entries(MODES).map(([key, { label }]) => (
            <div key={key} className="flex items-center justify-between mb-3 last:mb-0">
              <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateDuration(key, durations[key] / 60 - 1)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-sm font-bold"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-mono font-semibold text-gray-800 dark:text-gray-200">
                  {durations[key] / 60}
                </span>
                <button
                  onClick={() => updateDuration(key, durations[key] / 60 + 1)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-6">
        Complete 4 work sessions for a long break
      </p>
    </div>
  );
}
