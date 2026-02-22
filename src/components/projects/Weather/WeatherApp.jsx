import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const ICON_URL = 'https://openweathermap.org/img/wn';

// --- Inline SVG Icons ---

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  );
}

function DropletIcon({ className = "w-5 h-5 text-blue-400" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
    </svg>
  );
}

function WindIcon({ className = "w-5 h-5 text-teal-400" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
  );
}

function ThermometerIcon({ className = "w-5 h-5 text-orange-400" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V3m0 0a2 2 0 00-2 2v6.528a5 5 0 103.999 0V5a2 2 0 00-2-2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

function SunriseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

// --- Helper Functions ---

function formatTime(unix, timezone) {
  const date = new Date((unix + timezone) * 1000);
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
}

function getDayName(dateStr, intl) {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString())
    return intl.formatMessage({ id: 'weatherToday', defaultMessage: 'Today' });
  if (date.toDateString() === tomorrow.toDateString())
    return intl.formatMessage({ id: 'weatherTomorrow', defaultMessage: 'Tomorrow' });

  const locale = intl.locale.includes('hu') ? 'hu-HU' : 'en-US';
  return date.toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric' });
}

function groupForecastByDay(list, intl) {
  const days = {};
  list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  return Object.entries(days).slice(0, 5).map(([date, entries]) => {
    const temps = entries.map((e) => e.main.temp);
    const minTemp = Math.round(Math.min(...temps));
    const maxTemp = Math.round(Math.max(...temps));
    const middayEntry = entries.find((e) => e.dt_txt.includes('12:00:00')) || entries[Math.floor(entries.length / 2)];
    const totalPop = entries.reduce((sum, e) => sum + (e.pop || 0), 0) / entries.length;

    return {
      date,
      dayName: getDayName(date, intl),
      minTemp,
      maxTemp,
      icon: middayEntry.weather[0].icon,
      description: middayEntry.weather[0].description,
      humidity: middayEntry.main.humidity,
      wind: Math.round(middayEntry.wind.speed * 3.6),
      pop: Math.round(totalPop * 100),
      pressure: middayEntry.main.pressure,
    };
  });
}

function getTodayHourly(list) {
  const todayStr = new Date().toISOString().split('T')[0];
  return list.filter((item) => item.dt_txt.startsWith(todayStr)).slice(0, 8);
}

// --- Skeleton Components ---

function CurrentWeatherSkeleton() {
  return (
    <div className="rounded-2xl shadow-lg bg-uni-card border border-uni-border p-6 sm:p-8 animate-pulse">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-600" />
        <div className="flex-1 space-y-3 text-center sm:text-left w-full">
          <div className="h-8 w-48 bg-slate-200 dark:bg-slate-600 rounded-lg mx-auto sm:mx-0" />
          <div className="h-14 w-32 bg-slate-200 dark:bg-slate-600 rounded-lg mx-auto sm:mx-0" />
          <div className="h-5 w-40 bg-slate-200 dark:bg-slate-600 rounded-lg mx-auto sm:mx-0" />
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-6 pt-6 border-t border-uni-border">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600" />
            <div className="h-3 w-14 bg-slate-200 dark:bg-slate-600 rounded" />
            <div className="h-4 w-10 bg-slate-200 dark:bg-slate-600 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ForecastSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-40 bg-slate-200 dark:bg-slate-600 rounded-lg animate-pulse" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-2xl shadow-lg bg-uni-card border border-uni-border p-4 animate-pulse">
            <div className="space-y-3 flex flex-col items-center">
              <div className="h-4 w-16 bg-slate-200 dark:bg-slate-600 rounded" />
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600" />
              <div className="h-5 w-20 bg-slate-200 dark:bg-slate-600 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Error & Warning Components ---

function ErrorMessage({ message, onDismiss, intl }) {
  return (
    <div className="rounded-2xl shadow-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-5 flex items-start gap-4 animate-fade-in">
      <div className="flex-shrink-0 text-red-500 dark:text-red-400 mt-0.5"><AlertIcon /></div>
      <div className="flex-1">
        <h4 className="font-semibold text-red-800 dark:text-red-300 text-sm">
          <FormattedMessage id="weatherError" defaultMessage="Something went wrong" />
        </h4>
        <p className="text-red-600 dark:text-red-400 text-sm mt-1">{message}</p>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="flex-shrink-0 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors" aria-label="Dismiss">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

function NoApiKeyWarning() {
  return (
    <div className="rounded-2xl shadow-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-500 mb-4"><AlertIcon /></div>
      <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300">
        <FormattedMessage id="weatherApiError" defaultMessage="API Key Not Configured" />
      </h3>
      <p className="text-amber-600 dark:text-amber-400 text-sm mt-2 max-w-md mx-auto">
        <FormattedMessage id="weatherApiErrorDesc" defaultMessage="To use this weather app, you need to add your OpenWeatherMap API key." />
      </p>
    </div>
  );
}

// --- Stat Item ---

function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-9 h-9 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[11px] text-uni-muted leading-tight text-center">{label}</span>
      <span className="text-sm font-semibold text-uni-text">{value}</span>
    </div>
  );
}

// --- Current Weather Card ---

function CurrentWeatherCard({ data, intl }) {
  const { name, sys, main, weather, wind, visibility, clouds, timezone } = data;
  const iconCode = weather[0].icon;
  const description = weather[0].description;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const tempMin = Math.round(main.temp_min);
  const tempMax = Math.round(main.temp_max);
  const humidity = main.humidity;
  const windSpeed = Math.round(wind.speed * 3.6);
  const pressure = main.pressure;
  const visibilityKm = (visibility / 1000).toFixed(1);
  const cloudiness = clouds.all;
  const sunrise = sys.sunrise ? formatTime(sys.sunrise, timezone) : '--:--';
  const sunset = sys.sunset ? formatTime(sys.sunset, timezone) : '--:--';

  return (
    <div className="rounded-2xl shadow-lg bg-uni-card border border-uni-border overflow-hidden animate-fade-in">
      {/* Main info section */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-500/20 dark:to-indigo-500/20 flex items-center justify-center">
              <img src={`${ICON_URL}/${iconCode}@4x.png`} alt={description} className="w-28 h-28 drop-shadow-lg" />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-uni-muted">
              <LocationIcon />
              <h2 className="text-xl font-semibold text-uni-text">
                {name}
                {sys.country && <span className="text-uni-muted font-normal ml-1">, {sys.country}</span>}
              </h2>
            </div>

            <div className="mt-2 flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-6xl font-bold text-uni-text tracking-tight">{temp}</span>
              <span className="text-2xl text-uni-muted">&deg;C</span>
            </div>

            <p className="mt-1 text-uni-muted capitalize text-lg">{description}</p>

            <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 text-sm text-uni-muted/80">
              <span><FormattedMessage id="weatherFeelsLike" defaultMessage="Feels like" /> {feelsLike}&deg;C</span>
              <span className="text-uni-border">|</span>
              <span>H: {tempMax}&deg; L: {tempMin}&deg;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 px-6 pb-6 pt-4 border-t border-uni-border bg-white/30 dark:bg-white/5">
        <StatItem
          icon={<DropletIcon />}
          label={intl.formatMessage({ id: 'weatherHumidity', defaultMessage: 'Humidity' })}
          value={`${humidity}%`}
        />
        <StatItem
          icon={<WindIcon />}
          label={intl.formatMessage({ id: 'weatherWind', defaultMessage: 'Wind' })}
          value={`${windSpeed} km/h`}
        />
        <StatItem
          icon={<GaugeIcon />}
          label={intl.formatMessage({ id: 'weatherPressure', defaultMessage: 'Pressure' })}
          value={`${pressure} hPa`}
        />
        <StatItem
          icon={<EyeIcon />}
          label={intl.formatMessage({ id: 'weatherVisibility', defaultMessage: 'Visibility' })}
          value={`${visibilityKm} km`}
        />
        <StatItem
          icon={<CloudIcon />}
          label={intl.formatMessage({ id: 'weatherClouds', defaultMessage: 'Clouds' })}
          value={`${cloudiness}%`}
        />
        <StatItem
          icon={<SunriseIcon />}
          label={`${intl.formatMessage({ id: 'weatherSunrise', defaultMessage: 'Sunrise' })} / ${intl.formatMessage({ id: 'weatherSunset', defaultMessage: 'Sunset' })}`}
          value={<span className="text-xs">{sunrise} / {sunset}</span>}
        />
      </div>
    </div>
  );
}

// --- Hourly Forecast Row ---

function HourlyForecast({ hours, intl }) {
  if (!hours || hours.length === 0) return null;

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="text-lg font-semibold text-uni-text">
        <FormattedMessage id="weatherHourly" defaultMessage="Today's Forecast" />
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {hours.map((h) => {
          const time = h.dt_txt.split(' ')[1].slice(0, 5);
          const temp = Math.round(h.main.temp);
          const pop = Math.round((h.pop || 0) * 100);
          return (
            <div
              key={h.dt}
              className="flex-shrink-0 w-20 rounded-2xl bg-uni-card border border-uni-border p-3 text-center hover:scale-105 transition-all duration-300"
            >
              <p className="text-xs font-medium text-uni-muted">{time}</p>
              <img src={`${ICON_URL}/${h.weather[0].icon}@2x.png`} alt={h.weather[0].description} className="w-10 h-10 mx-auto" />
              <p className="text-sm font-bold text-uni-text">{temp}&deg;</p>
              {pop > 0 && (
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  <DropletIcon className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] text-blue-400">{pop}%</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Forecast Card ---

function ForecastCard({ day }) {
  return (
    <div className="rounded-2xl shadow-lg bg-uni-card border border-uni-border p-4 text-center hover:scale-105 transition-all duration-300 cursor-default">
      <p className="text-sm font-semibold text-uni-palette">{day.dayName}</p>
      <img src={`${ICON_URL}/${day.icon}@2x.png`} alt={day.description} className="w-14 h-14 mx-auto drop-shadow" />

      <div className="flex items-center justify-center gap-2 mt-1">
        <span className="text-lg font-bold text-uni-text">{day.maxTemp}&deg;</span>
        <span className="text-sm text-uni-muted/60">{day.minTemp}&deg;</span>
      </div>

      <p className="text-xs text-uni-muted capitalize mt-0.5 truncate">{day.description}</p>

      <div className="grid grid-cols-3 gap-1 mt-3 pt-2 border-t border-uni-border">
        <div className="flex flex-col items-center" title="Humidity">
          <DropletIcon className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] text-uni-muted mt-0.5">{day.humidity}%</span>
        </div>
        <div className="flex flex-col items-center" title="Wind">
          <WindIcon className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[10px] text-uni-muted mt-0.5">{day.wind}</span>
        </div>
        <div className="flex flex-col items-center" title="Rain">
          <span className="text-[10px]">🌧</span>
          <span className="text-[10px] text-uni-muted mt-0.5">{day.pop}%</span>
        </div>
      </div>
    </div>
  );
}

// --- Main WeatherApp Component ---

export default function WeatherApp() {
  const intl = useIntl();
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const hasApiKey = Boolean(API_KEY);

  async function fetchWeather(cityName) {
    if (!cityName.trim()) return;
    if (!hasApiKey) {
      setError('API key is not configured. Please add VITE_OPENWEATHER_API_KEY to your .env file.');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const currentRes = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(cityName.trim())}&appid=${API_KEY}&units=metric`
      );

      if (!currentRes.ok) {
        if (currentRes.status === 404) throw new Error(`City "${cityName.trim()}" not found.`);
        if (currentRes.status === 401) throw new Error('Invalid API key.');
        throw new Error(`Weather service error (${currentRes.status}).`);
      }

      const currentData = await currentRes.json();

      const forecastRes = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(cityName.trim())}&appid=${API_KEY}&units=metric`
      );

      if (!forecastRes.ok) throw new Error('Failed to fetch forecast data.');

      const forecastData = await forecastRes.json();

      setCurrentWeather(currentData);
      setForecast(groupForecastByDay(forecastData.list, intl));
      setHourly(getTodayHourly(forecastData.list));
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(err.message);
      }
      setCurrentWeather(null);
      setForecast(null);
      setHourly(null);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather(city);
  }

  return (
    <div className="min-h-screen bg-uni-bg px-4 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-uni-text">
            <FormattedMessage id="weatherTitle" defaultMessage="Weather App" />
          </h1>
          <p className="text-uni-muted text-sm">
            <FormattedMessage id="weatherIntro" defaultMessage="Search for any city to get current weather and a 5-day forecast" />
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={city}
              onInput={(e) => setCity(e.target.value)}
              placeholder={intl.formatMessage({ id: 'weatherPlaceholder', defaultMessage: 'Enter city name...' })}
              className="w-full px-4 py-3 pl-11 rounded-xl bg-white/50 dark:bg-slate-700/50 border border-uni-border text-uni-text placeholder:text-uni-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
              disabled={loading}
              aria-label="City name"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-uni-muted/60">
              <SearchIcon />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <SearchIcon />
            <span className="hidden sm:inline"><FormattedMessage id="weatherSearch" defaultMessage="Search" /></span>
          </button>
        </form>

        {/* No API Key */}
        {!hasApiKey && <NoApiKeyWarning />}

        {/* Error */}
        {error && <ErrorMessage message={error} onDismiss={() => setError(null)} intl={intl} />}

        {/* Loading */}
        {loading && (
          <div className="space-y-6">
            <CurrentWeatherSkeleton />
            <ForecastSkeleton />
          </div>
        )}

        {/* Current Weather */}
        {!loading && currentWeather && <CurrentWeatherCard data={currentWeather} intl={intl} />}

        {/* Hourly Forecast */}
        {!loading && hourly && hourly.length > 0 && <HourlyForecast hours={hourly} intl={intl} />}

        {/* 5-Day Forecast */}
        {!loading && forecast && forecast.length > 0 && (
          <div className="space-y-3 animate-fade-in">
            <h3 className="text-lg font-semibold text-uni-text">
              <FormattedMessage id="weatherForecast" defaultMessage="5-Day Forecast" />
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {forecast.map((day) => (
                <ForecastCard key={day.date} day={day} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !currentWeather && !error && hasApiKey && !hasSearched && (
          <div className="rounded-2xl shadow-lg bg-uni-card border border-uni-border p-10 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-500/20 dark:to-indigo-500/20 mb-4">
              <CloudIcon />
            </div>
            <h3 className="text-lg font-semibold text-uni-text">
              <FormattedMessage id="weatherSearchCity" defaultMessage="Search for a city" />
            </h3>
            <p className="text-uni-muted text-sm mt-1">
              <FormattedMessage id="weatherSearchCityDesc" defaultMessage="Enter a city name above to see the current weather and forecast." />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
