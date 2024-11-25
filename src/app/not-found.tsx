import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-[700px] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        {/* Error 404 with animation */}
        <h1 className="text-6xl font-extrabold md:text-8xl">404</h1>

        {/* Subheading */}
        <h2 className="text-xl text-gray-400 md:text-2xl">
          Oops! The page you’re looking for doesn’t exist.
        </h2>

        {/* Back to home button */}
        <Link
          href="/"
          className="text-blue-600 underline"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: cool background animation */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-3xl"></div>
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-green-600 opacity-30 blur-3xl"></div>
      </div> */}
    </div>
  );
};

export default NotFoundPage;
