export default function HomeHeroAuth() {
  return (
    <section className="text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Welcome Back!
            <span className="sm:block"> Ready to Continue Your Journey? </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Pick up where you left off and keep making progress. Our tools and services are here to support your ongoing success.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-40 rounded border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring active:bg-blue-800 active:border-blue-800"
              href="/auth/dashboard"
            >
              Go to Dashboard
            </a>

            <a
              className="block w-40 rounded border border-blue-600 bg-transparent px-6 py-3 text-sm font-medium text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-700 active:border-blue-700"
              href="/about"
            >
              About This Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
