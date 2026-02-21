import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="min-h-screen bg-uni-bg flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <span className="text-8xl sm:text-9xl font-black gradient-text">404</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-uni-text">
          Sorry, an unexpected error has occurred.
        </h1>
        {error && (
          <p className="text-uni-muted text-sm mb-4 italic">
            {error.statusText || error.message}
          </p>
        )}
        <p className="mb-8 text-uni-muted">
          You'll find lots to explore on the home page.
        </p>
        <a href="/" className="btn-primary">
          Back to Homepage
        </a>
      </div>
    </section>
  );
}
