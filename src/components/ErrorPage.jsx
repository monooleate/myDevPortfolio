import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl py-32">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Sorry, an unexpected error has occurred.</p>
                <p className="lead">
                    <i>{error.statusText || error.message}</i>
                </p>
                <p class="my-4 text-lg font-bold text-gray-500 dark:text-gray-400">You'll find lots to explore on the home page. </p>
                <a href="/" class="inline-flex bg-yellow-200 text-black hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
            </div>   
        </div>
    </section>
  );
}

