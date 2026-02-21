import { useState, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generatePalette(locked, mode) {
  const baseHue = Math.floor(Math.random() * 360);
  const hues = {
    analogous: [0, 30, 60, 90, 120],
    complementary: [0, 15, 180, 195, 210],
    triadic: [0, 30, 120, 240, 270],
    random: Array.from({ length: 5 }, () => Math.floor(Math.random() * 360)),
  };
  const offsets = hues[mode] || hues.analogous;

  return locked.map((item, i) => {
    if (item.locked) return item;
    const h = (baseHue + offsets[i]) % 360;
    const s = 60 + Math.floor(Math.random() * 25);
    const l = 40 + Math.floor(Math.random() * 25);
    return { hex: hslToHex(h, s, l), locked: false };
  });
}

function ColorCard({ color, index, onToggleLock, onCopy }) {
  const intl = useIntl();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Determine if color is light
  const r = parseInt(color.hex.slice(1, 3), 16);
  const g = parseInt(color.hex.slice(3, 5), 16);
  const b = parseInt(color.hex.slice(5, 7), 16);
  const isLight = (r * 0.299 + g * 0.587 + b * 0.114) > 150;

  return (
    <div className="flex flex-col items-center group">
      <div
        className="w-full aspect-square rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: color.hex }}
        onClick={handleCopy}
      >
        <span className={`font-mono font-bold text-lg ${isLight ? 'text-gray-800' : 'text-white'}`}>
          {copied ? intl.formatMessage({ id: 'colorCopied' }) : color.hex.toUpperCase()}
        </span>
        {color.locked && (
          <div className={`absolute top-2 right-2 text-lg ${isLight ? 'text-gray-700' : 'text-white/80'}`}>
            🔒
          </div>
        )}
      </div>
      <button
        onClick={() => onToggleLock(index)}
        className={`mt-3 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          color.locked
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
            : 'bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
        }`}
      >
        {color.locked ? <FormattedMessage id="colorLocked" /> : <FormattedMessage id="colorLock" />}
      </button>
    </div>
  );
}

export default function ColorGenerator() {
  const [colors, setColors] = useState(() =>
    generatePalette(Array(5).fill({ hex: '#000', locked: false }), 'analogous')
  );
  const [mode, setMode] = useState('analogous');
  const [exportCopied, setExportCopied] = useState(false);

  const generate = useCallback(() => {
    setColors((prev) => generatePalette(prev, mode));
  }, [mode]);

  const toggleLock = (index) => {
    setColors((prev) => prev.map((c, i) => i === index ? { ...c, locked: !c.locked } : c));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const exportCSS = () => {
    const css = colors.map((c, i) => `  --color-${i + 1}: ${c.hex};`).join('\n');
    const full = `:root {\n${css}\n}`;
    navigator.clipboard.writeText(full).then(() => {
      setExportCopied(true);
      setTimeout(() => setExportCopied(false), 2000);
    });
  };

  const modes = ['analogous', 'complementary', 'triadic', 'random'];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200"><FormattedMessage id="colorTitle" /></h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2"><FormattedMessage id="colorSubtitle" /></p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                mode === m
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <button
          onClick={generate}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
        >
          <FormattedMessage id="colorGenerate" />
        </button>
        <button
          onClick={exportCSS}
          className="px-6 py-2 rounded-xl border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {exportCopied ? <FormattedMessage id="colorCopiedCss" /> : <FormattedMessage id="colorExportCss" />}
        </button>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
        {colors.map((color, index) => (
          <ColorCard
            key={index}
            color={color}
            index={index}
            onToggleLock={toggleLock}
            onCopy={copyToClipboard}
          />
        ))}
      </div>

      <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-8">
        <FormattedMessage id="colorSpaceHint" />
      </p>
    </div>
  );
}
